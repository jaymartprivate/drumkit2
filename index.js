const btn = document.querySelectorAll('.drum');
let audio;
for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () 
  {
    let btnInnerHtml = this.innerHTML;
    keyClick(btnInnerHtml);
    btnAnimate(btnInnerHtml);
  });
}

document.addEventListener('keydown', (event) => {
  keyPressed(event.key);
  btnAnimate(event.key);
});

let keyPressed = (key) => {
  key === 'w'?  audio = new Audio('sounds/crash.mp3').play():
    (key === 'a')?  audio = new Audio('sounds/kick-bass.mp3').play():
      (key === 's')?  audio = new Audio('sounds/snare.mp3').play():
        (key === 'd')?  audio = new Audio('sounds/tom-1.mp3').play():
          (key === 'j')?  audio = new Audio('sounds/tom-2.mp3').play():
            (key === 'k')?  audio = new Audio('sounds/tom-3.mp3').play():
              (key === 'l')?  audio = new Audio('sounds/tom-4.mp3').play(): null
  
}

function keyClick(btnInnerHtml) {
  btnInnerHtml === 'w' ? audio = new Audio('sounds/crash.mp3').play() :
    (btnInnerHtml === 'a') ? audio = new Audio('sounds/kick-bass.mp3').play() :
      (btnInnerHtml === 's') ? audio = new Audio('sounds/snare.mp3').play() :
        (btnInnerHtml === 'd') ? audio = new Audio('sounds/tom-1.mp3').play() :
          (btnInnerHtml === 'j') ? audio = new Audio('sounds/tom-2.mp3').play() :
            (btnInnerHtml === 'k') ? audio = new Audio('sounds/tom-3.mp3').play() :
              (btnInnerHtml === 'l') ? audio = new Audio('sounds/tom-4.mp3').play() : null;
}

let btnAnimate = (currentKey) => {
  let btnActive = document.querySelector('.' + currentKey);
  btnActive.classList.add('active');
  setTimeout( () => {
    btnActive.classList.remove('active');
  }, 100);
}