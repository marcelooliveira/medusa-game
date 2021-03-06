var PlayerStateRunning = (function () {
    function PlayerStateRunning(player) {
        this.player = player;
    }
    PlayerStateRunning.prototype.update = function (cursors, keyboard, camera) {
        if (cursors.up.isDown) {
            this.player.runUp();
        }
        else if (cursors.down.isDown) {
            if (this.player.inScene(camera)) {
                this.player.runDown();
            }
        }
        if (cursors.left.isDown) {
            this.player.runLeft();
        }
        else if (cursors.right.isDown) {
            this.player.runRight();
        }
        if (this.player.isWeaponLoaded && keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.player.isWeaponLoaded = false;
            this.player.shoot();
        }
        else if (!keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.player.isWeaponLoaded = true;
        }
    };
    PlayerStateRunning.prototype.walk = function (camera) {
        //if (this.player.inScene(camera)) {
        this.player.walk();
        //}
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