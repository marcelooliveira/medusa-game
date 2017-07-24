class Splash01 extends Phaser.State {
    preload() {
        //this.game.load.spritesheet('menu', 'assets/backgrounds/menu.png', 512, 384);
    }

    create() {
        this.game.add.sprite(0, 0, 'splash01');
        this.game.time.events.add(Phaser.Timer.SECOND, this.resumeGame, this);
    }

    update() {

    }

    render() {
    }

    resumeGame() {
        this.game.state.start('level1');
    }
}