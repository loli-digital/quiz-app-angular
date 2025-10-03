import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router'; // <--- ¡Importación necesaria!
import { routes } from './app.routes'; // <--- ¡Importación necesaria!

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes) 
  ]
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('quiz-app');
}
