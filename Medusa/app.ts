/// <reference path="pixi.d.ts" />
/// <reference path="p2.d.ts" />
/// <reference path="player.ts" />

class MedusaGame {
    game: Phaser.Game;
    map: Phaser.Tilemap;
    bmd: Phaser.BitmapData;
    layer: Phaser.TilemapLayer;
    tileSprite: Phaser.TileSprite;
    player: Player;
    bossSprite: Phaser.Sprite;
    cursors: Phaser.CursorKeys;
    music: Phaser.Sound;
    bulletSound: Phaser.Sound;
    constructor() {
        this.game = new Phaser.Game(512, 512, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload,
            update: this.update, readFile: this.readFile,
            setupMap: this.setupMap, setupPlayer: this.setupPlayer,
            setupBoss: this.setupBoss, setupAudio: this.setupAudio,
            setupKeyboard: this.setupKeyboard
        });
    }

    preload() { 
        this.game.load.image('level', 'assets/backgrounds/level01.jpg');
        this.game.load.atlasJSONHash('player', 'assets/sprites/player.png', 'assets/sprites/player.json');
        this.game.load.atlasJSONHash('boss', 'assets/sprites/boss.png', 'assets/sprites/boss.json');
        this.game.load.audio('music', ['assets/audio/Level1.mp3']);
        this.game.load.audio('bulletSound', ['assets/audio/PlayerBullet1Shooting.wav']);
    }

    create() {
        this.setupAudio();
        this.setupMap();
        this.setupBoss();
        this.setupKeyboard();
        this.setupPlayer();
    }
            
    update() {
       
        this.game.input.update();
        this.player.update();
    }

    render() {
        this.game.debug.cameraInfo(this.game.camera, 32, 32);
    }

    readFile(file: string) : string {
        var request = new XMLHttpRequest();
        request.open("GET", file, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
    }

    setupMap() {
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
    }

    setupAudio() {
        this.music = this.game.add.audio('music');
        this.music.play();
        this.bulletSound = this.game.add.audio('bulletSound');
        this.bulletSound.allowMultiple = true;
    }

    setupPlayer() {
        this.player = new Player(this.game, this.cursors, this.layer, this.bulletSound);
        this.player.setup();
    }

    setupBoss() {
        this.bossSprite = this.game.add.sprite(this.game.world.centerX - 48, 64, 'boss');
        this.bossSprite.animations.add('run');
        this.bossSprite.animations.play('run', 2, true);
    }

    setupKeyboard() {
        this.cursors = this.game.input.keyboard.createCursorKeys();
    }
}

window.onload = () => {

    var game = new MedusaGame();

};