/// <reference path="../app.ts" />
/// <reference path="baseenemy.ts" />
class EnemyA extends BaseEnemy {
    //constructor(knightmareGame: KnightmareGame, game: Phaser.Game, layer: Phaser.TilemapLayer, bulletSound: Phaser.Sound,
    //    player: Player, x: number, y: number, enemyNumber: number) {
    //    super(knightmareGame, game, layer, bulletSound, player, x, y, enemyNumber);
    //}
}

class EnemyB extends BaseEnemy {
    constructor(knightmareGame: KnightmareGame, game: Phaser.Game, layer: Phaser.TilemapLayer, bulletSound: Phaser.Sound,
        player: Player, x: number, y: number, enemyNumber: number) {
            super(knightmareGame, game, layer, bulletSound, player, x, y, enemyNumber);
            this.velocity = 32;
    }
}
class EnemyC extends BaseEnemy { }
class EnemyD extends BaseEnemy { }
class EnemyE extends BaseEnemy { }
class EnemyF extends BaseEnemy { }
class EnemyG extends BaseEnemy { }
class EnemyH extends BaseEnemy { }
class EnemyI extends BaseEnemy { }
class EnemyJ extends BaseEnemy { }
class EnemyK extends BaseEnemy { }
class EnemyL extends BaseEnemy { }
class EnemyM extends BaseEnemy { }
class EnemyN extends BaseEnemy { }


class EnemyFactory {
    knightmareGame: KnightmareGame;
    game: Phaser.Game;
    layer: Phaser.TilemapLayer;
    bulletSound: Phaser.Sound;
    player: Player;
    constructor(knightmareGame: KnightmareGame, game: Phaser.Game, layer: Phaser.TilemapLayer, bulletSound: Phaser.Sound, player: Player) {
        this.knightmareGame = knightmareGame;
        this.game = game;
        this.layer = layer;
        this.bulletSound = bulletSound;
        this.player = player;
    }
    createEnemy(code: string, x: number, y: number, enemyNumber: number): BaseEnemy {
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
    }
}