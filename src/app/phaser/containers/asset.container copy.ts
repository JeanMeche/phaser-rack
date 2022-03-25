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
import { GameObjectHelper } from '../helpers/game-object.helper';
import { RackScene } from '../rack.scene';
// import { OutletContainer } from './outlet.container';
// import { SuggestionContainer } from './suggestion.container';
import { UrackContainer } from './urack.container';

export enum AssetType {
  Server,
  UPS,
}
export interface IConnexionToOutlet {
  feedName: string;
  ePDUId: number;
  groupIdOfEPDU: number;
  outletId: number;
}
export interface IAsset {
  id: string;
  type: AssetType;
  title: string;
  uPosition: number;
  uHeight: number;
  connection: Array<IConnexionToOutlet>;
  totalPower: string;
  manufacturer: string;
}

export class AssetContainer extends Phaser.GameObjects.Container {
  public static width = 350;
  public static height = 30;
  public static isOneOfServerSelected = false;

  public assetNameContainerWidth = 150;
  public assetNameContainerHeight = 30;

  // public get height(): number {
  //     return (
  //         this.info.uHeight * AssetContainer.height +
  //         2 * (this.info.uHeight - 1)
  //     );
  // }

  public serverRect!: Phaser.GameObjects.Rectangle;
  public serverNameRect!: Phaser.GameObjects.Rectangle;
  public isSelected = false;

  public constructor(
    scene: RackScene,
    public inputPlugin: Phaser.Input.InputPlugin,
    public info: IAsset,
    public containerPositionX: number
  ) {
    super(scene);
    this.width = AssetContainer.width;
    this.height =
      this.info.uHeight * AssetContainer.height + 2 * (this.info.uHeight - 1);

    this.serverRect = GameObjectHelper.createRectangle({
      scene,
      width: this.width,
      height: this.height,
      fillColor: 0x424e54,
    }).setOrigin(0);
    this.serverRect.setInteractive({ cursor: 'grab' });
    this.inputPlugin.setDraggable(this.serverRect);

    this.serverNameRect = GameObjectHelper.createRectangle({
      scene,
      width: this.assetNameContainerWidth,
      height: this.assetNameContainerHeight,
      fillColor: 0x4da3d4,
    }).setOrigin(0);
    this.serverNameRect.setInteractive({ cursor: 'grab' });

    const graphics = new Phaser.GameObjects.Graphics(this.scene);
    graphics.fillStyle(0x424e54);
    graphics
      .fillTriangle(
        this.assetNameContainerHeight,
        0,
        this.assetNameContainerHeight,
        this.assetNameContainerHeight,
        0,
        this.assetNameContainerHeight
      )
      .setPosition(
        this.assetNameContainerWidth - this.assetNameContainerHeight,
        0
      );

    const serverName = new Phaser.GameObjects.Text(
      scene,
      0,
      this.assetNameContainerHeight / 2,
      this.info.title,
      {
        color: '#000000',
        fixedWidth: this.assetNameContainerWidth,
        align: 'center',
      }
    ).setOrigin(0, 0.5);

    const totalPower = new Phaser.GameObjects.Text(
      scene,
      AssetContainer.width / 2,
      this.assetNameContainerHeight / 2,
      'Total Power',
      { color: '#ffffff', align: 'left', fontSize: '12px' }
    ).setOrigin(0, 0.5);

    const powerCountBackground = new Phaser.GameObjects.Graphics(this.scene);

    powerCountBackground
      .fillStyle(0xffffff)
      .fillRoundedRect(
        0,
        this.assetNameContainerHeight / 4,
        this.assetNameContainerWidth / 3,
        this.assetNameContainerHeight / 2,
        6
      )
      .setPosition(
        AssetContainer.width - this.assetNameContainerWidth / 2.5,
        0
      );

    const totalPowerCount = new Phaser.GameObjects.Text(
      scene,
      AssetContainer.width - this.assetNameContainerWidth / 2.5,
      this.assetNameContainerHeight / 2,
      this.info.totalPower,
      {
        fontSize: '12px',
        color: '#000000',
        align: 'left',
        fixedWidth: this.assetNameContainerWidth / 3,
        padding: { left: 5 },
      }
    ).setOrigin(0, 0.5);

    const assetManufacturer = new Phaser.GameObjects.Text(
      scene,
      this.assetNameContainerWidth / 4,
      this.height - this.assetNameContainerHeight / 2,
      this.info.manufacturer,
      {
        color: '#ffffff',
        align: 'left',
        fixedWidth: this.assetNameContainerWidth - 50,
      }
    ).setOrigin(0, 0.5);

    const url = new Phaser.GameObjects.Text(
      scene,
      this.assetNameContainerWidth + this.assetNameContainerWidth / 6,
      this.height - this.assetNameContainerHeight / 2,
      'URL',
      {
        color: '#ffffff',
        align: 'center',
        fixedWidth: this.assetNameContainerWidth / 4,
      }
    ).setOrigin(0, 0.5);

    const urlBackground = new Phaser.GameObjects.Graphics(this.scene);

    urlBackground
      .fillStyle(0xffffff)
      .fillRoundedRect(
        0,
        this.assetNameContainerHeight / 4,
        this.assetNameContainerWidth / 4,
        this.assetNameContainerHeight / 2,
        6
      )
      .setPosition(this.assetNameContainerWidth, 0);

    const virtualMachineBackground = new Phaser.GameObjects.Graphics(
      this.scene
    );
    virtualMachineBackground
      .fillStyle(0xffffff)
      .fillRoundedRect(
        0,
        this.assetNameContainerHeight / 4,
        this.assetNameContainerWidth / 3,
        this.assetNameContainerHeight / 2,
        6
      )
      .setPosition(this.assetNameContainerWidth + url.width + 30, 0);

    urlBackground.visible = false;
    virtualMachineBackground.visible = false;

    const virtualMachineCount = new Phaser.GameObjects.Text(
      scene,
      AssetContainer.width - this.assetNameContainerWidth / 2.5,
      this.height - this.assetNameContainerHeight / 2,
      '20 VM',
      {
        color: '#ffffff',
        align: 'center',
        fixedWidth: this.assetNameContainerWidth / 3,
      }
    ).setOrigin(0, 0.5);

    if (this.info.uHeight === 1) {
      assetManufacturer.visible = false;
      totalPower.visible = false;
      urlBackground.visible = true;
      virtualMachineBackground.visible = true;

      url
        .setStyle({ fontSize: 12, color: '#000000', fixedWidth: 40 })
        .setPadding(5, 0, 5, 0)
        .setPosition(
          this.assetNameContainerWidth,
          this.assetNameContainerHeight / 2
        );

      virtualMachineCount
        .setStyle({ fontSize: 12, color: '#000000', fixedWidth: 40 })
        .setPosition(
          this.assetNameContainerWidth + url.width + 30,
          this.assetNameContainerHeight / 2
        );

      totalPowerCount.setStyle({
        fontSize: 12,
        color: '#000000',
        fixedWidth: 40,
      });
    }

    this.add([
      this.serverRect,
      this.serverNameRect,
      graphics,
      serverName,
      totalPower,
      powerCountBackground,
      totalPowerCount,
      assetManufacturer,
      urlBackground,
      url,
      virtualMachineBackground,
      virtualMachineCount,
    ]);

    // this.serverRect.on('dragstart', () => {
    //     this.scene.clearAllFreeZone();
    //     this.drawSuggestion(this);
    // });

    this.serverRect.on('drag', (pointer: Phaser.Input.Pointer) => {
      this.y = pointer.position.y + this.scene.cameras.main.scrollY;
    });

    // this.serverRect.on(
    //     'drop',
    //     (
    //         pointer: Phaser.Input.Pointer,
    //         zone: Phaser.GameObjects.Rectangle,
    //     ) => {
    //         const suggestionDrop = zone.parentContainer;
    //         if (
    //             suggestionDrop instanceof SuggestionContainer &&
    //             this.canDropServer(suggestionDrop.u, this) &&
    //             this.info.uHeight + suggestionDrop.u <=
    //                 this.scene.rackHeight
    //         ) {
    //             this.moveAssetToU(this, suggestionDrop.u);
    //         }
    //     },
    // );

    // this.serverRect.on(
    //     'dragend',
    //     (
    //         pointer: Phaser.Input.Pointer,
    //         dragX: number,
    //         dragY: number,
    //         dropped: boolean,
    //     ) => {
    //         this.dragEnd(dropped);
    //     },
    // );

    // this.serverRect.on('pointerdown', this.onClick, this);
  }

  // public onClick(): void {
  //   if (!this.isSelected && !AssetContainer.isOneOfServerSelected) {
  //     this.isSelected = true;
  //     AssetContainer.isOneOfServerSelected = true;
  //     this.scene.tweens.add({
  //       targets: this,
  //       duration: 500,
  //       props: {
  //         scale: 1.1,
  //         x: this.containerPositionX - 16,
  //       },
  //     });

  //     const assetId = (<any>this).info.id;

  //     const tab = this.getOutletsConnectionTabOfAnAsset(assetId);
  //     for (const outlet of tab) {
  //       const myOutlet = this.getOutletInstance(
  //         outlet.feedName,
  //         outlet.ePDUId,
  //         outlet.groupIdOfEPDU,
  //         outlet.outletId
  //       );

  //       for (const outlets of this.scene.outletTab) {
  //         if (
  //           outlets.feedName === outlet.feedName &&
  //           outlets.outletNumber === outlet.outletId &&
  //           outlets.ePDUId === outlet.ePDUId &&
  //           outlets.groupIdOfEPDU === outlet.groupIdOfEPDU
  //         ) {
  //           myOutlet.setAlpha(1);
  //           myOutlet.rect.setFillStyle(0xff00ff);
  //           outlets.setAlpha(0.3);
  //         }
  //       }
  //     }
  //   } else if (this.isSelected && AssetContainer.isOneOfServerSelected) {
  //     this.scene.tweens.add({
  //       targets: this,
  //       duration: 500,
  //       props: {
  //         scale: 1,
  //         x: this.containerPositionX,
  //       },
  //     });
  //     this.isSelected = false;
  //     AssetContainer.isOneOfServerSelected = false;
  //     for (const graphic of this.scene.graphicsTab) {
  //       graphic.clear();
  //     }
  //     for (const outlets of this.scene.outletTab) {
  //       outlets.setAlpha(1);
  //       outlets.rect.setFillStyle(0xeeeeee);
  //     }
  //     this.scene.graphicsTab = [];
  //   }
  // }

  // private moveAssetToU(asset: this, u: number): void {
  //     if (!this.canDropServer(u, asset)) {
  //         return;
  //     }

  //     const index = this.scene.rackConfig.findIndex(
  //         (config) => config.id === asset.info.id,
  //     );
  //     this.scene.rackConfig[index].uPosition = u;

  //     asset.info = this.scene.rackConfig[index];
  //     asset.setY(this.scene.getYFromU(u));
  //     this.scene.updateURackFreeArray();
  // }

  // private dragEnd(dropped: boolean): void {
  //     if (!dropped) {
  //         this.setY(this.scene.getYFromU(this.info.uPosition));
  //     }
  //     this.clearAllSuggestion();
  //     this.scene.drawFreeZone();
  //     this.onClick();
  // }

  // private canDropServer(u: number, asset: AssetContainer): boolean {
  //   for (let i = u; i < asset.info.uHeight + u; i = i + 1) {
  //     const uRack = this.scene.uRackFreeArray[i];
  //     if (uRack !== undefined && uRack !== asset.info.id) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  // private getOutletsConnectionTabOfAnAsset(
  //   assetId: string
  // ): Array<IConnexionToOutlet> {
  //   let tab: Array<IConnexionToOutlet> = [];
  //   for (const asset of (this.scene as RackScene).rackConfig) {
  //     if (asset.id === assetId) {
  //       tab = asset.connection;
  //       return tab;
  //     }
  //   }
  //   return tab;
  // }

  // private getOutletInstance(
  //     feedName: string,
  //     ePDUId: number,
  //     groupId: number,
  //     outletId: number,
  // ): OutletContainer {
  //     let myOutlet = this.scene.outletTab[0];
  //     for (const outlet of this.scene.outletTab) {
  //         if (
  //             feedName === outlet.feedName &&
  //             ePDUId === outlet.ePDUId &&
  //             groupId === outlet.groupIdOfEPDU &&
  //             outletId === outlet.outletNumber
  //         ) {
  //             myOutlet = outlet;
  //             return myOutlet;
  //         }
  //     }
  //     return myOutlet;
  // }

  // private drawSuggestion(asset: AssetContainer): void {
  //     for (let i = 0; i < this.scene.rackHeight; i = i + 1) {
  //         const draw = this.canDropServer(i, asset);
  //         if (draw) {
  //             const suggestion = new SuggestionContainer(
  //                 this.scene,
  //                 i,
  //                 AssetContainer.width,
  //                 AssetContainer.height,
  //             );
  //             suggestion.setPosition(
  //                 UrackContainer.width + this.scene.xPosition,
  //                 this.scene.getYFromU(i),
  //             );
  //             this.scene.add.existing(suggestion);
  //         }
  //     }
  // }

  // private clearAllSuggestion(): void {
  //     for (const child of this.scene.children.getChildren()) {
  //         if (child instanceof SuggestionContainer) {
  //             child.destroy(true);
  //         }
  //     }
  // }
}
