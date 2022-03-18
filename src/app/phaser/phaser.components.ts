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

import { Component, ElementRef } from '@angular/core';
import { PhaserGame } from './phaser.game';

@Component({
  template: '',
  selector: 'app-phaser-rack',
  styles: [' :host { flex: 1; min-height: 0;}'],
})
export class PhaserComponent {
  private game: PhaserGame | null = null;

  public constructor(private element: ElementRef) {}

  public ngOnInit(): void {
    const el = this.element.nativeElement;
    if (el === undefined) {
      return;
    }
    const rect = el.getBoundingClientRect();
    this.game = new PhaserGame(el, rect.width, rect.height);
  }

  public ngOnDestroy(): void {
    this.game?.destroy(true);
  }
}
