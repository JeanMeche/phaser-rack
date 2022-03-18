import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.fonts.load('1em "Roboto"'); // load to be ready for Phaser to use the font

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
