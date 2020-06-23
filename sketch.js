var canvas, backgroundImg;
var gameState = 0;
var playerCount, voterCount, database, form, player, game, voterCount;

function setup(){
    database = firebase.database();
    createCanvas(400,400);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    drawSprites();
}