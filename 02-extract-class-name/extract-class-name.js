function extractClassName(sessionTitle) {
  let result = "";
  let year = "";
  // set regExpression for a 4digit number starting with 202 and ending with 0-4
  const regex = /(202[0-4])/;
  // search for a match with the regEx in sessionTitle
  year = sessionTitle.match(regex);
  // year gives back an array which contains the string of a matching year on index[0]
  console.log(year);
  // declare variable with an object containing month names and according numbers in strings
  const month = {
    Januar: "01",
    Februar: "02",
    März: "03",
    Maerz: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
  };
  // check if sessionTitle includes "Live-Session Class" else return null
  if (sessionTitle.includes("Live-Session Class")) {
    result = "";
  } else return null;
  // check if sessionTitle includes a year between 2020 and 2024 (see lines 5-8)
  if (sessionTitle.includes(year[0])) {
    result = "";
  } else return null;
  // declare a variable that states if one of the month names is found
  let monthFound = false;
  // use for in loop to check if one of the month names is included
  for (const key in month) {
    if (sessionTitle.includes(key)) {
      // if so, concatenate the first item of the array (the year), a hyphen and the value of the month
      result = year[0] + "-" + month[key];
      // and set monthFound to true
      monthFound = true;
      // as soon a month name has been found, stop the for in loop
      break;
    }
  }
  // if monthFound has not turned true within the loop, return null
  if (!monthFound) {
    return null;
  }
  // if the string includes the asked three parts, return the result
  return result;
}

console.log(extractClassName("Live-Session Class 2022 Maerz"));
