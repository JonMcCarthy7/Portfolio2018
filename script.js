$(document).ready(function() {
  function myAge(year, month, date) {
    let d, n;
    d = new Date();
    n = d.getFullYear() - year;

    if (d.getMonth() <= month && d.getDate() < date) {
      return n--;
    } else {
      return n;
    }
  }

  document.getElementById("age").innerHTML = myAge(1993, 4, 19);
});
