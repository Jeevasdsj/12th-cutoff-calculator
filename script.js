document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cutoffForm');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const physics = parseFloat(document.getElementById('physics').value);
      const chemistry = parseFloat(document.getElementById('chemistry').value);
      const third = parseFloat(document.getElementById('third').value);
  
      if (
        isNaN(physics) || isNaN(chemistry) || isNaN(third) ||
        physics < 0 || chemistry < 0 || third < 0 ||
        physics > 100 || chemistry > 100 || third > 100
      ) {
        alert("❌ Please enter valid marks between 0 and 100.");
        return;
      }
  
      const cutoff = ((physics / 2) + (chemistry / 2) + (third )).toFixed(2);
  
      // Open new tab with result
      const resultPage = `result.html?cutoff=${cutoff}`;
      window.open(resultPage, '_blank');
    });
  });
  