 // nav mobile
 function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header-mobile") {
      x.className += " responsive";
    } else {
      x.className = "header-mobile";
    }
  }

// // read more
// function rdm() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("rdmBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more"; 
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less"; 
//     moreText.style.display = "inline";
//   }
// }
