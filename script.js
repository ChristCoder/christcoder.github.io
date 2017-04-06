







/*function game() { //Function that defines the popular game: Rock, Paper, Scissors!
	
		
    var random = (Math.floor(Math.random() * 3) + 1); //Defines variable that selects a random number from 1 to 3. (Otherwise would be 0 to 2 if the "+1" didn't exist).
    var userChoice = prompt("Select your weapon: Rock, Paper, or Scissors!"); 
    var compChoice = random; //Sets the random number to the computer choice.
      switch(compChoice) { //Switch statement in replacement of multiple if/else statements.
        case (1):
          compChoice = "Rock";
          break;
          case (2):
          compChoice = "Paper";
          break;
        case (3):
          compChoice = "Scissors";
          break;
        default:
          alert("Please Check Code!");
        }
      switch (userChoice) {
        case ("Rock"):
          if (compChoice == "Rock") {
            alert("Your Choice: Rock! Computer Choice: Rock! Tie! Try again!");
          } else if (compChoice == "Paper") {
            alert("Your Choice: Rock! Computer Choice: Paper! Computer Wins!");
          }else {
            alert("Your Choice: Rock! Computer Choice: Scissors! Player Wins!");
          }
            break;
        case ("Paper"):
          if (compChoice == "Rock") {
            alert("Your Choice: Paper! Computer Choice: Rock! Player Wins!");
          } else if (compChoice == "Scissors") {
            alert("Your Choice: Paper! Computer Choice: Scissors! Computer Wins!");
          }else {
            alert("Your Choice: Paper! Computer Choice: Paper! Tie! Try again!");
          }
            break;
        case ("Scissors"):
          if (compChoice == 'Rock') {
            alert("Your Choice: Scissors! Computer Choice: Rock! Computer Wins!");
          } else if (compChoice == "Paper") {
            alert("Your Choice: Scissors! Computer Choice: Paper! Player Wins!");
          } else {
            alert("Your Choice: Scissors! Computer Choice: Scissors! Tie! Try again1");
          }
            break;
          default:
            alert("Code error. Debug!");
      }
    return true;
}*/

$(document).ready(function() {
  $("#slide").click(function(){
    $("#nav").slideToggle();
  }); 
  
  $("#rpsBtn").click(function(){
    $("#rps").animate({width: "toggle"}, 350);
  }); 
    
  $("#pongBtn").click(function(){
    $("#pong").animate({width: "toggle"}, 350);
  });  
    
  
//  $(".rock").on("click", function() {
//    $(".rock").fadeOut(1000).fadeIn(1000); 
//    });
    
});

function rock() {
    
}



function mash() { //Function that creates a text-based game called M.A.S.H.
    //Defined variables to get the structure of information in arrays.
    var name = prompt("what is your name?");
    var jobs = ["Doctor", "Nurse", "Google Exec", "Truck driver", "Receptionist", "Hobo", "Professional Procrastinator", "Lazy Bum", "Toenail Cleaner", "Executive Earwax Extractor", "Booger Therapist", "Bank Teller", "Professional Vexacious Babysitter", "Center Intellegence Accident"];
    var money = ["$10,000", "$12,000", "100,000", "$25,000,000", "$13.00", "$0.51", "$34,000,000,000,000", "$257", "$1000", "$49.99", "$19.95", "$0.01"];
    var house = ["Mansion", "Apartment", "Shack", "House"];
    var car = ["Lambo", "Ferari", "Nissan", "Oldsmobile", "Station Wagon", "Soccer Mom Van", "Bicycle", "3 Wheeler(Your son's bike when he was 3 and half)", "Rolls Royce", "Maybach", "Green Machine"];
    var spouse = ["Married", "Single", "Divorced", "Widowed"];
    var kids = ["6", "12", "2", "15 (And only 2 Belong To You)", "0 (You Hate Kids All Because Of Your Sister's)", "1 and a half (Not Born Yet)", "8"];

    //Created new variables that randomizes the values in each array.
    var jobsRand = jobs[Math.floor(Math.random() * jobs.length)];
    var moneyRand = money[Math.floor(Math.random() * money.length)];
    var houseRand = house[Math.floor(Math.random() * house.length)];
    var carRand = car[Math.floor(Math.random() * car.length)];
    var spouseRand = spouse[Math.floor(Math.random() * spouse.length)];
    var kidsRand = kids[Math.floor(Math.random() * kids.length)];

    //DOM element! Outputs the result in an organized manner.
    document.getElementById("mash").innerHTML = ("Your name is " + name + "." + "You are a " + jobsRand + " currently making " + moneyRand + " a year! You live in a " + houseRand + " while driving a " + carRand + "! You are currently " + spouseRand + " with " + kidsRand + " kids! Thanks for playing!");

    return true;
};

//grabs the DOM of whatever is set in the parameter and sets the style visibility.
function toggle() {
    document.getElementById("btnrps").style.visibility = "hidden";
}

/* Continuing to the contact page with form validation.
---------------------------------------------------------Program break!*/
function check() { //This function checks all nessecary fields to see if it has valid information!
    var fname = document.getElementById("firstname").value;
    var lname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;

    if (fname == "" || lname == "" || email == "") {
        alert("Please be sure to fill in a required fields");
        if (fname == "") {
            document.getElementById("firstname").style.borderColor = "red";
        }
        if (lname == "") {
            document.getElementById("lastname").style.borderColor = "red";
        }
        if (email == "") {
            document.getElementById("email").style.borderColor = "red";
        }
        return false;
    }
    return true;
}


