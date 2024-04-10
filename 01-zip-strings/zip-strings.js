function zipStrings(strA, strB) {
  let arrayA = [];
  let arrayB = [];
  let indexB = 0;
  // die Strings in Arrays konvertieren
  arrayA = Array.from(strA);
  arrayB = Array.from(strB);
  // in ArrayA nach dem ersten und dann nach jedem zweiten Element ein Element aus ArrayB einfügen
  // und zwar da immer das nächste
  for (let i = 1; i < arrayA.length; i += 2) {
    arrayA.splice(i, 0, arrayB[indexB]);
    // und zwar da immer das nächste
    indexB++;
  }
  // wenn ArrayB länger als ArrayA ist, den Rest von ArrayB einfügen
  if (indexB < arrayB.length) {
    arrayA.push(...arrayB.slice(indexB));
  }
  // die undefined Elemente herausfiltern
  const results = arrayA.filter((element) => {
    return element !== undefined;
  });
  // nun die characters aus dem Array wieder zu einem String zusammenführen
  return results.join("");
}

zipStrings("hello", "Anny");
