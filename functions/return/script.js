function CentimeterToMeter(cm) {
  var meter = cm / 100;
  return meter;
}

CentimeterToMeter(100) //Når vi udløser denne funktion returnere den 1

//////////////////////////////////////////////////////////////////////////////

function CentimeterToMeter(cm) {
  var meter = cm / 100;
}

CentimeterToMeter(100) //Når vi udløser denne funktion sker der ingenting

//////////////////////////////////////////////////////////////////////////////

function CentimeterToMeter(cm) {
  var meter = cm / 100;
  console.log(meter)
}

CentimeterToMeter(100)
