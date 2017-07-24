/// <reference path="enemies/boss.ts" />
/// <reference path="enemies/enemy.ts" />
/// <reference path="gamestates/menu.ts" />
/// <reference path="gamestates/level.ts" />
/// <reference path="phaser/pixi.d.ts" />
/// <reference path="phaser/p2.d.ts" />
/// <reference path="player/player.ts" />
/// <reference path="player/playerbullet.ts" />
/// <reference path="player/playerstate.ts" />
var KnightmareGame = (function () {
    function KnightmareGame() {
        this.game = new Phaser.Game(512, 512, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload,
            update: this.update
        });
    }
    KnightmareGame.prototype.preload = function () {
        this.game.load.spritesheet('menu', 'assets/backgrounds/menu.png', 512, 384);
        this.game.load.spritesheet('splash01', 'assets/backgrounds/splash01.png', 512, 384);
        this.game.load.script('menu', 'gamestates/menu.js');
        this.game.load.script('splash01', 'gamestates/splash.js');
        this.game.load.script('level1', 'gamestates/level.js');
        this.game.load.script('player', 'player.js');
        this.game.load.script('boss', 'boss.js');
        this.game.load.script('enemy', 'enemy.js');
        this.game.load.script('playerBullet', 'playerBullet.js');
        this.game.load.script('playerState', 'playerState.js');
        this.game.load.image('level', 'assets/backgrounds/level01.jpg');
        this.game.load.spritesheet('player', 'assets/sprites/player.png', 32, 32);
        this.game.load.spritesheet('boss', 'assets/sprites/boss.png', 96, 96);
        this.game.load.spritesheet('enemy1', 'assets/sprites/enemy1.png', 32, 32);
        this.game.load.spritesheet('enemy2', 'assets/sprites/enemy2.png', 32, 32);
        this.game.load.spritesheet('enemy3', 'assets/sprites/enemy3.png', 32, 32);
        this.game.load.spritesheet('enemy4', 'assets/sprites/enemy4.png', 32, 32);
        this.game.load.spritesheet('enemy5', 'assets/sprites/enemy5.png', 32, 32);
        this.game.load.spritesheet('enemy6', 'assets/sprites/enemy6.png', 32, 32);
        this.game.load.spritesheet('enemy7', 'assets/sprites/enemy7.png', 32, 32);
        this.game.load.spritesheet('enemy8', 'assets/sprites/enemy8.png', 32, 32);
        this.game.load.spritesheet('enemy9', 'assets/sprites/enemy9.png', 32, 32);
        this.game.load.spritesheet('enemy10', 'assets/sprites/enemy10.png', 32, 32);
        this.game.load.spritesheet('enemy11', 'assets/sprites/enemy11.png', 32, 32);
        this.game.load.atlasJSONHash('playerBullet', 'assets/sprites/PlayerBullet1SpriteSheet.png', 'assets/sprites/PlayerBullet1SpriteSheet.json');
        this.game.load.audio('music', ['assets/audio/Level1.mp3']);
        this.game.load.audio('playerDeath', ['assets/audio/Death.mp3']);
        this.game.load.audio('bulletSound', ['assets/audio/PlayerBullet1Shooting.wav']);
    };
    KnightmareGame.prototype.create = function () {
        this.game.state.add('menu', Menu);
        this.game.state.add('level1', Level1);
        this.game.state.add('splash01', Splash01);
        this.game.state.start('menu');
    };
    KnightmareGame.prototype.update = function () {
    };
    KnightmareGame.prototype.render = function () {
    };
    return KnightmareGame;
}());
window.onload = function () {
    var game = new KnightmareGame();
};
//# sourceMappingURL=app.js.map