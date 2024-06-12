import { Injectable } from '@angular/core';
import { Car } from '../interfaces/Car';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = [];
  private carsSubject: BehaviorSubject<Car[]> = new BehaviorSubject<Car[]>(this.cars);
  private currentId = 1;
  private editCarSubject: BehaviorSubject<Car | null> = new BehaviorSubject<Car | null>(null);

  constructor() { }

  // Create
  addCar(car: Omit<Car, 'id'>): void {
    const newCar: Car = { ...car, id: this.currentId++ };
    this.cars.push(newCar);
    this.carsSubject.next(this.cars);
  }

  // Read
  getCars(): Observable<Car[]> {
    return this.carsSubject.asObservable();
  }

  getCarById(id: number): Car | undefined {
    return this.cars.find(car => car.id === id);
  }

  // Update
  updateCar(updatedCar: Car): void {
    const index = this.cars.findIndex(car => car.id === updatedCar.id);
    if (index !== -1) {
      this.cars[index] = updatedCar;
      this.carsSubject.next(this.cars);
    }
  }

  // Delete
  deleteCar(id: number): void {
    this.cars = this.cars.filter(car => car.id !== id);
    this.carsSubject.next(this.cars);
  }

  

  // Edit
  setEditCar(car: Car): void {
    this.editCarSubject.next(car);
  }

  getEditCar(): Observable<Car | null> {
    return this.editCarSubject.asObservable();
  }

  clearEditCar(): void {
    this.editCarSubject.next(null);
  }

}
