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
import { ColorPalette } from '../helpers/color-palette';
import { GameObjectHelper } from '../helpers/game-object.helper';
import { hexStringToHexNumber } from '../helpers/hex-string-to-hex-number';

export class UrackContainer extends Phaser.GameObjects.Container {
  public static width = 40;
  public static height = 30;
  public override width = UrackContainer.width;
  public override height = UrackContainer.height;
  private readonly rect!: Phaser.GameObjects.Rectangle;
  private readonly text!: Phaser.GameObjects.Text;

  public constructor(scene: Phaser.Scene, public uName: string) {
    super(scene);
    const fillColorOfU = hexStringToHexNumber(ColorPalette.aliceblue);
    const textStyle = {
      color: ColorPalette.Black,
      fontFamily: 'Roboto',
    };

    this.text = new Phaser.GameObjects.Text(
      scene,
      this.width / 2,
      this.height / 2,
      uName,
      textStyle
    ).setOrigin(0.5);

    this.rect = GameObjectHelper.createRectangle({
      scene,
      width: this.width,
      height: this.height,
      fillColor: fillColorOfU,
    }).setOrigin(0);

    this.add([this.rect, this.text]);
  }
}
