class Boss {
    game: Phaser.Game;
    layer: Phaser.TilemapLayer;
    bulletSound: Phaser.Sound;
    sprite: Phaser.Sprite;
    player: Player;
    isWeaponLoaded: boolean;
    velocity: number;

    constructor(
        game: Phaser.Game, layer: Phaser.TilemapLayer, bulletSound: Phaser.Sound,
        player: Player) {
        this.game = game;
        this.layer = layer;
        this.bulletSound = bulletSound;
        this.player = player;
        this.create();
    }

    create() {
        this.isWeaponLoaded = true;
    }

    update() {

        this.game.physics.arcade.collide(this.sprite, this.layer, function () {
            this.velocity *= -1;
            this.sprite.body.velocity.x = this.velocity;
        }.bind(this));

        this.game.physics.arcade.collide(this.sprite, this.player.sprite, function () {
            //alert('game over');
        }.bind(this));

        if (this.isWeaponLoaded && this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.isWeaponLoaded = false;
            this.bulletSound.play();
        }
        else if (!this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.isWeaponLoaded = true;
        }
    }

    setup() {
        this.sprite = this.game.add.sprite(this.game.world.centerX - 48, 64, 'boss');
        this.sprite.animations.add('run');
        this.sprite.animations.play('run', 2, true);
        this.velocity = 150;
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.setSize(96, 96, 0, 0);
        this.sprite.body.velocity.x = this.velocity;
    }
}