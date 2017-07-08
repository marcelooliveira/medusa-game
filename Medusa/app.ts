class SimpleGame {

    constructor() {
        this.game = new Phaser.Game(512, 512, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    game: Phaser.Game;
    tileSprite: Phaser.TileSprite;
    cursors: Phaser.CursorKeys;
    player: Phaser.Sprite;
    bossSprite: Phaser.Sprite;

    preload() {
        // Load starfield image
        this.game.load.image('level', 'assets/backgrounds/level01.jpg');
        this.game.load.atlasJSONHash('player', 'assets/sprites/player.png', 'assets/sprites/player.json');
        this.game.load.atlasJSONHash('boss', 'assets/sprites/boss.png', 'assets/sprites/boss.json');
    }

    create() {
        //var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        //logo.anchor.setTo(0.5, 0.5);

        /**
        * 
        *  A TileSprite is a Sprite that has a repeating texture. 
        *  The texture can be scrolled and scaled independently of the TileSprite itself.
        *  Textures will automatically wrap and are designed so that you can create game
        *  backdrops using seamless textures as a source.
        *
        **/
        // Create a tilesprite (x, y, width, height, key)
        this.tileSprite = this.game.add.tileSprite(0, 0, 512, 3776, 'level');

        this.game.world.setBounds(0, 0, 512, 3776);

        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');

        this.game.physics.p2.enable(this.player);

        this.player.body.fixedRotation = true;

        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.debug.text('Press down arrow keys to move the tileSprite', 20, 20);

        this.player.anchor.setTo(0.5, 0.5);
        //player.scale.setTo(2, 2);
        this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

        this.player.animations.add('run');
        this.player.animations.play('run', 7.5, true);

        this.bossSprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'boss');
        this.bossSprite.anchor.setTo(0.75, 3.5);
        //player.scale.setTo(2, 2);

        this.bossSprite.animations.add('run');
        this.bossSprite.animations.play('run', 3, true);

    }

    update() {

        this.player.body.setZeroVelocity();
        // Update input state
        this.game.input.update();

        if (this.cursors.up.isDown) {
            this.player.body.moveUp(180)
        }
        else if (this.cursors.down.isDown) {
            this.player.body.moveDown(180);
        }

        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -180;
        }
        else if (this.cursors.right.isDown) {
            this.player.body.moveRight(180);
        }
    }

    render() {
        this.game.debug.cameraInfo(this.game.camera, 32, 32);
    }
}

window.onload = () => {

    var game = new SimpleGame();

};