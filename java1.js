alert("You are smiling, RIGHT?");
function showIt() {  
    document.getElementById("hide").style.visibility = "visible";  
  }  
  setTimeout("showIt()", 5000); 

  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (!isChrome) {
      $('#iframeAudio').remove()
    }
