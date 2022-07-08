var controls = document.querySelector('.controls');
var item = document.querySelector('.item');
var gridColumnSelect = document.querySelectorAll('.grid-column');
var gridRowSelect = document.querySelectorAll('.grid-row');
var shorthandDiv = document.querySelector('.shorthand'); 

  controls.addEventListener('change', function(evt) {
    
    var elem = evt.target;
    var prop = elem.id;
    var val = elem.options[elem.selectedIndex].value;
    item.style[prop] = val;
    
   
      var shorthandStr = "<p>grid-column: ";
      shorthandStr += gridColumnSelect[0].options[gridColumnSelect[0].selectedIndex].value;
      shorthandStr += " / ";
      shorthandStr += gridColumnSelect[1].options[gridColumnSelect[1].selectedIndex].value;
      shorthandStr += "</p><p>";
      shorthandStr += "grid-row: ";
      shorthandStr += gridRowSelect[0].options[gridRowSelect[0].selectedIndex].value;
      shorthandStr += " / ";
      shorthandStr += gridRowSelect[1].options[gridRowSelect[1].selectedIndex].value;
      shorthandStr += "</p>";
    console.log(shorthandStr)
      shorthandDiv.innerHTML = "<p>.item{</p>"
      shorthandDiv.innerHTML +=  shorthandStr; 
      shorthandDiv.innerHTML += "<p>}</p>";  
  }, false);