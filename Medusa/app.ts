/// <reference path="pixi.d.ts" />
/// <reference path="p2.d.ts" />

class MedusaGame {
    game: Phaser.Game;
    map: Phaser.Tilemap;
    bmd: Phaser.Image;
    layer: Phaser.TilemapLayer;
    tileSprite: Phaser.TileSprite;
    player: Phaser.Sprite;
    bossSprite: Phaser.Sprite;
    cursors: Phaser.CursorKeys;

    constructor() {
        this.game = new Phaser.Game(512, 512, Phaser.AUTO, 'content', {
            create: this.create, preload: this.preload,
            update: this.update, readFile: this.readFile
            //, render: this.render
        });
    }

    preload() { 
        this.game.load.image('level', 'assets/backgrounds/level01.jpg');
        this.game.load.atlasJSONHash('player', 'assets/sprites/player.png', 'assets/sprites/player.json');
        this.game.load.atlasJSONHash('boss', 'assets/sprites/boss.png', 'assets/sprites/boss.json');
    }

    create() {
        this.tileSprite = this.game.add.tileSprite(0, 0, 512, 3776, 'level');

        this.game.world.setBounds(0, 0, 512, 3776);

        //  Creates a blank tilemap
        this.map = this.game.add.tilemap();

        //this.map.addTilesetImage('tiles', this.tileSprite);

        this.layer = this.map.create('level1', 16, 118, 32, 32);
        this.layer.resizeWorld();


        var lines = this.readFile("/assets/maps/Map01.txt").split('\n');
        for (var y = 0; y < lines.length; y++)
        {
            var line = lines[y];
            for (var x = 0; x < line.length; x++) {
                var char = line[x];
                if (char == '.') {
                    //this.map.putTile(1, x, y, this.layer);
                }
            }
        }

        this.map.putTile(1, 2, 10, this.layer);
        this.map.putTile(1, 3, 10, this.layer);
        this.map.putTile(1, 4, 10, this.layer);
        this.map.setCollisionByExclusion([0]);



        //  Add a Tileset image to the map
        //this.map.addTilesetImage('tiles', bmd);

        //this.game.physics.startSystem(Phaser.Physics.P2JS);

        this.cursors = this.game.input.keyboard.createCursorKeys();
        //this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
        this.player = this.game.add.sprite(96, 96, 'player');
        this.game.physics.arcade.enable(this.player);

        //this.game.physics.p2.enable(this.player);
        
        //this.player.body.fixedRotation = true;

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.game.debug.text('Press down arrow keys to move the tileSprite', 20, 20);

        this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

        this.player.animations.add('run');
        this.player.animations.play('run', 3, true);
        this.player.body.collideWorldBounds = true;
        this.player.body.setSize(20, 32, 5, 16);

        this.bossSprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'boss');
        this.bossSprite.anchor.setTo(0.75, 3.5);

        this.bossSprite.animations.add('run');
        this.bossSprite.animations.play('run', 2, true);

    }
            
    update() {
       
        //this.player.body.setZeroVelocity();
        //this.player.body.position = { x: 0, y: 0 };
        this.game.input.update();
        this.game.physics.arcade.collide(this.player, this.layer);

        this.player.body.velocity.set(0);
        if (this.cursors.up.isDown) {
            //this.player.body.moveUp(180)
            this.player.body.velocity.y = -100;
        }
        else if (this.cursors.down.isDown) {
            //this.player.body.moveDown(180);
            this.player.body.velocity.y = 100;
        }

        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -100;
        }
        else if (this.cursors.right.isDown) {
            //this.player.body.moveRight(180);
            this.player.body.velocity.x = 100;
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