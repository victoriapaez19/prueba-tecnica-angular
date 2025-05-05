import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'prueba-tecnica-paez';
}
