var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.preload = function () {
        //this.game.load.spritesheet('menu', 'assets/backgrounds/menu.png', 512, 384);
    };
    Menu.prototype.create = function () {
        this.game.add.sprite(0, 0, 'menu');
    };
    Menu.prototype.update = function () {
        if (this.game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
            this.game.state.start('level1');
        }
    };
    Menu.prototype.render = function () {
    };
    return Menu;
}(Phaser.State));
//# sourceMappingURL=menu.js.map