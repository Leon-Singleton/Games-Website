// Code produced by Leon Singleton
//The following fucntion uses the get element by id to access the properties of the div block associated with the id "menu-dropdown when the burger menu is clicked"
//Then the "showmenu" class is toggled so that the contents of the navigational burger menu are displayed to the user
function menuFunction() {
  document.getElementById("menu-dropdown").classList.toggle("showmenu");
}

// This click event handles the any case where the user clicks outside of the burger menu once it has been opened
window.onclick = function(event) {
//handles any case where the location clicked by the user is not a part of the burger menu button or its content
  if (!event.target.matches('.menubtn')) {
    var dropdownRows = document.getElementsByClassName("menu-content");
    var i;
//this for loop creates the space associaed with the burger menu so that when any other space is clicked the burger menu will minimize by removing the class associated with the burgermenu which displays its content
    for (i = 0; i < dropdownRows.length; i++) {
      var dropdownMenu = dropdownRows[i];
      if (dropdownMenu.classList.contains('showmenu')) {
        dropdownMenu.classList.remove('showmenu');
      }
    }
  }
}
