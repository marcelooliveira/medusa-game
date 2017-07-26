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
/// <reference path="../app.ts" />
/// <reference path="baseenemy.ts" />
var EnemyA = (function (_super) {
    __extends(EnemyA, _super);
    function EnemyA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyA;
}(BaseEnemy));
var EnemyB = (function (_super) {
    __extends(EnemyB, _super);
    function EnemyB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyB;
}(BaseEnemy));
var EnemyC = (function (_super) {
    __extends(EnemyC, _super);
    function EnemyC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyC;
}(BaseEnemy));
var EnemyD = (function (_super) {
    __extends(EnemyD, _super);
    function EnemyD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyD;
}(BaseEnemy));
var EnemyE = (function (_super) {
    __extends(EnemyE, _super);
    function EnemyE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyE;
}(BaseEnemy));
var EnemyF = (function (_super) {
    __extends(EnemyF, _super);
    function EnemyF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyF;
}(BaseEnemy));
var EnemyG = (function (_super) {
    __extends(EnemyG, _super);
    function EnemyG() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyG;
}(BaseEnemy));
var EnemyH = (function (_super) {
    __extends(EnemyH, _super);
    function EnemyH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyH;
}(BaseEnemy));
var EnemyI = (function (_super) {
    __extends(EnemyI, _super);
    function EnemyI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyI;
}(BaseEnemy));
var EnemyJ = (function (_super) {
    __extends(EnemyJ, _super);
    function EnemyJ() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyJ;
}(BaseEnemy));
var EnemyK = (function (_super) {
    __extends(EnemyK, _super);
    function EnemyK() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyK;
}(BaseEnemy));
var EnemyL = (function (_super) {
    __extends(EnemyL, _super);
    function EnemyL() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyL;
}(BaseEnemy));
var EnemyM = (function (_super) {
    __extends(EnemyM, _super);
    function EnemyM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyM;
}(BaseEnemy));
var EnemyN = (function (_super) {
    __extends(EnemyN, _super);
    function EnemyN() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyN;
}(BaseEnemy));
var EnemyFactory = (function () {
    function EnemyFactory(knightmareGame, game, layer, bulletSound, player) {
        this.knightmareGame = knightmareGame;
        this.game = game;
        this.layer = layer;
        this.bulletSound = bulletSound;
        this.player = player;
    }
    EnemyFactory.prototype.createEnemy = function (code, x, y, enemyNumber) {
        switch (code) {
            case 'a':
                return new EnemyA(this.knightmareGame, this.game, this.layer, this.bulletSound, this.player, x, y, enemyNumber);
            case 'b':
                return new EnemyB(this.knightmareGame, this.game, this.layer, this.bulletSound, this.player, x, y, enemyNumber);
            case 'c':
                return new EnemyC(this.knightmareGame, this.game, this.layer, this.bulletSound, this.player, x, y, enemyNumber);
            case 'd':
                return new EnemyD(this.knightmareGame, this.game, this.layer, this.bulletSound, this.player, x, y, enemyNumber);
            case 'e':
                return new EnemyE(this.knightmareGame, this.game, this.layer, this.bulletSound, this.player, x, y, enemyNumber);
            case 'f':
                return new EnemyF(this.knightmareGame, this.game, this.layer, this.bulletSound, this.player, x, y, enemyNumber);
            case 'g':
                return new EnemyG(this.knightmareGame, this.game, this.layer, this.bulletSound, this.player, x, y, enemyNumber);
            case 'h':
                return new EnemyH(this.knightmareGame, this.game, this.layer, this.bulletSound, this.player, x, y, enemyNumber);
            case 'i':
                return new EnemyI(this.knightmareGame, this.game, this.layer, this.bulletSound, this.player, x, y, enemyNumber);
            case 'j':
                return new EnemyJ(this.knightmareGame, this.game, this.layer, this.bulletSound, this.player, x, y, enemyNumber);
        }
    };
    return EnemyFactory;
}());
//# sourceMappingURL=enemy.js.map