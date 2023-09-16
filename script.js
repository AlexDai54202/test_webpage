function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
function checkAge(evt) {
    selectElement = document.querySelector('#year');
    output = selectElement.value;
    selectElement = document.querySelector('#year');
    var ele = document.getElementsByName('age');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            document.querySelector(".checkAge").textContent = output + ", " +  ele[i].value
    }
}

function addToList() {
    checklistitem = document.getElementById("itemname").value;
    
    var labelshell = document.createElement('div')
    labelshell.classList += "checklist-item"
    var node = document.createElement('input');
    node.type = "checkbox";
    node.id = checklistitem
    node.name = checklistitem
    node.value = checklistitem
    node.textContent = checklistitem


    var textlabel = document.createElement('label')
    textlabel.className = "strikethrough"
    textlabel.textContent = checklistitem

    

    labelshell.appendChild(node)
    labelshell.appendChild(textlabel)
    document.querySelector(".todoChecklist").appendChild(labelshell)

}

function close_notif() {
  var notif = document.getElementById("popupnotif");
  if (notif != null) {
    notif.remove();
  }
}

function notif() {
  var notiflist = document.getElementsByClassName("notification");
  console.log(notiflist)

  notiflist[0].classList.remove("hidden")

  var notifcontents = document.createElement("div")
  var labelcontent = document.createElement("label")
  var selfdestructbutton = document.createElement("img")
  selfdestructbutton.src = "Transparent_X.png"
  selfdestructbutton.alt = "Close"
  selfdestructbutton.width = 15;
  selfdestructbutton.length = 15;
  selfdestructbutton.align = "right"
  selfdestructbutton.onclick = function() {
    var notif = document.getElementById("popupnotif");
    if (notif != null) {
      notif.remove();
    }
  };

  labelcontent.textContent = "This is a notification."
  notifcontents.appendChild(labelcontent)
  notifcontents.appendChild(selfdestructbutton)
  notifcontents.id = "popupnotif"

  notiflist[0].appendChild(notifcontents)
}