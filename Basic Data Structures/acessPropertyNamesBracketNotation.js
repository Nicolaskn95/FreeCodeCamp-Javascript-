let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
  let result = foods[scannedItem]
  return result
    // Only change code above this line
  }
  
  console.log(checkInventory("strawberries"));