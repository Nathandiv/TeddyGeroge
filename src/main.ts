import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();


AOS.init({
  duration: 800,
  once: true
});

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));