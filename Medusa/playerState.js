var PlayerStateRunning = (function () {
    function PlayerStateRunning(player) {
        this.player = player;
    }
    PlayerStateRunning.prototype.update = function (cursors, keyboard, camera) {
        if (cursors.up.isDown) {
            this.player.runUp();
            //this.player.sprite.body.velocity.y = -this.player.velocity;
        }
        else if (cursors.down.isDown) {
            if (this.player.sprite.body.y <
                camera.y + camera.height
                    - this.player.sprite.height) {
                this.player.runDown();
                //this.player.sprite.body.velocity.y = this.player.velocity;
            }
        }
        if (cursors.left.isDown) {
            this.player.runLeft();
            //this.player.sprite.body.velocity.x = -this.player.velocity;
        }
        else if (cursors.right.isDown) {
            this.player.runRight();
            //this.player.sprite.body.velocity.x = this.player.velocity;
        }
        if (this.player.isWeaponLoaded && keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.player.isWeaponLoaded = false;
            this.player.shoot();
        }
        else if (!keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.player.isWeaponLoaded = true;
        }
    };
    return PlayerStateRunning;
}());
var PlayerStateDying = (function () {
    function PlayerStateDying(player) {
        this.player = player;
    }
    PlayerStateDying.prototype.update = function (cursors, keyboard, camera) {
    };
    return PlayerStateDying;
}());
//# sourceMappingURL=playerState.js.map