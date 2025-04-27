import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

bootstrapApplication(AppComponent, config)
  .catch((err) => console.error(err));
