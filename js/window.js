windoww = document.getElementById("window")
dragwindow = document.getElementById("windowTitle")
window.addEventListener('click', function(e){
        console.log(e.pageX + "," + e.pageY);
});

dragwindow.onmousedown = function(event) {

    let shiftX = event.clientX - windoww.getBoundingClientRect().left;
    let shiftY = event.clientY - windoww.getBoundingClientRect().top;
  
    windoww.style.position = 'absolute';
    windoww.style.zIndex = 1000;
    document.body.append(windoww);
    
    if(windoww.style.left != "528px")
    moveAt(event.pageX, event.pageY);
  
    // moves the windoww at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      windoww.style.left = pageX - shiftX + 'px';
      windoww.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the windoww on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the windoww, remove unneeded handlers
    windoww.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      windoww.onmouseup = null;
    };
  
  };
  
  windoww.ondragstart = function() {
    return false;
  };