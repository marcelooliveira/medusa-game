class Enemy {
    medusaGame: MedusaGame;
    game: Phaser.Game;
    layer: Phaser.TilemapLayer;
    bulletSound: Phaser.Sound;
    sprite: Phaser.Sprite;
    player: Player;
    isWeaponLoaded: boolean;
    velocity: number;
    x: number;
    y: number;
    enemyNumber: number;

    constructor(
        medusaGame: MedusaGame, game: Phaser.Game, layer: Phaser.TilemapLayer, bulletSound: Phaser.Sound,
        player: Player, x: number, y: number, enemyNumber: number) {
        this.medusaGame = medusaGame;
        this.game = game;
        this.layer = layer;
        this.bulletSound = bulletSound;
        this.player = player;
        this.create();
        this.x = x;
        this.y = y;
        this.enemyNumber = enemyNumber;
    }

    create() {
        this.isWeaponLoaded = true;
    }

    update() {

        //this.game.physics.arcade.collide(this.sprite, this.layer, function () {
        //    this.velocity *= -1;
        //    this.sprite.body.velocity.x = this.velocity;
        //}.bind(this));

        this.game.physics.arcade.collide(this.sprite, this.player.sprite, function () {
            //alert('game over');
            this.medusaGame.playerWasHit(this);
            this.sprite.destroy();
        }.bind(this));

        //if (this.isWeaponLoaded && this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
        //    this.isWeaponLoaded = false;
        //    this.bulletSound.play();
        //}
        //else if (!this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
        //    this.isWeaponLoaded = true;
        //}

        //if (this.sprite.animations.currentAnim.name == 'run'
        //    && this.sprite.animations.currentFrame.index == 0) {
        //    this.sprite.animations.play('run');
        //}
    }

    setup() {
        this.sprite = this.game.add.sprite(this.x, this.y, 'enemy' + this.enemyNumber);
        this.sprite.animations.add('run', [0, 1, 2, 3, 2, 1], 4, true);
        this.sprite.animations.play('run');
        //this.velocity = 150;
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.setSize(32, 32, 0, 0);
        //this.sprite.body.velocity.x = this.velocity;
    }

    wasHit() {
        //this.sprite.animations.play('hit', 10, false);
    }
}