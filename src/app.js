import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let whoIndex = Math.floor(Math.random() * who.length);

  let action = ['ate', 'peed', 'crushed', 'broke'];
  let actionIndex = Math.floor(Math.random() * action.length);

  let what = ['my homework', 'my phone', 'the car'];
  let whatIndex = Math.floor(Math.random() * what.length);

  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  let whenIndex =  Math.floor(Math.random() * when.length); 
  
  let excuse = who[whoIndex] + ' ' + action[actionIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex]

  const paragraph = document.querySelector(".excuse");
  paragraph.textContent = excuse;
  console.log(who + action + what + when);
  
  return (excuse)
}
