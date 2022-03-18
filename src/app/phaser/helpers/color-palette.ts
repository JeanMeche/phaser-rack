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

import { hexStringToHexNumber } from './hex-string-to-hex-number';

export const ColorPalette = {
    White: '#ffffff',
    Red: '#ff0000',
    Blue: '#0000ff',
    silver: '#c0c0c0',
    Black: '#000000',
    aliceblue: '#eeeeee',

    orange: '#ffa500',
    greenFluo: '#00ff7f',
};

export const ColorPalette0x = mapValues(ColorPalette, (hexString) =>
    hexStringToHexNumber(hexString),
);

function mapValues<T extends Record<string, any>, V>(
    obj: T,
    valueMapper: (k: T[keyof T]) => V,
) {
    return Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k, valueMapper(v)]),
    ) as { [K in keyof T]: V };
}
