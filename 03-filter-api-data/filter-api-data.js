function filterApiData(apiData, mandatoryKeys) {
  /* declare a variable to save a new array that contains
  only those elements filtered from the array apiData
   */
  const filteredData = apiData.filter(function (item) {
    /* use Object.keys() to receive an array of the keys 
    of each item of apiData and store it in const keys*/
    const keys = Object.keys(item);
    console.log(keys);
    // Iterate over mandatoryKeys
    for (let i = 0; i < mandatoryKeys.length; i++) {
      // and check if they are included in keys
      if (!keys.includes(mandatoryKeys[i])) {
        /* if the mandatoryKey is missing, the element
        is not included in filteredData */
        return false;
      }
    }
    // if all mandatoryKeys are included,
    return true;
  });

  if (filteredData.length > 0) {
    return filteredData;
  } else {
    return "No match found";
  }
}

// Test
console.log(
  filterApiData(
    [
      { id: 1, description: "", price: 0, title: "" },
      { id: 3, price: 0, title: "" },
    ],
    ["id", "price"]
  )
);
/*
function filterApiData(apiData, mandatoryKeys) {
  let result = [];
  const filteredData = apiData.filter((item, index) => {
    return `${index + 1}. ${item.id} ${item.price} ${item.title}`;
  });
  // for loop with mandatoryKeys.length as i <
  for (let i = 0; i < mandatoryKeys.length; i++) {
    if (apiData[0].includes(mandatoryKeys[i])) {
      result += apiData[[mandatoryKeys[i]]];
      console.log(result);
    } else return null;
  }
  // if array includes mandatoryKeys[0], return result

  // if array includes mandatoryKeys[1], return result etc

  console.log(filterApiData());
}
*/

/* function filterApiData(apiData, mandatoryKeys) {
  return apiData.filter(function (obj) {
    return mandatoryKeys.every(function (key) {
      return obj.hasOwnProperty(key);
    });
  });
}
*/
