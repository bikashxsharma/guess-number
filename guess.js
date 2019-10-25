
/*Assigning all the important vairables*/

let difficultyLevel = 10; //difficulty level defined, default is 10
let randomNumber ; // random number defined
let previousAttempt = 0; // previous attempt, which will be updated 
let previousGuess=[]; // previous guess will store as array 
let userGuess; // user input value
let count =0; // counter to count number of guesses

// check which button is clicked and assigned the difficulty level accordingly
document.getElementById("easy-level").addEventListener("click", function(){
        difficultyLevel=10;
        document.getElementById("easy-level").className ="primary-btn btn-active";
        document.getElementById("hard-level").className ="primary-btn";
})
document.getElementById("hard-level").addEventListener("click", function(){
    difficultyLevel=5;
    document.getElementById("hard-level").className ="btn-active";
    document.getElementById("easy-level").className ="primary-btn";
   
})


  // function will generate random number on window load between 1-100 and return update it to randomNumber
  window.onload = function computerNumber(){
    return randomNumber = Math.floor(Math.random()*100+1);

    
}

// run loop for certain times


    function compareNumber(){

        // incase the previous attempt is less than difficulty level
        if(previousAttempt<difficultyLevel){
            if(userGuess > randomNumber){
                document.getElementById("show-result").innerHTML="<font color='red'>Too high! Go smaller</font>";
                document.getElementById("user-guess").value="";        
            }
            else if(userGuess < randomNumber){
                document.getElementById("show-result").innerHTML="<font color='blue'>Too low! Go higher</font>";
                document.getElementById("user-guess").value="";
             
       
                
            } else {
                document.getElementById("show-result").innerHTML=`<font color='green'>Holy! Moly! you made it on ${previousAttempt+1} attempt(s).<font>`;
                document.getElementById("user-guess").value="";
              
            }
         }
         else {
            if(userGuess>randomNumber) {
                document.getElementById("show-result").innerHTML="<font color='red'>You loss!</font>";
                document.getElementById("user-guess").className ="displayNone";
                


            }
            else if (userGuess<randomNumber) {
                document.getElementById("show-result").innerHTML="<font color='red'>You loss!</font>";
                document.getElementById("user-guess").className ="displayNone";

            }
            else {
                document.getElementById("show-result").innerHTML=`<font color='green'>Holy! Moly! you made it on ${previousAttempt+1} attempt(s).<font>`;

            }


         }

        
        previousGuess.push(userGuess);// add previous guess to array
        document.getElementById("guess-log").innerHTML=previousGuess+".... "; // print the previous guess to guess log element
        previousAttempt++; // increase the previous attempt
        document.getElementById("attemp-left").innerHTML=previousAttempt;
    }




// function to compare numbers


  




// activate function on enter

document.getElementById("user-guess").onkeypress=function(event){
    if(event.keyCode === 13 || event.which ===13){ 
    userGuess=document.getElementById("user-guess").value;     
    compareNumber();
   
    }
}



