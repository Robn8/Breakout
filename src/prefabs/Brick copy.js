import Phaser from "phaser";

class Brick extends Phaser.Sprite {
    constructor (game, x, y) {
        super(game, x, y, 'brick')

        this.game.physics.arcade.enableBody(this)

        this.checkWorldBounds = true
        this.body.collideWorldBounds = true

        this.body.bounce.set(1)
    }
}

export default Brick