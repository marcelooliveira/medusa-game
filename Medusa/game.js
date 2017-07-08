//var game = new Phaser.Game(512, 512, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

//var tilesprite;
//var cursors;
//var player;
//var bossSprite;

//function preload() {
//    // Load starfield image
//    game.load.image('level', 'assets/backgrounds/level01.jpg');
//    game.load.atlasJSONHash('player', 'assets/sprites/player.png', 'assets/sprites/player.json');
//    game.load.atlasJSONHash('boss', 'assets/sprites/boss.png', 'assets/sprites/boss.json');
//}


//function create() {

//    /**
//    * 
//    *  A TileSprite is a Sprite that has a repeating texture. 
//    *  The texture can be scrolled and scaled independently of the TileSprite itself.
//    *  Textures will automatically wrap and are designed so that you can create game
//    *  backdrops using seamless textures as a source.
//    *
//    **/
//    // Create a tilesprite (x, y, width, height, key)
//    tileSprite = game.add.tileSprite(0, 0, 512, 3776, 'level');

//    game.world.setBounds(0, 0, 512, 3776);

//    game.physics.startSystem(Phaser.Physics.P2JS);
//    player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');

//    game.physics.p2.enable(player);

//    player.body.fixedRotation = true;

//    cursors = game.input.keyboard.createCursorKeys();
//    game.debug.text('Press down arrow keys to move the tileSprite', 20, 20);

//    player.anchor.setTo(0.5, 0.5);
//    //player.scale.setTo(2, 2);
//    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

//    player.animations.add('run');
//    player.animations.play('run', 7.5, true);

//    bossSprite = game.add.sprite(game.world.centerX, game.world.centerY, 'boss');
//    bossSprite.anchor.setTo(0.75, 3.5);
//    //player.scale.setTo(2, 2);

//    bossSprite.animations.add('run');
//    bossSprite.animations.play('run', 3, true);

//}

//function update() {

//    // Move tilesprite position by pressing arrow keys
//    //if (cursors.left.isDown) {
//    //    tileSprite.tilePosition.x += 8;
//    //}
//    //else if (cursors.right.isDown) {
//    //    tileSprite.tilePosition.x -= 8;
//    //}

//    //if (cursors.up.isDown) {
//    //    tileSprite.tilePosition.y += 8;
//    //}
//    //else if (cursors.down.isDown) {
//    //    tileSprite.tilePosition.y -= 8;
//    //}

//    player.body.setZeroVelocity();

//    if (cursors.up.isDown) {
//        player.body.moveUp(180)
//    }
//    else if (cursors.down.isDown) {
//        player.body.moveDown(180);
//    }

//    if (cursors.left.isDown) {
//        player.body.velocity.x = -180;
//    }
//    else if (cursors.right.isDown) {
//        player.body.moveRight(180);
//    }
//}

//function render() {
//    game.debug.cameraInfo(game.camera, 32, 32);
//}