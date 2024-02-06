var mes = parseInt(prompt("Ingresa tu mes de nacimiento en números"));
var dia = parseInt(prompt("Ingresa tu día de nacimiento en números"));

if (mes === 1) {
  if (dia <= 20) {
    alert("Eres Capricornio");
  } else {
    alert("Eres Acuario");
  }
} else if (mes === 2) {
  if (dia <= 19) {
    alert("Eres Acuario");
  } else {
    alert("Eres Piscis");
  }
} else if (mes === 3) {
  if (dia <= 20) {
    alert("Eres Piscis");
  } else {
    alert("Eres Aries");
  }
} else if (mes === 4) {
  if (dia <= 20) {
    alert("Eres Aries");
  } else {
    alert("Eres Tauro");
  }
} else if (mes === 5) {
  if (dia <= 20) {
    alert("Eres Tauro");
  } else {
    alert("Eres Géminis");
  }
} else if (mes === 6) {
  if (dia <= 21) {
    alert("Eres Géminis");
  } else {
    alert("Eres Cáncer");
  }
} else if (mes === 7) {
  if (dia <= 22) {
    alert("Eres Cáncer");
  } else {
    alert("Eres Leo");
  }
} else if (mes === 8) {
  if (dia <= 22) {
    alert("Eres Leo");
  } else {
    alert("Eres Virgo");
  }
} else if (mes === 9) {
  if (dia <= 22) {
    alert("Eres Virgo");
  } else {
    alert("Eres Libra");
  }
} else if (mes === 10) {
  if (dia <= 22) {
    alert("Eres Libra");
  } else {
    alert("Eres Escorpio");
  }
} else if (mes === 11) {
  if (dia <= 21) {
    alert("Eres Escorpio");
  } else {
    alert("Eres Sagitario");
  }
} else if (mes === 12) {
  if (dia <= 21) {
    alert("Eres Sagitario");
  } else {
    alert("Eres Capricornio");
  }
}