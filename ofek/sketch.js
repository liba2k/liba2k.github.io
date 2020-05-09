var canvasWidth = 640;
var canvasHight = 480;

var player = 0;
var playerX = 300;
var playerY = 100;
var sprWidth = 64;
var sprHight = 64;
var speed = 4;

var numberOfMonsters = 8;
var projectiel = 0;

var direction = 90;
var score = 0;
var song;
var gameOver;
var winner;

function preload() {
    playerImg = loadImage("images/characters.png");
    backgroundImg = loadImage("images/background2.png");
    monsterImg = loadImage("images/characters7.png");
    projectileImg = loadImage("images/donut1.png");
    song = loadSound("music/lucky_dragons.mp3", loaded);
}
function setup() {
    
    var canvas = createCanvas(canvasWidth,canvasHight);
    canvas.parent('sketch-holder');
    player = createSprite(playerX, playerY, sprWidth, sprHight);
    player.addImage(playerImg, "images/characters.png");
    projectiel = new Group();
    enemy = new Group();
    player.setCollider("rectangle", 0, 0, 40, 40);
    resetGame(); 
}
function resetGame(){
    gameOver = false;
    winner = false;
    numberOfMonsters = 4;//parseInt(prompt("Please enter how many monsters you want", "8"));
    enemy.removeSprites();
    for (i = 0; i < numberOfMonsters ; i++) {
        var monster = createSprite(Math.random()*640, Math.random()*480, sprWidth, sprHight);
        monster.addImage(monsterImg, "images/characters7.png");
        monster.setCollider("rectangle", 0, 0, 40, 40);
        enemy.add(monster);
    }
}
function enemyMove(monster, index) {
    if (index % 3 == 0){
        monster.attractionPoint(0.2, player.position.x, player.position.y);
        monster.maxSpeed = 4;   
    } else {
        direction += 2;
        monster.setSpeed(3, direction);    
    }
}
function enemyMovements() {
    enemy.toArray().forEach(enemyMove);
}
function collisions(){
    enemy.overlap(projectiel, destroyOther);
    player.collide(enemy, gameOverFunc);
}
function destroyOther (destroyed) {
    destroyed.remove();
    projectiel.remove();
    score++;
}
function loaded() {
    song.play();
    song.loop();
}
function gameOverFunc() {
    score = 0;
    gameOver = true;
}
function mousePressed() {
    projectiel = createSprite(player.position.x, player.position.y);
    projectiel.addImage(projectileImg);
    projectiel.attractionPoint(5 + speed, mouseX, mouseY);
    projectiel.setCollider("rectangle", 0, 0, 40, 40);
}
function playerControls() {
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
         player.position.x += speed;
        if (player.position.x + sprWidth/2 > canvasWidth) {
            player.position.x = canvasWidth - sprWidth/2;
        }
    }
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        player.position.x -= speed;
        if (player.position.x < 0 + sprWidth/2) {
            player.position.x = 0 + sprWidth/2;
        }
    }
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        player.position.y -= speed;
        if (player.position.y < 0 + sprHight/2){
            player.position.y = 0 + sprHight/2;
        }
    
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        player.position.y += speed;
        if (player.position.y + sprHight/2 > canvasHight) {
            player.position.y = canvasHight - sprHight/2;
        }
    }
}

function draw() {
        background(backgroundImg);
//    background("beige");
    if (!gameOver){
        playerControls();
        collisions();
        enemyMovements();
        drawSprites();

        if (score >= 3){
            winner = true;
            gameOverFunc();
        }
        
        }else{
            textSize(canvasWidth / 5);
            textAlign(CENTER, CENTER)
            fill(0, 102, 153);
            if(winner)
                text('you win!', canvasWidth/2, canvasHight/2);
            else
                text('game over', canvasWidth/2, canvasHight/2);  
        
        }  
            
        

}
setInterval(draw, 10);