import { home, home2 } from './home.js'
import $ from "jquery";


document.addEventListener('click', function() {
  import(/* webpackChunkName: "async" */ './async.js').then(data => {
    console.log('loaded');
  })
})
console.log($);

home()

// window.onbeforeunload = function () {
//   var confirmationMessage = "\o/";
//   e.returnValue = confirmationMessage;
//   return confirmationMessage;
// }