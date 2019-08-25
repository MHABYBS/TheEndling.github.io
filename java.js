ProgressCountdown(5, 'pageBeginCountdown', 'pageBeginCountdownText').then(value => alert(`Page has started: ${value}.`));

function ProgressCountdown(timeleft, bar, text) {
  return new Promise((resolve, reject) => {
    var countdownTimer = setInterval(() => {
      timeleft--;

      document.getElementById(bar).value = timeleft;
      document.getElementById(text).textContent = timeleft;

      if (timeleft <= 0) {
        (clearInterval(countdownTimer));
        document.getElementById("p1").style.visibility="hidden";  
      }
    }, 1000);
  });
}
function showIt() {  
    document.getElementById("p2").style.visibility = "visible";  
  }  
  setTimeout("showIt()", 5000); // after 2 sec  


  function hideIt() {  
    document.getElementById("p1").style.visibility="hidden";  
  }  
  setTimeout("HideIt()", 5000); // after 2 sec  
  setTimeout(function(){
    window.location.href = 'start.html';
 }, 7000);
