// Punto de entrada de la aplicación
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Inicializar la aplicación con la configuración
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));