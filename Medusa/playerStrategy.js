var PlayerRunStrategy = (function () {
    function PlayerRunStrategy(player) {
        this.player = player;
    }
    PlayerRunStrategy.prototype.update = function (cursors, camera) {
        if (cursors.up.isDown) {
            this.player.sprite.body.velocity.y = -this.player.velocity;
        }
        else if (cursors.down.isDown) {
            if (this.player.sprite.body.y <
                camera.y + camera.height
                    - this.player.sprite.height) {
                this.player.sprite.body.velocity.y = this.player.velocity;
            }
        }
        if (cursors.left.isDown) {
            this.player.sprite.body.velocity.x = -this.player.velocity;
        }
        else if (cursors.right.isDown) {
            this.player.sprite.body.velocity.x = this.player.velocity;
        }
    };
    return PlayerRunStrategy;
}());
var PlayerDieStrategy = (function () {
    function PlayerDieStrategy(player) {
        this.player = player;
    }
    PlayerDieStrategy.prototype.update = function (cursors, camera) {
    };
    return PlayerDieStrategy;
}());
//# sourceMappingURL=playerstrategy.js.map