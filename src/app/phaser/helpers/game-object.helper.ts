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

export class GameObjectHelper {
    public static createZone({
        scene,
        x,
        y,
        height,
        width,
    }: {
        scene: Phaser.Scene;
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    }): Phaser.GameObjects.Zone {
        return new Phaser.GameObjects.Zone(
            scene,
            x ?? 0,
            y ?? 0,
            width,
            height,
        );
    }

    public static createRectangle({
        scene,
        x,
        y,
        height,
        width,
        fillColor,
    }: {
        scene: Phaser.Scene;
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        fillColor?: number;
    }): Phaser.GameObjects.Rectangle {
        return new Phaser.GameObjects.Rectangle(
            scene,
            x ?? 0,
            y ?? 0,
            width,
            height,
            fillColor,
        );
    }

    public static createTriangle({
        scene,
        x,
        y,
        x1,
        y1,
        x2,
        y2,
        x3,
        y3,
        fillColor,
        fillAlpha,
    }: {
        scene: Phaser.Scene;
        x?: number;
        y?: number;
        x1?: number;
        y1?: number;
        x2?: number;
        y2?: number;
        x3?: number;
        y3?: number;
        fillColor?: number;
        fillAlpha?: number;
    }): Phaser.GameObjects.Triangle {
        return new Phaser.GameObjects.Triangle(
            scene,
            x ?? 0,
            y ?? 0,
            x1 ?? 0,
            y1 ?? 0,
            x2 ?? 0,
            y2 ?? 0,
            x3 ?? 0,
            y3 ?? 0,
            fillColor,
            fillAlpha ?? 1,
        );
    }
}
