/// <reference path="pixi.d.ts" />
/// <reference path="p2.d.ts" />

class MedusaGame {
    game: Phaser.Game;
    map: Phaser.Tilemap;
    bmd: Phaser.BitmapData;
    layer: Phaser.TilemapLayer;
    tileSprite: Phaser.TileSprite;
    player: Phaser.Sprite;
    bossSprite: Phaser.Sprite;
    cursors: Phaser.CursorKeys;
    music: Phaser.Sound;
    bulletSound: Phaser.Sound;
    playerVelocity: number;
    isWeaponLoaded: boolean;
    constructor() {
        this.game = new Phaser.Game(512, 512, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload,
            update: this.update, readFile: this.readFile
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
        this.tileSprite = this.game.add.tileSprite(0, 0, 512, 3776, 'level');
        this.game.world.setBounds(0, 0, 512, 3776);

        this.music = this.game.add.audio('music');
        this.music.play();
        this.bulletSound = this.game.add.audio('bulletSound');
        this.bulletSound.allowMultiple = true;

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
        for (var y = 0; y < lines.length; y++)
        {
            var line = lines[y];
            for (var x = 0; x < line.length; x++) {
                var char = line[x];
                if (char == 'X') {
                    this.map.putTile(1, x, y, this.layer);
                }
            }
        }

        this.map.setCollisionByExclusion([0]);

        this.player = this.game.add.sprite(this.game.world.centerX - 16, this.game.world.height - 64, 'player');
        this.player.animations.add('run');
        this.player.animations.play('run', 3, true);
        this.playerVelocity = 150;
        this.isWeaponLoaded = true;
        this.game.physics.arcade.enable(this.player);

        this.player.body.collideWorldBounds = true;
        this.player.body.setSize(32, 32, 0, 0);
        this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.bossSprite = this.game.add.sprite(this.game.world.centerX - 48, 64, 'boss');

        this.bossSprite.animations.add('run');
        this.bossSprite.animations.play('run', 2, true);
    }
            
    update() {
       
        this.game.input.update();
        this.game.physics.arcade.collide(this.player, this.layer);

        this.player.body.velocity.set(0);
        if (this.cursors.up.isDown) {
            this.player.body.velocity.y = -this.playerVelocity;
        }
        else if (this.cursors.down.isDown) {
            this.player.body.velocity.y = this.playerVelocity;
        }

        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -this.playerVelocity;
        }
        else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = this.playerVelocity;
        }

        if (this.isWeaponLoaded && this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.isWeaponLoaded = false;
            this.bulletSound.play();
        }
        else if (!this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.isWeaponLoaded = true;
        }
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
}

window.onload = () => {

    var game = new MedusaGame();

};