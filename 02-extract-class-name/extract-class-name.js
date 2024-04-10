function extractClassName(sessionTitle) {
  let result = "";
  let year = "";
  let regexYear = /\b(202[0-4])\b/g;
  // search for number with 4 digits starting with 202 in sessionTitle
  let foundYear = sessionTitle.match(regexYear);
  console.log(foundYear);
  // replace
  let yearShort = foundYear.replace(foundYear, foundYear[3 + 4]);
  console.log(yearShort);
  let month = "";
  let shortMonth = "";
  // given is a string
  if (
    sessionTitle.includes(
      "Class" &&
        ("2020" || "2021" || "2022" || "2023" || "2024") &&
        ("Januar" ||
          "Februar" ||
          "März" ||
          "Maerz" ||
          "April" ||
          "Mai" ||
          "Juni" ||
          "Juli" ||
          "August" ||
          "September" ||
          "Oktober" ||
          "November" ||
          "Dezember")
    )
  ) {
    result = "Class" + yearShort + "-" + monthShort;
  }
  // check if string contains: "Class", a year "yyyy", a german month name with or without umlauts
  // else return null
  // probably needs to be converted into arrays?
  // and joined to a new string with array.join("-")
  // result should be a string containing yyyy-mm
  return result;
}
extractClassName(
  "In der Class Teilzeit Maerz 2023 ist die LiveSession verschoben."
);
// Questions for setting up the function:
// - write down the steps you need
// - work from top to bottom and from bottom to top until as far too the middle as possible

// - which datatype is given?
// - which datatype is needed to come out of the function?

// - what shall be done with the given data?
// - which methods do I know to reach this?
// - do I need to convert the given data into another datatype?
// - which methods are there for the type conversion?
// - do I need to convert the datatype again?
// - which methods are there for the type conversion?

// - which parameters are given?
// - what do the data look like, that are passed into the function?
// - which (speaking) names would make sense for variables that need to be declared

// - are there any checks necessary before writing the actual function?
// - are there potential pitfalls for instance destructive methods?

// - while writing code, adaption of the steps might be necessary
// - writing down the steps might be helpful for understanding the code later

// Leitfaden, um die verschiedenen Schritte der Funktion zu erstellen:
// - am besten möglichst kleinschrittig aufschreiben
// - von vorne und hinten so weit wie möglich zur Mitte hin die Arbeitsschritte erarbeiten

// - was für ein Datentyp ist gegeben?
// - was für ein Datentyp soll am Ende herauskommen?

// - Was soll damit getan werden?
// - welche Methoden kommen dafür (auf den ersten Blick) in Frage?
// - brauche ich für die benötigten Methoden einen anderen Datentyp?
// - Mit welchen Methoden kann ich den Datentyp umwandeln?
// - Und brauche ich am Ende wieder einen anderen Datentyp?
// - Mit welchen Methoden kann ich den Datentyp umwandeln?

// - welche Parameter sind gegeben?
// - wie sehen die Daten aus, die in die Funktion hereingegeben werden?
// - welche Variablen könnten sinnvoll sein zu definieren (sprechende Variablennamen)?

// - sind irgendwelche Überprüfungen vorab nötig (z.B. erlaubt sind nur ganze Zahlen)?

// - welche Fallstricke sind evtl. zu bedenken? Z.B. destructive methods o.ä.

// - im Verlauf des Code-Schreibens können weitere Schritte hinzukommen -> dokumentieren
