

//dad joke API
const paragraph = document.querySelector("#dadjoke");
const button = document.querySelector("#joke");
async function fetchJoke() {
  const response = await fetch("http://icanhazdadjoke.com", {
    headers: {Accept: "application/json",},
  }); return response.json();}
async function handleClick() {
  const { joke } = await fetchJoke();
  console.log(joke);
  document.querySelector("#dadjoke").innerText = joke;
}
if(typeof joke !=="undefined"){
  joke.addEventListener("click", handleClick);}

//live clock on index page
function myClock() {         
  setTimeout(function() {   
    const d = new Date();
    const n = d.toLocaleTimeString();
  
    let clock =   document.getElementById("clock");
if (clock !== null){ clock.innerHTML = n;
}
    myClock();             
  }, 1000)
}
myClock();  



/*
 //form vaildate
 const firstName = document.getElementById('fname');
 const form = document.getElementById('form');

 form.addEventListener('submit', (e) =>{
  e.preventDefault();

  
  if(value!==null){
     if (firstName.value ===''|| firstName.value == null ){
         alert("please fill in name")
         return false;
     }
  }
     else{
       return true;
     }
    
  
 })
*/




/*
//phone number vaildate
const number = document.querySelector("#number");
const btn = document.querySelector("#button");
let regex = "^(\\d{3}[- ]?){2}\\d{4}$";
btn.addEventListener("click", (e)=>{
  e.preventDefault()
  if(number.value =="")
  {
    alert="please enter phone number"
    return false
}
   else if (number.value.match(regex)){
    return true;
}


});
*/



