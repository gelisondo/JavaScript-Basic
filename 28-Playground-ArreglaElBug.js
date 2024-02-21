const cars = [
    {
      color: 'red',
      brand: 'Kia',
    },
    {
      color: 'gray',
      brand: 'Chevrolet',
      licensePlate: 'AAA111',
    },
    {
      licensePlate: 'RGB255',
    },
  ];
  
  function solution(cars) {
    // Buscamos dentro del arrays de objetos, los objetos que contengan licencias
    // Creamos un nuveo array con los resultados.
    var autosEncontrados = cars.filter(function (car) {
       return car.licensePlate
    });
  
    return autosEncontrados;
  }


  solution(cars);