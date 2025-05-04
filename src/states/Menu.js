import Phaser from 'phaser'
import { clone } from 'lodash'
import globals from './globals'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    let text = this.add.text(
      this.game.width * 0.5, this.game.height * 0.4,
      `Breakout!\n\nClick New Game to Begin`,
      {
        font: '24px Arial',
        fill: '#000',
        align: 'center'
      }
    )
    text.anchor.set(0.5)
  
    // Use the preloaded image as a button
    let button = this.add.button(
      this.game.width * 0.5, this.game.height * 0.6,
      'restartbtn',
      this.restartGame,
      this
    )
    button.anchor.set(0.5)

    button.scale.setTo(0.25) 
  }

  resetGlobalVariables () {
    this.game.global = clone(globals)
  }

  restartGame () {
    this.resetGlobalVariables()
    this.game.state.start('Game')
  }
}
