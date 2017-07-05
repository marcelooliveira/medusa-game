var game = new Phaser.Game(512, 512, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var tilesprite;
var cursors;

function preload() {
    // Load starfield image
    game.load.image('starfield', 'assets/backgrounds/level01.jpg');
    game.load.atlasJSONHash('bot', 'assets/sprites/player.png', 'assets/sprites/player.json');
}

var s;

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

    s = game.add.sprite(game.world.centerX, game.world.centerY, 'bot');
    s.anchor.setTo(0.5, 0.5);
    //s.scale.setTo(2, 2);

    s.animations.add('run');
    s.animations.play('run', 10, true);
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
        s.x -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        s.x += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        s.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        s.y += 4;
    }
}
