let car = {
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
};

function solution(car) {
    // Tu código aquí 👈
    if (car.licensePlate === null || car.licensePlate === undefined)
    {
      car.drivingLicense = false;
    } else {
      car.drivingLicense = true;
    }
  
    return car;
  }

// llamamos la función
solution(car);
