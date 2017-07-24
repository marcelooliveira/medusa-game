class Menu extends Phaser.State {
    create() {
        this.game.add.sprite(0, 0, 'menu');
    }

    update() {
        if (this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.game.state.start('level1');
        }
    }
}