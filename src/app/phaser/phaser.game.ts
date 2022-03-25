/**
 * Copyright © 2020 Eaton
 *
 * This software is confidential and licensed under Eaton Proprietary License
 * (EPL or EULA).
 * This software is not authorized to be used, duplicated or disclosed to
 * anyone without the prior written permission of Eaton.
 * Limitations, restrictions and exclusions of the Eaton applicable standard
 * terms and conditions, such as its EPL and EULA, apply.
 */

import * as Phaser from 'phaser';
import * as DebugDrawPlugin from 'phaser-plugin-debug-draw';
import { RackScene } from './rack.scene';

export class PhaserGame extends Phaser.Game {
  public constructor(el: HTMLElement, width: number, height: number) {
    super({
      type: Phaser.WEBGL,
      width,
      height,
      backgroundColor: 0xeef0f0,
      parent: el,
      scale: {
        mode: Phaser.Scale.NONE, // we will resize the game with our own code (see Boot.js)
        width: width * window.devicePixelRatio, // set game width by multiplying window width with devicePixelRatio
        height: height * window.devicePixelRatio, // set game height by multiplying window height with devicePixelRatio
        zoom: 1 / window.devicePixelRatio, // Set the zoom to the inverse of the devicePixelRatio
      },
      audio: {
        noAudio: true,
      },
      render: {
        antialias: true,
        antialiasGL: true,
      },
      physics: {
        default: 'arcade',
        arcade: {
          debug: true,
          gravity: { y: 200 },
        },
      },
      scene: [
        RackScene
        // ScrollBarScene,
        // CameraScene,
        //FeedScene
      ],
      plugins: {
        scene: [
          {
            key: 'DebugDrawPlugin',
            plugin: DebugDrawPlugin,
            mapping: 'debugDraw',
          },
        ],
      },
    });
    this.scene.start(new RackScene());
  }
}
