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
import { RackScene } from '../rack.scene';
import { AssetContainer } from './asset.container';
import { RackHeaderContainer } from './rack-header.container';
import { UrackContainer } from './urack.container';
// import { RackScene } from '../scene/rack.scene';
// import { AssetContainer } from './asset.container';
// import { UrackContainer } from './urack.container';

export class RackContainer extends Phaser.GameObjects.Container {
  public static rackInformationContainerHeight = 100 * window.devicePixelRatio;
  public static rackInformationContainerPadding = 20 * window.devicePixelRatio;

  public static rackWidth = AssetContainer.width + UrackContainer.width * 2;
  // this.scene.rackPadding * 2;
  // private rackInformationContainer!: Phaser.GameObjects.Graphics;
  // private availableRackUCount: number = 29;
  // private rackUsage: number = 1402;
  // private rackTotalPower: number = 5530;

  public constructor(scene: RackScene) {
    super(scene);

    const graphics = new Phaser.GameObjects.Graphics(this.scene);
    graphics
      .lineStyle(2, 0x000000, 1)
      .fillStyle(0xffffff)
      .fillRoundedRect(
        0,
        0,
        this.width,
        120 * scene.rackHeight +
          scene.rackUPadding * (scene.rackHeight - 2) +
          RackContainer.rackInformationContainerHeight +
          scene.rackPadding * 2,
        6
      );

    this.add([
      graphics,
      // header,
      // this.rackInformationContainer,
      // rackUCount,
      // rackUCountHeader,
      // rackUsage,
      // rackUsageHeader,
      // rackPowerCountBackground,
      // rackFlipView,
      // rackMoreInfo
    ]);
  }
}
