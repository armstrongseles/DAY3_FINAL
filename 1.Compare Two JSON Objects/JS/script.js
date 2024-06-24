function areObjectsEqual(obj1, obj2) {
    // Get the keys and values of the objects
    const obj1Entries = Object.entries(obj1);
    const obj2Entries = Object.entries(obj2);
    
    // Sort the entries by keys
    obj1Entries.sort();
    obj2Entries.sort();
    
    // Convert sorted entries back to objects
    const sortedObj1 = JSON.stringify(obj1Entries);
    const sortedObj2 = JSON.stringify(obj2Entries);
    
    // Compare the sorted, stringified objects
    return sortedObj1 === sortedObj2;
  }
  
  let obj1 = {name: "Person 1", age: 5};
  let obj2 = {age: 5, name: "Person 1"};
  
  console.log(areObjectsEqual(obj1, obj2));