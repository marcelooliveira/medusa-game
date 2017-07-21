/// <reference path="pixi.d.ts" />
/// <reference path="p2.d.ts" />
/// <reference path="player.ts" />
var MedusaGame = (function () {
    function MedusaGame() {
        this.game = new Phaser.Game(512, 512, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload,
            update: this.update, readFile: this.readFile,
            setupMap: this.setupMap, setupPlayer: this.setupPlayer,
            setupBoss: this.setupBoss, setupEnemies: this.setupEnemies,
            playerBullets: this.playerBullets,
            setupAudio: this.setupAudio, setupKeyboard: this.setupKeyboard,
            setupPlayerBullets: this.setupPlayerBullets,
            firePlayerBullet: this.firePlayerBullet,
            playerBulletHit: this.playerBulletHit
        });
    }
    MedusaGame.prototype.preload = function () {
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
        this.game.load.audio('bulletSound', ['assets/audio/PlayerBullet1Shooting.wav']);
    };
    MedusaGame.prototype.create = function () {
        this.setupAudio();
        this.setupMap();
        this.setupKeyboard();
        this.setupPlayer();
        this.setupBoss();
        this.setupEnemies();
        this.setupPlayerBullets();
    };
    MedusaGame.prototype.update = function () {
        this.game.input.update();
        this.player.update();
        this.boss.update();
        this.enemies.forEach(function (enemy) {
            enemy.update();
        });
        this.playerBullets.forEach(function (bullet) {
            bullet.update();
        });
    };
    MedusaGame.prototype.render = function () {
        this.game.debug.cameraInfo(this.game.camera, 32, 32);
    };
    MedusaGame.prototype.readFile = function (file) {
        var request = new XMLHttpRequest();
        request.open("GET", file, false);
        request.send(null);
        var returnValue = request.responseText;
        return returnValue;
    };
    MedusaGame.prototype.setupMap = function () {
        this.tileSprite = this.game.add.tileSprite(0, 0, 512, 3776, 'level');
        this.game.world.setBounds(0, 0, 512, 3776);
        //  Creates a blank tilemap
        this.map = this.game.add.tilemap();
        //  This is our tileset - it's just a BitmapData filled with a selection of randomly colored tiles
        //  but you could generate anything here
        this.bmd = this.game.make.bitmapData(32 * 25, 32 * 2);
        var colors = Phaser.Color.HSVColorWheel();
        var i = 0;
        for (var y = 0; y < 2; y++) {
            for (var x = 0; x < 25; x++) {
                //this.bmd.rect(x * 32, y * 32, 32, 32, colors[i].rgba);
                i += 6;
            }
        }
        //  Add a Tileset image to the map
        this.map.addTilesetImage('tiles', this.bmd);
        //  Creates a new blank layer and sets the map dimensions.
        //  In this case the map is 40x30 tiles in size and the tiles are 32x32 pixels in size.
        this.layer = this.map.create('level1', 16, 118, 32, 32);
        //  Populate some tiles for our player to start on
        var lines = this.readFile("/assets/maps/Map01.txt").split('\n');
        for (var y = 0; y < lines.length; y++) {
            var line = lines[y];
            for (var x = 0; x < line.length; x++) {
                var char = line[x];
                if (char == 'X') {
                    this.map.putTile(1, x, y, this.layer);
                }
            }
        }
        this.map.setCollisionByExclusion([0]);
    };
    MedusaGame.prototype.setupAudio = function () {
        this.volume = .2;
        this.music = this.game.add.audio('music');
        this.music.volume = this.volume;
        this.music.play();
        this.bulletSound = this.game.add.audio('bulletSound');
        this.bulletSound.volume = this.volume;
        this.bulletSound.allowMultiple = true;
    };
    MedusaGame.prototype.setupPlayer = function () {
        this.player = new Player(this, this.cursors, this.layer, this.bulletSound);
        this.player.setup();
    };
    MedusaGame.prototype.setupBoss = function () {
        this.boss = new Boss(this.game, this.layer, this.bulletSound, this.player);
        this.boss.setup();
    };
    MedusaGame.prototype.setupEnemies = function () {
        this.enemies = [];
        var enemycodes = 'abcdefghijklmnop';
        var lines = this.readFile("/assets/maps/Map01.txt").split('\n');
        for (var y = 0; y < lines.length; y++) {
            var line = lines[y];
            for (var x = 0; x < line.length; x++) {
                var char = line[x];
                var indexOf = enemycodes.indexOf(char);
                if (indexOf >= 0) {
                    var enemy = new Enemy(this.game, this.layer, this.bulletSound, this.player, x * 32, y * 32, indexOf + 1);
                    enemy.setup();
                    this.enemies.push(enemy);
                }
            }
        }
    };
    MedusaGame.prototype.setupPlayerBullets = function () {
        this.playerBullets = [];
    };
    MedusaGame.prototype.setupKeyboard = function () {
        this.cursors = this.game.input.keyboard.createCursorKeys();
    };
    MedusaGame.prototype.firePlayerBullet = function () {
        var playerBullet = new PlayerBullet(this, this.layer, this.bulletSound, this.player, this.boss);
        playerBullet.setup();
        this.playerBullets.push(playerBullet);
    };
    MedusaGame.prototype.playerBulletHit = function (playerBullet, target) {
        var _this = this;
        this.playerBullets.forEach(function (b, i) {
            if (b == playerBullet) {
                _this.playerBullets.splice(i, 1);
                return true;
            }
        });
        this.enemies.forEach(function (e, i) {
            if (e == target) {
                _this.enemies.splice(i, 1);
                return true;
            }
        });
        if (target.wasHit) {
            target.wasHit();
        }
    };
    return MedusaGame;
}());
window.onload = function () {
    var game = new MedusaGame();
};
//# sourceMappingURL=app.js.map