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
import { AssetContainer, IAsset } from './containers/asset.container';
import { RackHeaderContainer } from './containers/rack-header.container';
import { RackContainer } from './containers/rack.container';
import { UrackContainer } from './containers/urack.container';
import { StaticObjectsHelper } from './helpers/static-objects-helper';
// import {
//   AssetContainer,
//   IAsset,
// } from 'src/app/phaser/container/asset.container';
// import { CollapseButtonContainer } from '../container/collapse-button.container';
// import { CreateZoneContainer } from '../container/create-zone.container';
// import { OutletContainer } from '../container/outlet.container';
// import { RackContainer } from '../container/rack.container';
// import { Position, UrackContainer } from '../container/urack.container';
// import { StaticObjectsHelper } from '../helpers/static-objects-helper';
// import { ScrollBarScene } from './scroll-bar.scene';

const pixelRatio = window.devicePixelRatio;

export class RackScene extends Phaser.Scene {
  public xPosition = 100 * pixelRatio;
  public uRackFreeArray: Array<string> = [];
  public rackUHeight = UrackContainer.height;
  public rackUPadding = 2 * pixelRatio;
  public rackHeight = 42 * pixelRatio;
  public rackPadding = 10 * pixelRatio;
  public rackContainerYPosition = 20;
  public rackConfig: Array<IAsset> = StaticObjectsHelper.getRackConfig();
  // public outletTab: Array<OutletContainer> = [];
  // public graphicsTab: Array<any> = [];
  // public usedUTab: Array<number> = [];
  // public usedUTabWithY: Array<any> = [];
  // public rackConfig: Array<IAsset> = StaticObjectsHelper.getRackConfig();
  public assetTab: Array<AssetContainer> = [];
  // public xOfCollapseButton = this.xPosition + AssetContainer.width;
  // public yOfCollapseButton =
  //   this.rackContainerYPosition +
  //   RackContainer.rackInformationContainerPadding / 2;

  public constructor() {
    super({
      active: false,
      visible: false,
      key: 'rack',
    });
    this.updateURackFreeArray();
  }

  public create(): void {
    this.cameras.main.setRoundPixels(true); // to fix buring on fonts etc.
    this.drawRackContainer();
    this.drawRackInfo();
    this.drawURacks();
    this.drawAssets();
    this.drawFreeZone();
    this.drawCollapseButton();
    // this.input.on(
    //   'wheel',
    //   (
    //     pointer: Phaser.Input.Pointer,
    //     gameObject: Phaser.GameObjects.GameObject,
    //     deltaX: number,
    //     deltaY: number
    //   ) => {
    //     // const scrollScene = this.scene.get('scroll');
    //     // if (scrollScene instanceof ScrollBarScene) {
    //     //   scrollScene.clearRectangleOnSmallCamera();
    //     //   const main = this.cameras.main;
    //     //   scrollScene.scrollTo(main.scrollY + deltaY);
    //     // }
    //   }
    // );
  }

  public clearAllAsset(): void {
    // for (const child of this.children.getChildren()) {
    //   if (child instanceof AssetContainer) {
    //     child.destroy(true);
    //   }
    // }
  }

  public clearAllU(): void {
    // for (const child of this.children.getChildren()) {
    //   if (child instanceof UrackContainer) {
    //     child.destroy(true);
    //   }
    // }
  }

  public drawFreeZone(): void {
    // this.clearAllFreeZone();
    // for (let i = 0; i < this.rackHeight; i = i + 1) {
    //   if (!this.uRackFreeArray[i]) {
    //     const zone = new CreateZoneContainer(this.scene.scene, i);
    //     zone.setPosition(
    //       UrackContainer.width + this.xPosition,
    //       this.getYFromU(i)
    //     );
    //     this.add.existing(zone);
    //   }
    // }
  }

  public clearAllFreeZone(): void {
    // for (const child of this.children.getChildren()) {
    //   if (child instanceof CreateZoneContainer) {
    //     child.destroy(true);
    //   }
    // }
  }

  public getYFromU(u: number): number {
    return (
      RackContainer.rackInformationContainerHeight + this.rackUHeight * u
      // this.rackUPadding * u +
      // this.rackPadding * 3
    );
  }

  public updateURackFreeArray(): void {
    // this.uRackFreeArray = [];
    // for (const asset of this.rackConfig) {
    //   for (let i = 0; i < asset.uHeight; i = i + 1) {
    //     this.uRackFreeArray[asset.uPosition + i] = asset.id;
    //   }
    // }
  }

  private drawRackContainer(): void {
    const rackContainer = new RackContainer(this).setPosition(
      this.xPosition,
      this.rackContainerYPosition
    );

    this.add.existing(rackContainer);
  }

  private drawURacks(): void {
    for (let i = 0; i < this.rackHeight; i = i + 1) {
      const leftContainer = new UrackContainer(
        this.scene.scene,
        i.toString()
      ).setPosition(
        this.xPosition + UrackContainer.width / 2,
        this.getYFromU(i) + UrackContainer.height / 2
      );
      this.add.existing(leftContainer);

      const containerRight = new UrackContainer(
        this.scene.scene,
        i.toString()
      ).setPosition(
        UrackContainer.width +
          AssetContainer.width +
          UrackContainer.width / 2 +
          this.xPosition,
        this.getYFromU(i) + UrackContainer.height / 2
      );
      this.add.existing(containerRight);
    }
  }

  drawRackInfo(): void {
    const header = new RackHeaderContainer(this).setPosition(
      this.xPosition + RackContainer.rackWidth / 2,
      RackContainer.rackInformationContainerHeight / 2
    );
    this.input.on('pointerdown', () => {});
    this.input.enableDebug(header);
    this.add.existing(header);
  }

  private drawAssets(): void {
    this.assetTab = [];
    for (const asset of this.rackConfig) {
      const containerX =
        UrackContainer.width + this.xPosition + AssetContainer.width / 2;
      const containerY =
        this.getYFromU(asset.uPosition) + AssetContainer.height / 2;
      const container = new AssetContainer(
        this,
        this.input,
        asset,
        containerX
      ).setPosition(containerX, containerY);
      this.add.existing(container);
      this.assetTab.push(container);
    }
  }

  private drawCollapseButton(): void {
    // const collapseButton = new CollapseButtonContainer(this).setPosition(
    //   this.xOfCollapseButton,
    //   this.yOfCollapseButton
    // );
    // this.add.existing(collapseButton);
  }
}
