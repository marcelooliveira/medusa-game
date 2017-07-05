var game = new Phaser.Game(512, 512, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var tilesprite;
var cursors;

function preload() {
    // Load starfield image
    game.load.image('starfield', 'assets/backgrounds/level01.jpg');
    game.load.atlasJSONHash('player', 'assets/sprites/player.png', 'assets/sprites/player.json');
    game.load.atlasJSONHash('boss', 'assets/sprites/boss.png', 'assets/sprites/boss.json');
}

var playerSprite;
var bossSprite;

function create() {

    /**
    * 
    *  A TileSprite is a Sprite that has a repeating texture. 
    *  The texture can be scrolled and scaled independently of the TileSprite itself.
    *  Textures will automatically wrap and are designed so that you can create game
    *  backdrops using seamless textures as a source.
    *
    **/
    // Create a tilesprite (x, y, width, height, key)
    tileSprite = game.add.tileSprite(0, 0, 512, 3776, 'starfield');

    cursors = game.input.keyboard.createCursorKeys();
    game.debug.text('Press down arrow keys to move the tileSprite', 20, 20);

    playerSprite = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
    playerSprite.anchor.setTo(0.5, 0.5);
    //playerSprite.scale.setTo(2, 2);

    playerSprite.animations.add('run');
    playerSprite.animations.play('run', 7.5, true);

    bossSprite = game.add.sprite(game.world.centerX, game.world.centerY, 'boss');
    bossSprite.anchor.setTo(0.75, 3.5);
    //playerSprite.scale.setTo(2, 2);

    bossSprite.animations.add('run');
    bossSprite.animations.play('run', 3, true);
}

function update() {

    // Move tilesprite position by pressing arrow keys
    //if (cursors.left.isDown) {
    //    tileSprite.tilePosition.x += 8;
    //}
    //else if (cursors.right.isDown) {
    //    tileSprite.tilePosition.x -= 8;
    //}

    //if (cursors.up.isDown) {
    //    tileSprite.tilePosition.y += 8;
    //}
    //else if (cursors.down.isDown) {
    //    tileSprite.tilePosition.y -= 8;
    //}

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        playerSprite.x -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        playerSprite.x += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        playerSprite.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        playerSprite.y += 4;
    }
}
