const SHEETS = {
  4: [1500],
  5: [1500],
  6: [1500],
  8: [1500, 2000],
  10: [1500, 2000],
  12: [1500, 2000],
  14: [1500, 2000],
  16: [1500, 2000],
  18: [2000],
  20: [1500, 2000],
  25: [1500, 2000],
  30: [1500, 2000],
  40: [2000],
}


// Show thickness
function showThickness(){
  // let thicknessSelect = document.getElementById('thickness');
  let thicknessSelect;
  for (t in SHEETS){
    thicknessSelect += `<option value='${t}'>${t}</option>`;
  }
  document.getElementById('thickness').innerHTML = thicknessSelect;

}

// Show available Width
function availableWidth(){
  let sheetWidthArray = SHEETS[document.getElementById('thickness').value];
  let sheetWidth;
  for (w of sheetWidthArray){
    sheetWidth += `<option value='${w}'>${w}</option>`;
  }
  document.getElementById('sheetWidth').innerHTML = sheetWidth;
}

// Show card with Results
function Results() {
  hideResults();
  document.getElementById('loading').classList.remove('d-none');
  let result = CalculateCutting();
  result === true ? setTimeout(showResults, 500) : showError();
}

function showError(){
  document.getElementById('loading').classList.add('d-none');
  alert('Не коректні данні. Спробуйте ще раз');
}

function showResults(){
  document.getElementById('loading').classList.add('d-none');
  const resultsUI = document.getElementById("results");
  if (resultsUI.classList.contains("d-none")) {
    resultsUI.classList.remove("d-none");
  }
}


// hide card with Results
function hideResults(){
    const resultsUI = document.getElementById('results');
    if (!resultsUI.classList.contains('d-none')){
        resultsUI.classList.add('d-none');
    }
}

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function numberWithComa(x) {
  return x.toString().replace('.', ",");
}


function CalculateCutting(){
  let width = parseInt(document.getElementById("width").value);
  let thickness = parseInt(document.getElementById("thickness").value);
  let sheetWidth = parseInt(document.getElementById("sheetWidth").value);

  if (!(width && thickness)){
    return false;
  } else if (width < 5 || width > 1995) {
    return false;
  } else if (thickness < 2 || thickness > 40) {
    return false;
  } else {

    let widthNew = sheetWidth - 5;
    let cut = 2;

    if (thickness > 12) {
      cut = 3;
    }

    let n = Math.floor(widthNew / (width + cut));

    let delta = widthNew - n * width - (n - 1) * cut;

  document.getElementById("cutNumber").innerText = numberWithSpaces(
    n
  );
  document.getElementById("deltaMM").innerText = numberWithSpaces(
    delta
  );
  document.getElementById("deltaRate").innerText = numberWithComa(
    Math.round(delta/(sheetWidth - 5)*100 * 10 + Number.EPSILON ) / 10
  );


    return true;
  }
}


showThickness();
availableWidth();