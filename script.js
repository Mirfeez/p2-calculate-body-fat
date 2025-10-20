// target each input

// take the value

function bmi(weight, height) {
  return weight / (height / 100) ** 2;
}

function submitMale() {
  let ageInputMale = document.getElementById("ageInputMale");
  let weightInputMale = document.getElementById("weightInputMale");
  let heightInputMale = document.getElementById("heightInputMale");
  let waistInputMale = document.getElementById("waistInputMale");
  let neckInputMale = document.getElementById("neckInputMale");
  let ageMale = ageInputMale.value;
  let weightMale = weightInputMale.value;
  let heightMale = heightInputMale.value;
  let waistMale = waistInputMale.value;
  let neckMale = neckInputMale.value;

  //..bodyfat %..
  // bmi method %
  let bmitest = bmi(weightMale, heightMale);
  let bmiTestMale = 1.2 * bmitest + (0.23 * ageMale - 16.2);
  let bmioutputMale = document.getElementById("bmiOutput");
  bmioutputMale.textContent = bmiTestMale.toFixed(2) + "%";

  // us method %
  let usTestMale =
    86.01 * Math.log10(waistMale / 2.54 - neckMale / 2.54) -
    70.041 * Math.log10(heightMale / 2.54) +
    36.76;
  let usoutputMale = document.getElementById("usOutput");
  usoutputMale.textContent = usTestMale.toFixed(2) + "%";

  //average %
  let average = document.getElementById("average");
  let plusMale = (bmiTestMale + usTestMale) / 2;
  average.textContent = plusMale.toFixed(2) + "%";

  //..body fat (kg)..
  //bmi method (kg)
  let bodyfatbmimale = (bmiTestMale / 100) * weightMale;
  let bmibodyfat = document.getElementById("fatweightbmi");
  bmibodyfat.textContent = bodyfatbmimale.toFixed(2) + " kg";

  //us method (kg)
  let bodyfatusmale = (usTestMale / 100) * weightMale;
  let usbodyfat = document.getElementById("fatweightus");
  usbodyfat.textContent = bodyfatusmale.toFixed(2) + " kg";

  //average (kg)
  let bodyfataveragemale = (usTestMale / 100) * weightMale;
  let averagebodyfat = document.getElementById("fatweightaverage");
  averagebodyfat.textContent = bodyfataveragemale.toFixed(2) + " kg";

  //..body actual weight ..
  //bmi method bodyweight
  let bawBmiMale = weightMale - bodyfatbmimale;
  let bawBmiMaletarget = document.getElementById("weightbmi");
  bawBmiMaletarget.textContent = bawBmiMale.toFixed(2) + " kg";
  //us method bodyweight
  let bawusMale = weightMale - bodyfatusmale;
  let bawusMaletarget = document.getElementById("weightus");
  bawusMaletarget.textContent = bawusMale.toFixed(2) + " kg";
  //average method bodyweight
  let bawaverageMale = weightMale - bodyfataveragemale;
  let bawaverageMaletarget = document.getElementById("weightaverage");
  bawaverageMaletarget.textContent = bawaverageMale.toFixed(2) + " kg";
}

function submitFemale() {
  let ageInputFemale = document.getElementById("ageInputFemale");
  let weightInputFemale = document.getElementById("weightInputFemale");
  let heightInputFemale = document.getElementById("heightInputFemale");
  let waistInputFemale = document.getElementById("waistInputFemale");
  let neckInputFemale = document.getElementById("neckInputFemale");
  let hipsInputFemale = document.getElementById("hipsInputFemale");
  let ageFemale = ageInputFemale.value;
  let weightFemale = weightInputFemale.value;
  let heightFemale = heightInputFemale.value;
  let waistFemale = waistInputFemale.value;
  let neckFemale = neckInputFemale.value;
  let hipsFemale = hipsInputFemale.value;

  //..bodyfat %..
  // bmi method %
  let bmitest = bmi(weightFemale, heightFemale);
  let bmiTestFemale = 1.2 * bmitest + (0.23 * ageFemale - 5.4);
  let bmioutputFemale = document.getElementById("bmiOutput");
  bmioutputFemale.textContent = bmiTestFemale.toFixed(2) + "%";

  // us method %
  let usTestFemale =
    163.205 *
      Math.log10(waistFemale / 2.54 + hipsFemale / 2.54 - neckFemale / 2.54) -
    70.041 * Math.log10(heightFemale / 2.54) +
    36.76;
  let usoutputFemale = document.getElementById("usOutput");
  usoutputFemale.textContent = usTestFemale.toFixed(2) + "%";

  //average %
  let average = document.getElementById("average");
  let plusFemale = bmiTestFemale + usTestFemale;
  average.textContent = (plusFemale / 2).toFixed(2) + "%";

  //..body fat (kg)..
  //bmi method (kg)
  let bodyfatbmiFemale = (bmiTestFemale / 100) * weightFemale;
  let bmibodyfat = document.getElementById("fatweightbmi");
  bmibodyfat.textContent = bodyfatbmiFemale.toFixed(2) + " kg";

  //us method (kg)
  let bodyfatusFemale = (usTestFemale / 100) * weightFemale;
  let usbodyfat = document.getElementById("fatweightus");
  usbodyfat.textContent = bodyfatusFemale.toFixed(2) + " kg";

  //average (kg)
  let bodyfataverageFemale = (usTestFemale / 100) * weightFemale;
  let averagebodyfat = document.getElementById("fatweightaverage");
  averagebodyfat.textContent = bodyfataverageFemale.toFixed(2) + " kg";

  //..body actual weight ..
  //bmi method bodyweight
  let bawBmiFemale = weightFemale - bodyfatbmiFemale;
  let bawBmiFemaletarget = document.getElementById("weightbmi");
  bawBmiFemaletarget.textContent = bawBmiFemale.toFixed(2) + " kg";
  //us method bodyweight
  let bawusFemale = weightFemale - bodyfatusFemale;
  let bawusFemaletarget = document.getElementById("weightus");
  bawusFemaletarget.textContent = bawusFemale.toFixed(2) + " kg";
  //average method bodyweight
  let bawaverageFemale = weightFemale - bodyfataverageFemale;
  let bawaverageFemaletarget = document.getElementById("weightaverage");
  bawaverageFemaletarget.textContent = bawaverageFemale.toFixed(2) + " kg";
}


