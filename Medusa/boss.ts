class Boss {
    game: Phaser.Game;
    layer: Phaser.TilemapLayer;
    bulletSound: Phaser.Sound;
    sprite: Phaser.Sprite;
    isWeaponLoaded: boolean;
    velocity: number;

    constructor(
        game: Phaser.Game, layer: Phaser.TilemapLayer, bulletSound: Phaser.Sound) {
        this.game = game;
        this.layer = layer;
        this.bulletSound = bulletSound;
        this.create();
    }

    create() {
        this.isWeaponLoaded = true;
    }

    update() {

        this.game.physics.arcade.collide(this.sprite, this.layer, function () {
            //this.sprite.body.position.x -= 32;
            this.velocity *= -1;
            this.sprite.body.velocity.x = this.velocity;
        }.bind(this));

        //if (this.cursors.up.isDown) {
        //    this.sprite.body.velocity.y = -this.velocity;
        //}
        //else if (this.cursors.down.isDown) {
        //    this.sprite.body.velocity.y = this.velocity;
        //}

        //if (this.cursors.left.isDown) {
        //    this.sprite.body.velocity.x = -this.velocity;
        //}
        //else if (this.cursors.right.isDown) {
        //    this.sprite.body.velocity.x = this.velocity;
        //}

        if (this.isWeaponLoaded && this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.isWeaponLoaded = false;
            this.bulletSound.play();
        }
        else if (!this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.isWeaponLoaded = true;
        }
    }

    setup() {
        //this.sprite = this.game.add.sprite(this.game.world.centerX - 16, this.game.world.height - 64, 'player');
        this.sprite = this.game.add.sprite(this.game.world.centerX - 48, 64, 'boss');
        this.sprite.animations.add('run');
        this.sprite.animations.play('run', 2, true);
        this.velocity = 150;
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.setSize(96, 96, 0, 0);
        this.sprite.body.velocity.set(0);
        this.sprite.body.velocity.x = this.velocity;
        //this.game.camera.follow(this.sprite, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    }
}