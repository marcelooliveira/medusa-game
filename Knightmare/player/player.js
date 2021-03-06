/// <reference path="../app.ts" />
/// <reference path="playerState.ts" />
var Player = (function () {
    function Player(level, cursors, layer, bulletSound) {
        this.level = level;
        this.game = level.game;
        this.cursors = cursors;
        this.layer = layer;
        this.bulletSound = bulletSound;
        this.create();
    }
    Player.prototype.create = function () {
        this.isWeaponLoaded = true;
        this.state = new PlayerStateRunning(this);
    };
    Player.prototype.update = function () {
        this.game.physics.arcade.collide(this.sprite, this.layer);
        this.sprite.body.velocity.set(0);
        this.state.update(this.cursors, this.game.input.keyboard, this.game.camera);
    };
    Player.prototype.setup = function () {
        this.sprite = this.game.add.sprite(this.game.world.centerX - 16, this.game.world.height - 64, 'player');
        this.sprite.animations.add('run', [0, 1], 2, true);
        this.sprite.animations.add('die', [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 10, true);
        this.sprite.animations.play('run');
        this.velocity = 150;
        this.walkingVelocity = 60;
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.setSize(32, 32, 0, 0);
    };
    Player.prototype.setStrategy = function (strategy) {
        this.state = new PlayerStateRunning(this);
    };
    Player.prototype.wasHit = function () {
        this.sprite.animations.play('die');
        this.state = new PlayerStateDying(this);
    };
    Player.prototype.resurrect = function () {
        this.sprite.animations.play('walk');
        this.state = new PlayerStateRunning(this);
    };
    Player.prototype.walk = function () {
        if (!this.cursors.down.isDown
            && !this.cursors.up.isDown
            && !this.cursors.left.isDown
            && !this.cursors.right.isDown) {
            this.sprite.body.velocity.y = -this.walkingVelocity;
        }
    };
    Player.prototype.runUp = function () {
        this.sprite.body.velocity.y = -this.velocity;
    };
    Player.prototype.runDown = function () {
        this.sprite.body.velocity.y = this.velocity;
    };
    Player.prototype.runLeft = function () {
        this.sprite.body.velocity.x = -this.velocity;
    };
    Player.prototype.runRight = function () {
        this.sprite.body.velocity.x = this.velocity;
    };
    Player.prototype.shoot = function () {
        this.bulletSound.play();
        this.level.firePlayerBullet();
    };
    Player.prototype.inScene = function (camera) {
        return this.sprite.body.y <
            camera.y + camera.height
                - this.sprite.height;
    };
    return Player;
}());
//# sourceMappingURL=player.js.map