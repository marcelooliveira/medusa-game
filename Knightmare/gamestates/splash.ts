class Splash01 extends Phaser.State {
    create() {
        this.game.add.sprite(0, 0, 'splash01');
        this.game.time.events.add(Phaser.Timer.SECOND, this.resumeGame, this);
    }

    resumeGame() {
        this.game.state.start('level1');
    }
}