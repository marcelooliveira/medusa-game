var PlayerBullet = (function () {
    function PlayerBullet(medusaGame, layer, bulletSound, player, boss) {
        this.medusaGame = medusaGame;
        this.game = medusaGame.game;
        this.layer = layer;
        this.bulletSound = bulletSound;
        this.player = player;
        this.boss = boss;
        this.create();
    }
    PlayerBullet.prototype.create = function () {
    };
    PlayerBullet.prototype.update = function () {
        this.game.physics.arcade.collide(this.sprite, this.layer, function () {
            this.sprite.position.x = 0;
            this.sprite.position.y = 0;
        }.bind(this));
        if (this.sprite.position.x == 0 && this.sprite.position.y == 0) {
            this.sprite.destroy();
        }
        this.game.physics.arcade.collide(this.sprite, this.boss.sprite, function () {
            this.medusaGame.playerBulletHit(this, this.boss);
            this.sprite.destroy();
        }.bind(this));
    };
    PlayerBullet.prototype.setup = function () {
        this.sprite = this.game.add.sprite(this.player.sprite.position.x, this.player.sprite.position.y - 32, 'playerBullet');
        this.velocity = 500;
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.setSize(96, 96, 0, 0);
        this.sprite.body.velocity.y = -this.velocity;
    };
    return PlayerBullet;
}());
//# sourceMappingURL=playerBullet.js.map