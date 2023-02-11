
//  Sidebar section
const sidebar = document.querySelector('.sidebar');
const toggleMode = document.querySelector('.toggle-btn');


toggleMode.addEventListener('click', function() {
 sidebar.classList.toggle('hide');
 
});

//typing text //

const textDisplay = document.getElementById('typing-text');
const phrases = [" I Am  A  Web developer", 'Web Designer', 'UI/UX Designer'];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false

function loop() {
  textDisplay.innerHTML = currentPhrase.join('');
  if(i < phrases.length) {
 
    if (!isDeleting && j < phrases[i].length) {
     currentPhrase.push(phrases[i][j])
      j++
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
    }
    

    if (j === phrases[i].length) {
       isDeleting = true
    }
    
    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i == phrases.length) {
        i = 0;
      }
    }

  }
  setTimeout(loop, 200)
}

loop()


////light mode //

const modeBtn = document.querySelector('.dark');

function changeBtn() {
  // let iconchange = modeBtn.innerHTML = `<svg class="header_icon">
  // <use xlink:href="IMG/sprite.svg.svg#icon-moon"><use>
  // <svg>`;
  
  if(!modeBtn.classList.contains("light")) {
    modeBtn.classList.remove("light")
  }else {
    modeBtn.classList.add("light")
  }


  let mainBody = document.querySelector('.main');
  const infoBody = document.querySelector('.info-container');
  let avater = document.querySelector('.avater');
  let header = document.querySelector('.header');


  mainBody.classList.toggle('main-lightmode')
  infoBody.classList.toggle('info-container-mode')
  avater.classList.toggle('avater-mode')
  header.classList.toggle('header-mode')
}


function lightMode() {
  let elem = document.body;
  elem.classList.toggle('body-mode')
  changeBtn();
}

modeBtn.addEventListener('click',lightMode);