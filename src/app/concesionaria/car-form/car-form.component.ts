import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../interfaces/Car';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarService } from '../../services/car.service';


@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent {
  id: number | null = null;
  make: string = '';
  model: string = '';
  year: number | null = null;
  isEditMode: boolean = false;

  constructor(private carService: CarService){
  }
 

   ngOnInit(): void {
    this.carService.getEditCar().subscribe(car => {
      if (car) {
        this.id = car.id;
        this.make = car.make;
        this.model = car.model;
        this.year = car.year;
        this.isEditMode = true;
      } else {
        this.resetForm();
        this.isEditMode = false;
      }
    });
  }

  addCar(): void {
    if (this.make && this.model && this.year) {
      const newCar = { make: this.make, model: this.model, year: this.year };
      this.carService.addCar(newCar);
      this.resetForm();
    }
  }

  updateCar(): void {
    if (this.id !== null && this.make && this.model && this.year) {
      const updatedCar: Car = { id: this.id, make: this.make, model: this.model, year: this.year };
      this.carService.updateCar(updatedCar);
      this.carService.clearEditCar();
      this.resetForm();
    }
  }

  resetForm(): void {
    this.id = null;
    this.make = '';
    this.model = '';
    this.year = null;
  }

}
