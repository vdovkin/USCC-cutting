const SHEET_1 = 2000;
const SHEET_2 = 1500;


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


function CalculateCutting(){
  const width = parseInt(document.getElementById("width").value);
  const thickness = parseInt(document.getElementById("thickness").value);
  if (!(width && thickness)){
    return false;
  } else if (width < 5 || width > 1995) {
    return false;
  } else if (thickness < 2 || thickness > 40) {
    return false;
  } else {

    let widthNew1 = SHEET_1 - 5;
    let widthNew2 = SHEET_2 - 5;
    let cut = 0;

    if (thickness <= 6) {
      cut = 1;
    } else if (thickness <= 12 ){
      cut = 2;
    } else if (thickness <= 20 ){
      cut = 3;
    } else {
      cut = 4;
    }

    let n1 = Math.floor(widthNew1 / width);
    let n2 = Math.floor(widthNew2 / width);

    let delta1 = widthNew1 - n1 * width;
    let delta2 = widthNew2 - n2 * width;

    let n;
    let delta;
    let sheetWidth;

    if (delta1 < delta2){
      n = n1;
      delta = delta1;
      sheetWidth = SHEET_1;
    } else {
      n = n2;
      delta = delta2;
      sheetWidth = SHEET_2;
    }


  document.getElementById("sheetWidth").innerText = numberWithSpaces(
    sheetWidth
  );
  document.getElementById("cutNumber").innerText = numberWithSpaces(
    n
  );
  document.getElementById("deltaMM").innerText = numberWithSpaces(
    delta
  );
  document.getElementById("deltaRate").innerText = numberWithSpaces(
    Math.round(delta/(sheetWidth - 5)*100)
  );


    return true;
  }
}


