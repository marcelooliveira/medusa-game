/// <reference path="../app.ts" />
var BaseEnemy = (function () {
    function BaseEnemy(knightmareGame, game, layer, bulletSound, player, x, y, enemyNumber) {
        this.knightmareGame = knightmareGame;
        this.game = game;
        this.layer = layer;
        this.bulletSound = bulletSound;
        this.player = player;
        this.create();
        this.x = x;
        this.y = y;
        this.size = 32;
        this.enemyNumber = enemyNumber;
        this.velocity = 16;
    }
    BaseEnemy.prototype.create = function () {
        this.isWeaponLoaded = true;
    };
    BaseEnemy.prototype.update = function () {
        if (this.sprite !== undefined) {
            if (this.sprite.inCamera) {
                this.sprite.body.velocity.y = this.velocity;
            }
            this.game.physics.arcade.collide(this.sprite, this.player.sprite, function () {
                this.knightmareGame.playerWasHit(this);
                this.sprite.destroy();
            }.bind(this));
            this.game.physics.arcade.collide(this.sprite, this.layer);
        }
    };
    BaseEnemy.prototype.setup = function () {
        this.sprite = this.game.add.sprite(this.x, this.y, 'enemy' + this.enemyNumber);
        this.sprite.animations.add('run', [0, 1, 2, 3, 2, 1], 4, true);
        this.sprite.animations.play('run');
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.setSize(32, 32, 0, 0);
    };
    BaseEnemy.prototype.teardown = function () {
        if (this.sprite !== undefined) {
            this.sprite.animations.destroy();
            this.sprite.destroy();
        }
    };
    BaseEnemy.prototype.wasHit = function () {
        //this.sprite.animations.play('hit', 10, false);
    };
    return BaseEnemy;
}());
//# sourceMappingURL=baseEnemy.js.map