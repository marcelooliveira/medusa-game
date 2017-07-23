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
        if (this.sprite.animations.currentAnim.name != 'die') {
            if (this.cursors.up.isDown) {
                this.sprite.body.velocity.y = -this.playerVelocity;
            }
            else if (this.cursors.down.isDown) {
                if (this.sprite.body.y <
                    this.medusaGame.game.camera.y + this.game.camera.height
                        - this.sprite.height) {
                    this.sprite.body.velocity.y = this.playerVelocity;
                }
            }
            if (this.cursors.left.isDown) {
                this.sprite.body.velocity.x = -this.playerVelocity;
            }
            else if (this.cursors.right.isDown) {
                this.sprite.body.velocity.x = this.playerVelocity;
            }
        }
        if (this.isWeaponLoaded && this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.isWeaponLoaded = false;
            //this.bulletSound.play();
            this.medusaGame.firePlayerBullet();
        }
        else if (!this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.isWeaponLoaded = true;
        }
        if (this.sprite.animations.currentAnim.name == 'hit'
            && this.sprite.animations.currentFrame.index == 0) {
            this.sprite.animations.play('run');
        }
        //if (this.sprite.animations.currentAnim.name == 'die'
        //    && this.sprite.animations.currentFrame.index == 19) {
        //    //this.sprite.animations.play('run');
        //    var deathSound = this.game.add.audio('death');
        //    deathSound.play();
        //}
        //this.sprite.body.y -= this.medusaGame.getScrollStep() * 2;
    };
    Player.prototype.setup = function () {
        this.sprite = this.game.add.sprite(this.game.world.centerX - 16, this.game.world.height - 64, 'player');
        //this.sprite = this.game.add.sprite(this.game.world.centerX - 16, 256, 'player');
        this.sprite.animations.add('run', [0, 1], 2, true);
        this.sprite.animations.add('die', [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 10, true);
        this.sprite.animations.play('run');
        this.playerVelocity = 150;
        this.walkingVelocity = 60;
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.setSize(32, 32, 0, 0);
        //this.game.camera.follow(this.sprite, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    };
    Player.prototype.wasHit = function () {
        this.sprite.animations.play('die');
    };
    Player.prototype.resurrect = function () {
        this.sprite.animations.play('run');
    };
    Player.prototype.walk = function () {
        if (!this.cursors.down.isDown
            && !this.cursors.up.isDown
            && !this.cursors.left.isDown
            && !this.cursors.right.isDown) {
            this.sprite.body.velocity.y = -this.walkingVelocity;
        }
    };
    return Player;
}());
//# sourceMappingURL=Player.js.map