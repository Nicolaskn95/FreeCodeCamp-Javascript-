function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  
  let myHouse = new House();
  
  myHouse.numBedrooms = 5;
  
  myHouse instanceof House;//verificar√° e retornar√° true se foi instanciado o myHouse