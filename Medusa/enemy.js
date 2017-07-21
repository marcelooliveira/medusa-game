var Enemy = (function () {
    function Enemy(game, layer, bulletSound, player, x, y, enemyNumber) {
        this.game = game;
        this.layer = layer;
        this.bulletSound = bulletSound;
        this.player = player;
        this.create();
        this.x = x;
        this.y = y;
        this.enemyNumber = enemyNumber;
    }
    Enemy.prototype.create = function () {
        this.isWeaponLoaded = true;
    };
    Enemy.prototype.update = function () {
        //this.game.physics.arcade.collide(this.sprite, this.layer, function () {
        //    this.velocity *= -1;
        //    this.sprite.body.velocity.x = this.velocity;
        //}.bind(this));
        //this.game.physics.arcade.collide(this.sprite, this.player.sprite, function () {
        //    //alert('game over');
        //}.bind(this));
        //if (this.isWeaponLoaded && this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
        //    this.isWeaponLoaded = false;
        //    this.bulletSound.play();
        //}
        //else if (!this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
        //    this.isWeaponLoaded = true;
        //}
        //if (this.sprite.animations.currentAnim.name == 'run'
        //    && this.sprite.animations.currentFrame.index == 0) {
        //    this.sprite.animations.play('run');
        //}
    };
    Enemy.prototype.setup = function () {
        this.sprite = this.game.add.sprite(this.x, this.y, 'enemy' + this.enemyNumber);
        this.sprite.animations.add('run', [0, 1, 2, 3, 2, 1], 4, true);
        this.sprite.animations.play('run');
        //this.velocity = 150;
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.setSize(96, 96, 0, 0);
        //this.sprite.body.velocity.x = this.velocity;
    };
    Enemy.prototype.wasHit = function () {
        //this.sprite.animations.play('hit', 10, false);
    };
    return Enemy;
}());
//# sourceMappingURL=enemy.js.map