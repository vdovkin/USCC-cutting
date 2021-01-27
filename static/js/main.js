
// Show card with Results
function Results() {
  hideResults();
  document.getElementById('loading').classList.remove('d-none');
  setTimeout(showResults, 500);
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



