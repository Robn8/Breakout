import Phaser from 'phaser'
import WebFont from 'webfontloader'
import config from '../config';
import globals from './globals';
import { clone } from 'lodash';

export default class extends Phaser.State {
  init() {
    this.stage.backgroundColor = 'ffffff'
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
  }

  create () {
    this.initGlobalVariables()
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.scale.pageAlignHorizontally = true
    this.scale.pageAlignVertically = true

    this.scale.setMinMax(320, 480, window.innerWidth, window.innerHeight)

    this.state.start('Splash')
  }

  initGlobalVariables () {
    this.game.global = clone(globals)
  }

  preload() {
    if (config.webfonts.length) {
      WebFont.load({
        google: {
          families: config.webfonts
        },
        active: this.fontsLoaded
      })
    }

    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' })
    text.anchor.setTo(0.5, 0.5)

    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')

    this.load.image('brick', './assets/images/brick.png')
    this.load.image('paddle', './assets/images/paddle.png')
    this.load.image('ball', './assets/images/ball.png')
  }

  render() {
    if (config.webfonts.length && this.fontsReady) {
      this.state.start('Splash')
    }
    if (!config.webfonts.length) {
      this.state.start('Splash')
    }
  }

  fontsLoaded() {
    this.fontsReady = true
  }
}
