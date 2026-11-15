// Starship Escape: a small room-by-room p5play arcade adventure.
const GAME_W = 960;
const GAME_H = 640;
const ROOM_LEFT = 64;
const ROOM_RIGHT = 896;
const ROOM_TOP = 96;
const ROOM_BOTTOM = 574;
const DOOR_X = GAME_W / 2;
const PLAYER_SPEED = 3.4;
const SHOT_DELAY = 170;

const ROOM_DATA = [
  {
    name: 'Airlock',
    subtitle: 'Clear the intruders and recover the access key.',
    enemies: [
      { x: 220, y: 210, hp: 8 },
      { x: 740, y: 210, hp: 8 },
      { x: 470, y: 330, hp: 10 }
    ]
  },
  {
    name: 'Reactor Core',
    subtitle: 'The console is locked. Decode the signal after clearing the room.',
    enemies: [
      { x: 210, y: 200, hp: 9 },
      { x: 740, y: 200, hp: 9 },
      { x: 330, y: 390, hp: 9 },
      { x: 660, y: 390, hp: 9 }
    ]
  },
  {
    name: 'Observation Deck',
    subtitle: 'The stars are beautiful. The security drones are not.',
    enemies: [
      { x: 210, y: 220, hp: 10 },
      { x: 740, y: 220, hp: 10 },
      { x: 470, y: 300, hp: 11 },
      { x: 330, y: 440, hp: 9 }
    ]
  },
  {
    name: 'Command Deck',
    subtitle: 'Defeat the captain, claim the key, and escape to the top compartment.',
    enemies: [
      { x: 240, y: 220, hp: 12 },
      { x: 700, y: 220, hp: 12 },
      { x: 470, y: 290, hp: 30, boss: true }
    ]
  }
];

let player;
let enemies = [];
let friendlyShots = [];
let hostileShots = [];
let roomIndex = 0;
let roomKey;
let keyCollected = false;
let health = 150;
let ammo = 20;
let lastShotAt = 0;
let roomClear = false;
let consoleSolved = false;
let puzzleOpen = false;
let puzzleEntry = [];
let puzzleFeedback = '';
let gameState = 'playing';
let stars = [];
let damageFlash = 0;

function setup() {
  const canvas = createCanvas(GAME_W, GAME_H);
  canvas.parent('game');
  world.gravity.y = 0;
  angleMode(RADIANS);

  for (let i = 0; i < 90; i++) {
    stars.push({
      x: random(GAME_W),
      y: random(GAME_H),
      size: random(1, 3),
      brightness: random(90, 220)
    });
  }

  player = new Sprite(DOOR_X, ROOM_BOTTOM - 48, 28, 28, 'none');
  player.diameter = 28;
  player.color = '#55e6e2';
  player.stroke = '#d4ffff';
  player.physics = NONE;
  loadRoom(0);
}

function draw() {
  drawBackdrop();
  drawRoom();

  if (gameState === 'playing') {
    updateGame();
  }

  drawHud();
  drawRoomDecorations();
  drawPuzzlePanel();
  drawEndScreen();
}

function drawBackdrop() {
  background('#080d1b');
  noStroke();
  for (const star of stars) {
    fill(175, 216, 255, star.brightness);
    circle(star.x, star.y, star.size);
  }
  fill('#0d1830');
  rect(0, 0, GAME_W, 76);
  rect(0, 592, GAME_W, 48);
}

function drawRoom() {
  noStroke();
  fill('#111d34');
  rect(ROOM_LEFT, ROOM_TOP, ROOM_RIGHT - ROOM_LEFT, ROOM_BOTTOM - ROOM_TOP, 22);
  stroke('#314867');
  strokeWeight(3);
  noFill();
  rect(ROOM_LEFT, ROOM_TOP, ROOM_RIGHT - ROOM_LEFT, ROOM_BOTTOM - ROOM_TOP, 22);

  const doorOpen = keyCollected;
  noStroke();
  fill(doorOpen ? '#43e7ca' : '#263b59');
  rect(DOOR_X - 44, ROOM_TOP - 2, 88, 23, 8);
  fill(doorOpen ? '#d5fff2' : '#58708f');
  rect(DOOR_X - 28, ROOM_TOP + 4, 56, 4, 2);
}

function drawRoomDecorations() {
  const room = ROOM_DATA[roomIndex];
  fill('#d7e8ff');
  noStroke();
  textAlign(LEFT, TOP);
  textSize(22);
  text(room.name, 82, 108);
  textSize(12);
  fill('#8fa7c9');
  text(room.subtitle, 82, 137);

  if (roomIndex === 1 && !consoleSolved) {
    drawConsole();
  }

  if (roomKey && !keyCollected) {
    push();
    translate(roomKey.x, roomKey.y);
    rotate(frameCount * 0.035);
    noStroke();
    fill('#ffe27a');
    circle(0, 0, 22);
    fill('#111d34');
    circle(0, 0, 8);
    rect(5, -2, 14, 4, 2);
    rect(14, -2, 3, 7, 1);
    rect(19, -2, 3, 6, 1);
    pop();
  }

  if (damageFlash > 0) {
    noStroke();
    fill(255, 54, 72, min(80, damageFlash * 3));
    rect(0, 0, GAME_W, GAME_H);
    damageFlash--;
  }
}

function drawConsole() {
  const consoleX = 155;
  const consoleY = 350;
  rectMode(CENTER);
  stroke('#58c8ec');
  strokeWeight(2);
  fill('#172f49');
  rect(consoleX, consoleY, 62, 54, 8);
  noStroke();
  fill('#a9f6ff');
  textAlign(CENTER, CENTER);
  textSize(19);
  text('⌘', consoleX, consoleY - 5);
  textSize(10);
  fill('#8fa7c9');
  text('SIGNAL LOG', consoleX, consoleY + 43);
  rectMode(CORNER);

  if (roomClear) {
    fill('#ffe27a');
    textAlign(CENTER, CENTER);
    textSize(13);
    text('Press E near the console', consoleX, consoleY + 66);
  }
}

function drawPuzzlePanel() {
  if (!puzzleOpen) return;

  noStroke();
  fill(4, 8, 20, 225);
  rect(0, 0, GAME_W, GAME_H);
  fill('#12223b');
  stroke('#63d7f0');
  strokeWeight(2);
  rect(235, 180, 490, 280, 18);

  noStroke();
  fill('#c9f8ff');
  textAlign(CENTER, CENTER);
  textSize(25);
  text('CONSTELLATION LOCK', GAME_W / 2, 220);
  textSize(15);
  fill('#b4c9e5');
  text('Signal log:  STAR  →  MOON  →  COMET', GAME_W / 2, 270);
  text('Enter the symbols in order:  1 = Comet   2 = Moon   3 = Star', GAME_W / 2, 306);
  textSize(23);
  fill('#ffe27a');
  text(puzzleEntry.join('  ·  ') || 'Press 1, 2, or 3', GAME_W / 2, 352);
  textSize(14);
  fill('#9cecff');
  text(puzzleFeedback || 'Press Enter to submit · Backspace to correct · Esc to close', GAME_W / 2, 407);
}

function drawHud() {
  noStroke();
  textAlign(LEFT, CENTER);
  fill('#d9e8ff');
  textSize(16);
  text(`ROOM ${roomIndex + 1} / ${ROOM_DATA.length}`, 32, 34);
  fill('#91a9c8');
  textSize(12);
  text('ARROWS MOVE  ·  SPACE FIRE  ·  E USE CONSOLE  ·  R RESTART', 32, 57);

  fill('#31435e');
  rect(675, 23, 150, 16, 8);
  fill(health > 50 ? '#55e6aa' : '#ff647b');
  rect(675, 23, 150 * max(0, health) / 150, 16, 8);
  fill('#e8f3ff');
  textAlign(LEFT, CENTER);
  textSize(13);
  text(`HULL ${health} / 150`, 837, 31);
  text(`AMMO ${ammo} / 20`, 675, 54);
  text(keyCollected ? 'KEY SECURED' : (roomClear ? 'KEY: FIND IT' : `HOSTILES ${enemies.length}`), 790, 54);

  if (gameState === 'playing' && enemies.length === 0 && !roomClear) {
    fill('#bcefff');
    textAlign(CENTER, CENTER);
    textSize(13);
    text('Area secure — look for the access key', GAME_W / 2, ROOM_BOTTOM - 22);
  }
}

function drawEndScreen() {
  if (gameState === 'playing') return;

  noStroke();
  fill(4, 8, 20, 225);
  rect(0, 0, GAME_W, GAME_H);
  textAlign(CENTER, CENTER);
  fill(gameState === 'won' ? '#9dffd8' : '#ff8291');
  textSize(42);
  text(gameState === 'won' ? 'ESCAPE COMPLETE!' : 'HULL BREACHED', GAME_W / 2, 270);
  fill('#d9e8ff');
  textSize(18);
  text(gameState === 'won'
    ? 'You escaped the ship and reached the top compartment.'
    : 'The ship is lost. Try another run.', GAME_W / 2, 322);
  fill('#9cecff');
  textSize(15);
  text('Press R to play again', GAME_W / 2, 374);
}

function updateGame() {
  if (puzzleOpen) return;
  movePlayer();
  updateEnemies();
  updateShots();
  collectRoomKey();
  updateRoomState();
  tryToEscape();

  if (keyIsDown(32)) fireBurst();
}

function movePlayer() {
  let dx = 0;
  let dy = 0;
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) dx--;
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) dx++;
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) dy--;
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) dy++;

  if (dx !== 0 || dy !== 0) {
    const length = Math.hypot(dx, dy);
    player.x += (dx / length) * PLAYER_SPEED;
    player.y += (dy / length) * PLAYER_SPEED;
  }

  player.x = constrain(player.x, ROOM_LEFT + 24, ROOM_RIGHT - 24);
  player.y = constrain(player.y, ROOM_TOP + 30, ROOM_BOTTOM - 24);
}

function updateEnemies() {
  for (const enemy of enemies) {
    const dx = player.x - enemy.sprite.x;
    const dy = player.y - enemy.sprite.y;
    const distance = Math.hypot(dx, dy) || 1;
    enemy.attackClock--;

    if (distance > 68) {
      const speed = enemy.boss ? 0.75 : 0.95;
      enemy.sprite.x += (dx / distance) * speed;
      enemy.sprite.y += (dy / distance) * speed;
    }

    if (enemy.attackClock <= 0) {
      if (distance < 78) {
        damagePlayer(20);
        enemy.attackClock = enemy.boss ? 48 : 60;
      } else {
        launchHostileShot(enemy, dx / distance, dy / distance);
        enemy.attackClock = enemy.boss ? 75 : 120;
      }
    }
  }
}

function updateShots() {
  for (let i = friendlyShots.length - 1; i >= 0; i--) {
    const shot = friendlyShots[i];
    shot.sprite.x += shot.velX;
    shot.sprite.y += shot.velY;
    shot.life--;
    let hit = false;

    for (let j = enemies.length - 1; j >= 0; j--) {
      const enemy = enemies[j];
      if (distanceBetween(shot.sprite, enemy.sprite) < (enemy.boss ? 29 : 23)) {
        enemy.healthValue -= shot.damage;
        if (enemy.healthValue <= 0) removeEnemy(j);
        hit = true;
        break;
      }
    }

    if (hit || shot.life <= 0 || outsideRoom(shot.sprite)) {
      shot.sprite.remove();
      friendlyShots.splice(i, 1);
    }
  }

  for (let i = hostileShots.length - 1; i >= 0; i--) {
    const shot = hostileShots[i];
    shot.sprite.x += shot.velX;
    shot.sprite.y += shot.velY;
    shot.life--;

    if (distanceBetween(shot.sprite, player) < 22) {
      damagePlayer(10);
      shot.sprite.remove();
      hostileShots.splice(i, 1);
    } else if (shot.life <= 0 || outsideRoom(shot.sprite)) {
      shot.sprite.remove();
      hostileShots.splice(i, 1);
    }
  }
}

function fireBurst() {
  if (ammo <= 0 || millis() - lastShotAt < SHOT_DELAY || enemies.length === 0) return;

  const target = nearestEnemy();
  if (!target) return;
  const aim = Math.atan2(target.sprite.y - player.y, target.sprite.x - player.x);
  const spread = [-0.22, -0.11, 0, 0.11, 0.22];

  for (const offset of spread) {
    const angle = aim + offset;
    const sprite = new Sprite(player.x + Math.cos(angle) * 20, player.y + Math.sin(angle) * 20, 8, 8, 'none');
    sprite.diameter = 8;
    sprite.color = '#ffe27a';
    sprite.stroke = '#fff6c7';
    sprite.physics = NONE;
    friendlyShots.push({
      sprite,
      velX: Math.cos(angle) * 8,
      velY: Math.sin(angle) * 8,
      damage: 2,
      life: 62
    });
  }

  ammo--;
  lastShotAt = millis();
}

function launchHostileShot(enemy, directionX, directionY) {
  const sprite = new Sprite(enemy.sprite.x, enemy.sprite.y, 9, 9, 'none');
  sprite.diameter = 9;
  sprite.color = enemy.boss ? '#ff6384' : '#bd78ff';
  sprite.stroke = '#ffe3ff';
  sprite.physics = NONE;
  const speed = enemy.boss ? 3.4 : 3;
  hostileShots.push({
    sprite,
    velX: directionX * speed,
    velY: directionY * speed,
    life: 180
  });
}

function updateRoomState() {
  if (enemies.length !== 0 || roomClear) return;
  roomClear = true;

  if (roomIndex !== 1 || consoleSolved) {
    spawnRoomKey();
  }
}

function spawnRoomKey() {
  if (!roomKey && !keyCollected) {
    roomKey = {
      x: constrain(player.x, ROOM_LEFT + 90, ROOM_RIGHT - 90),
      y: constrain(player.y - 72, ROOM_TOP + 90, ROOM_BOTTOM - 75)
    };
  }
}

function collectRoomKey() {
  if (roomKey && distanceBetween(player, roomKey) < 28) {
    roomKey = null;
    keyCollected = true;
  }
}

function tryToEscape() {
  if (!keyCollected || Math.abs(player.x - DOOR_X) > 52 || player.y > ROOM_TOP + 42) return;

  if (roomIndex === ROOM_DATA.length - 1) {
    gameState = 'won';
    return;
  }

  loadRoom(roomIndex + 1);
}

function loadRoom(nextRoom) {
  for (const enemy of enemies) enemy.sprite.remove();
  for (const shot of friendlyShots) shot.sprite.remove();
  for (const shot of hostileShots) shot.sprite.remove();

  roomIndex = nextRoom;
  friendlyShots = [];
  hostileShots = [];
  roomKey = null;
  keyCollected = false;
  roomClear = false;
  consoleSolved = roomIndex !== 1;
  puzzleOpen = false;
  puzzleEntry = [];
  ammo = 20;
  player.x = DOOR_X;
  player.y = ROOM_BOTTOM - 48;

  enemies = ROOM_DATA[roomIndex].enemies.map((details) => {
    const sprite = new Sprite(details.x, details.y, details.boss ? 48 : 34, details.boss ? 48 : 34, 'none');
    sprite.diameter = details.boss ? 48 : 34;
    sprite.color = details.boss ? '#ff5477' : '#9d72ff';
    sprite.stroke = details.boss ? '#ffd2dc' : '#e5d7ff';
    sprite.physics = NONE;
    return {
      sprite,
      healthValue: details.hp,
      boss: Boolean(details.boss),
      attackClock: random(50, 110)
    };
  });
}

function removeEnemy(index) {
  enemies[index].sprite.remove();
  enemies.splice(index, 1);
}

function nearestEnemy() {
  if (enemies.length === 0) return null;
  return enemies.reduce((nearest, enemy) =>
    distanceBetween(player, enemy.sprite) < distanceBetween(player, nearest.sprite) ? enemy : nearest
  );
}

function damagePlayer(amount) {
  if (gameState !== 'playing') return;
  health = max(0, health - amount);
  damageFlash = 12;
  if (health === 0) gameState = 'lost';
}

function distanceBetween(first, second) {
  return Math.hypot(first.x - second.x, first.y - second.y);
}

function outsideRoom(sprite) {
  return sprite.x < ROOM_LEFT || sprite.x > ROOM_RIGHT ||
    sprite.y < ROOM_TOP || sprite.y > ROOM_BOTTOM;
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    location.reload();
    return false;
  }

  if (puzzleOpen) {
    handlePuzzleInput();
    return false;
  }

  if ((key === 'e' || key === 'E') && roomIndex === 1 && roomClear && !consoleSolved) {
    const consolePosition = { x: 155, y: 350 };
    if (distanceBetween(player, consolePosition) < 76) {
      puzzleOpen = true;
      puzzleEntry = [];
      puzzleFeedback = '';
    }
    return false;
  }

  if ([LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW, 32, 65, 68, 87, 83].includes(keyCode)) {
    return false;
  }

  return true;
}

function handlePuzzleInput() {
  if (keyCode === ESCAPE) {
    puzzleOpen = false;
    return;
  }
  if (keyCode === BACKSPACE) {
    puzzleEntry.pop();
    return;
  }
  if (key === '1' || key === '2' || key === '3') {
    if (puzzleEntry.length < 3) puzzleEntry.push(key);
    return;
  }
  if (keyCode === ENTER && puzzleEntry.length === 3) {
    if (puzzleEntry.join('') === '321') {
      consoleSolved = true;
      puzzleOpen = false;
      puzzleFeedback = '';
      spawnRoomKey();
    } else {
      puzzleEntry = [];
      puzzleFeedback = 'Incorrect sequence. Read the signal log and try again.';
    }
  }
}
