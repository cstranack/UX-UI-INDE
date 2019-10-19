

const bear = document.getElementById('bear'); 
const happyBear = document.getElementById('happyBear');
// const bearContainer = document.getElementsByClassName("bearContainer");


bear.addEventListener("mouseenter", (e) => {
  console.log("hover");
  bear.style.visibility = 'hidden'; 
})

bear.addEventListener("mouseleave", (e) => {
  console.log("unhover");
  bear.style.visibility = 'visible'; 
})



//Tabs for child learn page


function openSection(evt, tabName) {
    console.log("working");
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
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// animated bounce on buttons
const btn =  document.querySelector('.btn');
const btn1 =  document.querySelector('.btn1');

  btn.addEventListener("mouseenter", (e) => {
  btn.classList.add('animated', 'bounce')
})
btn.addEventListener("mouseleave", (e) => {
  btn.classList.remove('animated', 'bounce')
})

  btn1.addEventListener("mouseenter", (e) => {
  btn1.classList.add('animated', 'bounce')
})
btn1.addEventListener("mouseleave", (e) => {
  btn1.classList.remove('animated', 'bounce')
})