import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarListComponent } from './concesionaria/car-list/car-list.component';
import { CarFormComponent } from './concesionaria/car-form/car-form.component';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CarListComponent,CarFormComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRUD';


  constructor() {
  
  }
  
}
