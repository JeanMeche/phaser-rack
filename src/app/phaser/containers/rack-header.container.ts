import { Scene } from 'phaser';
import { RackContainer } from './rack.container';

export class RackHeaderContainer extends Phaser.GameObjects.Container {
  private rackInformationContainer!: Phaser.GameObjects.Graphics;
  private availableRackUCount: number = 29;
  private rackUsage: number = 1402;
  private rackTotalPower: number = 5530;

  public constructor(scene: Scene, width: number) {
    super(scene);
    this.width = width;

    this.rackInformationContainer = new Phaser.GameObjects.Graphics(this.scene);

    this.rackInformationContainer
      .fillStyle(0x424e54)
      .fillRect(0, 0, this.width, RackContainer.rackInformationContainerHeight);

    const rackName = new Phaser.GameObjects.Text(
      scene,
      RackContainer.rackInformationContainerPadding,
      RackContainer.rackInformationContainerHeight / 5,
      'Rack Name',
      {
        color: '#ffffff',
        align: 'left',
        fontSize: '16px',
        fontFamily: 'roboto',
      }
    ).setOrigin(0, 0.5);

    const textStyle = {
      fontSize: '14px',
      color: '#ffffff',
      fontFamily: 'Roboto',
    };

    const rackUCountHeader = new Phaser.GameObjects.Text(
      scene,
      RackContainer.rackInformationContainerPadding,
      RackContainer.rackInformationContainerHeight -
        RackContainer.rackInformationContainerPadding,
      'Available',
      {
        ...textStyle,
        fixedWidth: this.width / 3,
      }
    ).setOrigin(0, 0.5);

    const rackUCount = new Phaser.GameObjects.Text(
      scene,
      RackContainer.rackInformationContainerPadding,
      RackContainer.rackInformationContainerHeight -
        RackContainer.rackInformationContainerPadding -
        20,
      `${this.availableRackUCount}U`,
      {
        ...textStyle,
        align: 'left',
        fixedWidth: this.width / 3,
      }
    ).setOrigin(0, 0.5);

    const rackUsageHeader = new Phaser.GameObjects.Text(
      scene,
      this.width / 3,
      RackContainer.rackInformationContainerHeight -
        RackContainer.rackInformationContainerPadding,
      'Rack Usage',
      {
        ...textStyle,
        align: 'left',
        fixedWidth: this.width / 3,
      }
    ).setOrigin(0, 0.5);

    const rackUsage = new Phaser.GameObjects.Text(
      scene,
      this.width / 3,
      RackContainer.rackInformationContainerHeight -
        RackContainer.rackInformationContainerPadding -
        20,
      `${this.rackUsage}W`,
      {
        ...textStyle,
        align: 'left',
        fixedWidth: this.width / 3,
      }
    ).setOrigin(0, 0.5);

    const rackTotalPowerHeader = new Phaser.GameObjects.Text(
      scene,
      (this.width / 3) * 2 - 10,
      RackContainer.rackInformationContainerHeight -
        RackContainer.rackInformationContainerPadding,
      'Total Rack Power',
      {
        ...textStyle,
        align: 'right',
        fixedWidth: this.width / 3,
      }
    ).setOrigin(0, 0.5);

    const rackTotalPower = new Phaser.GameObjects.Text(
      scene,
      (this.width / 3) * 2,
      RackContainer.rackInformationContainerHeight -
        RackContainer.rackInformationContainerPadding -
        20,
      `${this.rackTotalPower}W`,
      {
        ...textStyle,
        align: 'center',
        fixedWidth: this.width / 3,
      }
    ).setOrigin(0, 0.5);

    const rackPowerCountBackground = new Phaser.GameObjects.Graphics(
      this.scene
    );

    rackPowerCountBackground
      .fillStyle(0x71b249)
      .fillRoundedRect(
        (this.width / 3) * 2 + rackTotalPowerHeader.width / 4,
        RackContainer.rackInformationContainerHeight -
          RackContainer.rackInformationContainerPadding -
          30,
        rackTotalPower.width / 2,
        rackTotalPower.height + 4,
        10
      );

    this.add([
      this.rackInformationContainer,
      rackName,
      rackPowerCountBackground,
      rackTotalPower,
      rackTotalPowerHeader,
      rackUCount,
      rackUCountHeader,
      rackUsage,
      rackUsageHeader,
    ]);
  }
}
