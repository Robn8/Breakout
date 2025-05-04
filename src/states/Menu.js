import Phaser from 'phaser'
import { clone } from 'lodash'
import globals from './globals'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    let centerX = this.game.width * 0.5
  
    let text = this.add.text(
      centerX, this.game.height * 0.4,
      `Breakout!\n\nClick New Game to Begin`,
      {
        font: '24px Arial',
        fill: '#000',
        align: 'center'
      }
    )
    text.anchor.set(0.5)
  
    // Main "New Game" button
    let newGameButton = this.add.button(
      centerX, this.game.height * 0.57,
      'restartbtn',
      this.restartGame,
      this
    )
    newGameButton.anchor.set(0.5)
    newGameButton.scale.setTo(0.25)
  
    // "On mobile?" text
    let mobileText = this.add.text(
      centerX, this.game.height * 0.72,
      'On mobile? Click here:',
      {
        font: '18px Arial',
        fill: '#000',
        align: 'center'
      }
    )
    mobileText.anchor.set(0.5)
  
    // Mobile game button
    let mobileGameButton = this.add.button(
        centerX, this.game.height * 0.85,
        'restartbtn',
        this.mobileGame,
        this
      )
      mobileGameButton.anchor.set(0.5)
      mobileGameButton.scale.setTo(0.25)
  }
  

  resetGlobalVariables () {
    this.game.global = clone(globals)
  }

  restartGame () {
    this.resetGlobalVariables()
    this.game.state.start('Game')
  }

  mobileGame () {
    this.resetGlobalVariables()
    this.game.state.start('Mobile')
  }
}
