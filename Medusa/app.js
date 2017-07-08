/// <reference path="pixi.d.ts" />
/// <reference path="p2.d.ts" />
var MedusaGame = (function () {
    function MedusaGame() {
        this.game = new Phaser.Game(512, 512, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload,
            update: this.update
            //, render: this.render
        });
    }
    MedusaGame.prototype.preload = function () {
        this.game.load.image('level', 'assets/backgrounds/level01.jpg');
        this.game.load.atlasJSONHash('player', 'assets/sprites/player.png', 'assets/sprites/player.json');
        this.game.load.atlasJSONHash('boss', 'assets/sprites/boss.png', 'assets/sprites/boss.json');
    };
    MedusaGame.prototype.create = function () {
        this.tileSprite = this.game.add.tileSprite(0, 0, 512, 3776, 'level');
        this.game.world.setBounds(0, 0, 512, 3776);
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
        this.game.physics.p2.enable(this.player);
        this.player.body.fixedRotation = true;
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.debug.text('Press down arrow keys to move the tileSprite', 20, 20);
        this.player.anchor.setTo(0.5, 0.5);
        //player.scale.setTo(2, 2);
        this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
        this.player.animations.add('run');
        this.player.animations.play('run', 7.5, true);
        this.bossSprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'boss');
        this.bossSprite.anchor.setTo(0.75, 3.5);
        //player.scale.setTo(2, 2);
        this.bossSprite.animations.add('run');
        this.bossSprite.animations.play('run', 3, true);
    };
    MedusaGame.prototype.update = function () {
        // Update input state
        this.player.body.setZeroVelocity();
        this.game.input.update();
        if (this.cursors.up.isDown) {
            this.player.body.moveUp(180);
        }
        else if (this.cursors.down.isDown) {
            this.player.body.moveDown(180);
        }
        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -180;
        }
        else if (this.cursors.right.isDown) {
            this.player.body.moveRight(180);
        }
    };
    MedusaGame.prototype.render = function () {
        this.game.debug.cameraInfo(this.game.camera, 32, 32);
    };
    return MedusaGame;
}());
window.onload = function () {
    var game = new MedusaGame();
};
//# sourceMappingURL=app.js.map