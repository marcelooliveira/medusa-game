var Player = (function () {
    function Player(medusaGame, cursors, layer, bulletSound) {
        this.medusaGame = medusaGame;
        this.game = medusaGame.game;
        this.cursors = cursors;
        this.layer = layer;
        this.bulletSound = bulletSound;
        this.create();
    }
    Player.prototype.create = function () {
        this.isWeaponLoaded = true;
    };
    Player.prototype.update = function () {
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
    };
    Player.prototype.setup = function () {
        this.sprite = this.game.add.sprite(this.game.world.centerX - 16, this.game.world.height - 64, 'player');
        //this.sprite = this.game.add.sprite(this.game.world.centerX - 16, 256, 'player');
        this.sprite.animations.add('run', [0, 1], 2, true);
        this.sprite.animations.add('hit', [2, 3, 2, 3, 2, 3, 2, 3, 0], 10, true);
        this.sprite.animations.play('run');
        this.playerVelocity = 150;
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.setSize(32, 32, 0, 0);
        this.game.camera.follow(this.sprite, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    };
    Player.prototype.wasHit = function () {
        this.sprite.animations.play('hit', 10, false);
    };
    return Player;
}());
//# sourceMappingURL=player.js.map