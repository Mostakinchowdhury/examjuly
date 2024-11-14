let erase = document.getElementById('btnerase');
let squar = document.getElementById('btnsquar');
let per = document.getElementById('btnper');
let display = document.getElementById('display');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btnziro = document.getElementById('btnziro');
let btnpoin = document.getElementById('btnpoin');
let btnvag = document.getElementById('btnvag');
let btnintu = document.getElementById('btnintu');
let btnjog = document.getElementById('btnjog');
let btnbiyog = document.getElementById('btnbiyog');
let btnequal = document.getElementById('btnequal');
let btncut = document.getElementById('btncut');
let mysound = document.getElementById('mysound');
let mysound2 = document.getElementById('mysound2');

erase.addEventListener('click', function () {
  display.value = display.value.slice(0, -1);
});
squar.addEventListener('click', function () {
  display.value = Math.pow(display.value, 2);
});
// document.addEventListener('keydown', function (event) {
//   switch (event.key) {
//     case '7':
//       btn7.click();

//       break;
//     case '8':
//       btn8.click();
//       break;
//     case '9':
//       btn9.click();
//       break;
//     case '4':
//       btn4.click();
//       break;
//     case '5':
//       btn5.click();
//       break;
//     case '6':
//       btn6.click();
//       break;
//     case '1':
//       btn1.click();
//       break;
//     case '2':
//       btn2.click();
//       break;
//     case '3':
//       btn3.click();
//       break;
//     case '0':
//       btnziro.click();
//       break;
//     case '.':
//       btnpoin.click();
//       break;
//     case '*':
//       btnintu.click();
//       break;
//     case '+':
//       btnjog.click();
//       break;
//     case '-':
//       btnbiyog.click();
//       break;
//     case '/':
//       btnvag.click();
//       break;
//     case 'Backspace':
//       erase.click();
//       break;
//     case 'Enter':
//       btnequal.click();
//       break;
//     case 'Delete':
//       btncut.click();
//       break;
//     default:
//       break;
//   }
// });
document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case '7':
      // Emulate active style for button 7
      btn7.style.backgroundColor = 'var(--otherbg)';
      btn7.click();
      mysound.play();
      break;
    case '8':
      mysound.play();
      // Emulate active style for button 8
      btn8.style.backgroundColor = 'var(--otherbg)';
      btn8.click();
      break;
    case '9':
      mysound.play();
      // Emulate active style for button 9
      btn9.style.backgroundColor = 'var(--otherbg)';
      btn9.click();
      break;
    case '4':
      mysound.play();
      btn4.style.backgroundColor = 'var(--otherbg)';
      btn4.click();
      break;
    case '5':
      mysound.play();
      btn5.style.backgroundColor = 'var(--otherbg)';
      btn5.click();
      break;
    case '6':
      mysound.play();
      btn6.style.backgroundColor = 'var(--otherbg)';
      btn6.click();
      break;
    case '1':
      mysound.play();
      btn1.style.backgroundColor = 'var(--otherbg)';
      btn1.click();
      break;
    case '2':
      mysound.play();
      btn2.style.backgroundColor = 'var(--otherbg)';
      btn2.click();
      break;
    case '3':
      mysound.play();
      btn3.style.backgroundColor = 'var(--otherbg)';
      btn3.click();
      break;
    case '0':
      mysound.play();
      btnziro.style.backgroundColor = 'var(--otherbg)';
      btnziro.click();
      break;
    case '.':
      mysound.play();
      btnpoin.style.backgroundColor = 'var(--otherbg)';
      btnpoin.click();
      break;
    case '*':
      mysound.play();
      btnintu.style.backgroundColor = 'var(--otherbg)';
      btnintu.click();
      break;
    case '+':
      mysound.play();
      btnjog.style.backgroundColor = 'var(--otherbg)';
      btnjog.click();
      break;
    case '-':
      mysound.play();
      btnbiyog.style.backgroundColor = 'var(--otherbg)';
      btnbiyog.click();
      break;
    case '/':
      mysound.play();
      btnvag.style.backgroundColor = 'var(--otherbg)';
      btnvag.click();
      break;
    case 'Backspace':
      mysound.play();
      erase.style.backgroundColor = 'var(--otherbg)';
      erase.click();
      break;
    case 'Enter':
      mysound.play();
      btnequal.style.backgroundColor = 'var(--otherbg)';
      btnequal.click();
      break;
    case 'Delete':
      btncut.style.backgroundColor = 'var(--otherbg)';
      btncut.click();
      mysound.play();
      break;
    default:
      mysound2.play();
      break;
  }
});

document.addEventListener('keyup', function (event) {
  switch (event.key) {
    case '7':
      btn7.style.backgroundColor = 'var(--btncolor)';
      break;
    case '8':
      btn8.style.backgroundColor = 'var(--btncolor)';
      break;
    case '9':
      btn9.style.backgroundColor = 'var(--btncolor)';
      break;
    case '4':
      btn4.style.backgroundColor = 'var(--btncolor)';
      break;
    case '5':
      btn5.style.backgroundColor = 'var(--btncolor)';
      break;
    case '6':
      btn6.style.backgroundColor = 'var(--btncolor)';
      break;
    case '1':
      btn1.style.backgroundColor = 'var(--btncolor)';
      break;
    case '2':
      btn2.style.backgroundColor = 'var(--btncolor)';
      break;
    case '3':
      btn3.style.backgroundColor = 'var(--btncolor)';
      break;
    case '0':
      btnziro.style.backgroundColor = 'var(--btncolor)';
      break;
    case '.':
      btnpoin.style.backgroundColor = 'var(--btncolor)';
      break;
    case '*':
      btnintu.style.backgroundColor = 'var(--btncolor)';
      break;
    case '+':
      btnjog.style.backgroundColor = 'var(--btncolor)';
      break;
    case '-':
      btnbiyog.style.backgroundColor = 'var(--btncolor)';
      break;
    case '/':
      btnvag.style.backgroundColor = 'var(--btncolor)';
      break;
    case 'Backspace':
      erase.style.backgroundColor = 'var(--btncolor)';
      break;
    case 'Enter':
      btnequal.style.backgroundColor = 'var(--btncolor)';
      break;
    case 'Delete':
      btncut.style.backgroundColor = 'var(--btncolor)';
      break;
    default:
      break;
  }
});
