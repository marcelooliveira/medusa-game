﻿class Player {
    medusaGame: MedusaGame;
    game: Phaser.Game;
    cursors: Phaser.CursorKeys;
    layer: Phaser.TilemapLayer;
    bulletSound: Phaser.Sound;
    sprite: Phaser.Sprite;
    isWeaponLoaded: boolean;
    playerVelocity: number;

    constructor(
        medusaGame: MedusaGame, cursors: Phaser.CursorKeys,
        layer: Phaser.TilemapLayer, bulletSound: Phaser.Sound) {
        this.medusaGame = medusaGame;
        this.game = medusaGame.game;
        this.cursors = cursors;
        this.layer = layer;
        this.bulletSound = bulletSound;
        this.create();
    }

    create() {
        this.isWeaponLoaded = true;
    }

    update() {

        this.game.physics.arcade.collide(this.sprite, this.layer);

        this.sprite.body.velocity.set(0);
        if (this.cursors.up.isDown) {
            this.sprite.body.velocity.y = -this.playerVelocity;
        }
        else if (this.cursors.down.isDown) {
            this.sprite.body.velocity.y = this.playerVelocity;
        }

        if (this.cursors.left.isDown) {
            this.sprite.body.velocity.x = -this.playerVelocity;
        }
        else if (this.cursors.right.isDown) {
            this.sprite.body.velocity.x = this.playerVelocity;
        }

        if (this.isWeaponLoaded && this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.isWeaponLoaded = false;
            //this.bulletSound.play();
            this.medusaGame.firePlayerBullet();
        }
        else if (!this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.isWeaponLoaded = true;
        }
    }

    setup() {
        this.sprite = this.game.add.sprite(this.game.world.centerX - 16, this.game.world.height - 64, 'player');
        //this.sprite = this.game.add.sprite(this.game.world.centerX - 16, 256, 'player');

        this.sprite.animations.add('run');
        this.sprite.animations.play('run', 3, true);
        this.playerVelocity = 150;
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.setSize(32, 32, 0, 0);
        this.game.camera.follow(this.sprite, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    }    
}