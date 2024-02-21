import { home, home2 } from './home.js'

document.addEventListener('click', function() {
  import('./async.js').then(data => {
    console.log('loaded');
  })
})

home()

// window.onbeforeunload = function () {
//   var confirmationMessage = "\o/";
//   e.returnValue = confirmationMessage;
//   return confirmationMessage;
// }