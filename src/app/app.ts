import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, SearchBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
}
