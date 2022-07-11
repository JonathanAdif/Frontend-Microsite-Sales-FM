function hubKami(evt, buttonType) {
    var i, tabcontent, buttonhk;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    buttonhk = document.getElementsByClassName("button-hk");
    for (i = 0; i < buttonhk.length; i++) {
        buttonhk[i].className = buttonhk[i].className.replace(" active", "");
    }
    document.getElementById(buttonType).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("hk-bt-1").click();


  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

 // nav mobile
 function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "header-mobile") {
    x.className += " responsive";
  } else {
    x.className = "header-mobile";
  }
}