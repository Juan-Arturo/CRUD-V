import { TestBed } from '@angular/core/testing';
import { CarService } from './car.service';

describe('CarService', () => {
  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a car', () => {
    service.addCar({ make: 'Toyota', model: 'Corolla', year: 2020 });
    service.getCars().subscribe(cars => {
      expect(cars.length).toBe(1);
      expect(cars[0].make).toBe('Toyota');
    });
  });

  it('should update a car', () => {
    service.addCar({ make: 'Toyota', model: 'Corolla', year: 2020 });
    service.updateCar({ id: 1, make: 'Honda', model: 'Civic', year: 2021 });
    service.getCars().subscribe(cars => {
      expect(cars[0].make).toBe('Honda');
    });
  });

  it('should delete a car', () => {
    service.addCar({ make: 'Toyota', model: 'Corolla', year: 2020 });
    service.deleteCar(1);
    service.getCars().subscribe(cars => {
      expect(cars.length).toBe(0);
    });
  });

  it('should set and get edit car', () => {
    const car = { id: 1, make: 'Toyota', model: 'Corolla', year: 2020 };
    service.setEditCar(car);
    service.getEditCar().subscribe(editCar => {
      expect(editCar).toEqual(car);
    });
  });
});
