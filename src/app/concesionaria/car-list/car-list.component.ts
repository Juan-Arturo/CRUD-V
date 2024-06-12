import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Car } from '../../interfaces/Car';
import { CarService } from '../../services/car-service.service';




@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent  {
  cars: Car[] = [];
  
  constructor(private carService: CarService){
  }

  ngOnInit(): void {
   this.getCars();
  }


  updateCar(car: Car): void {
    this.carService.setEditCar(car);
  }

  deleteCar(id: number): void {
    this.carService.deleteCar(id);
  }
  
  getCars(){
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }
}
