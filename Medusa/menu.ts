class Menu extends Phaser.State {
    preload() {
        //this.game.load.spritesheet('menu', 'assets/backgrounds/menu.png', 512, 384);
    }

    create() {
        this.game.add.sprite(0, 0, 'menu');
    }

    update() {
        if (this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.game.state.start('level1');
        }
    }

    render() {
    }
}