class Player {
    game: Phaser.Game;
    cursors: Phaser.CursorKeys;
    layer: Phaser.TilemapLayer;
    bulletSound: Phaser.Sound;
    playerSprite: Phaser.Sprite;
    isWeaponLoaded: boolean;
    playerVelocity: number;

    constructor(game: Phaser.Game, cursors: Phaser.CursorKeys
        , layer: Phaser.TilemapLayer, bulletSound: Phaser.Sound) {
        this.game = game;
        this.cursors = cursors;
        this.layer = layer;
        this.bulletSound = bulletSound;
        this.create();
    }

    create() {
        this.isWeaponLoaded = true;
    }

    update() {

        this.game.physics.arcade.collide(this.playerSprite, this.layer);

        this.playerSprite.body.velocity.set(0);
        if (this.cursors.up.isDown) {
            this.playerSprite.body.velocity.y = -this.playerVelocity;
        }
        else if (this.cursors.down.isDown) {
            this.playerSprite.body.velocity.y = this.playerVelocity;
        }

        if (this.cursors.left.isDown) {
            this.playerSprite.body.velocity.x = -this.playerVelocity;
        }
        else if (this.cursors.right.isDown) {
            this.playerSprite.body.velocity.x = this.playerVelocity;
        }

        if (this.isWeaponLoaded && this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.isWeaponLoaded = false;
            this.bulletSound.play();
        }
        else if (!this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.isWeaponLoaded = true;
        }
    }

    setup() {
        this.playerSprite = this.game.add.sprite(this.game.world.centerX - 16, this.game.world.height - 64, 'player');
        this.playerSprite.animations.add('run');
        this.playerSprite.animations.play('run', 3, true);
        this.playerVelocity = 150;
        this.game.physics.arcade.enable(this.playerSprite);
        this.playerSprite.body.collideWorldBounds = true;
        this.playerSprite.body.setSize(32, 32, 0, 0);
        this.game.camera.follow(this.playerSprite, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    }    
}