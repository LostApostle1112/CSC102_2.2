 // creating a timer reset
 /*Tutor Dylan Crockett helped me with this small detail, I had all of it but "document.getElementById("countDownTimer")" on the first part of the if statement. */
 function timerReset ()
  {// changed the ID to 
    if (document.getElementById("countDownTimer2").innerHTML == "Blast Off!!") 
    {
      document.getElementById("countDownTimer2").innerHTML = "Starting countdown here..";
    }

  }
   //our new countdown, more efficient
  function countDown2()
  {//set our var. starting position
    var count = 10;
     for(var i = 1; i <= 10; i++)
     { // I do not completly understand how this works. Var "i" is my stopping point, if "i" is less than or = to 10 go up by one with "i" ?
      setTimeout(function () 
      {
        document.getElementById("countDownTimer2").innerHTML = count;
        count--;// the afore mentioned confusion comes in with this line "count--" how is that not arguing with "i++"?
      }, 1000 * i);
  
     }//setting the seconds for our timer cut in and cut out
     setTimeout(function () 
     {
       document.getElementById("countDownTimer2").innerHTML = "Blast Off!!";
       count--;
     }, 11000);
 
  }




//commented out uneeded code

  // creating a countdown function and name it countdown :version 1
 /* function countDown() 

  {//set the count to 10
    var count = 10;

    document.getElementById("countDownTimer").innerHTML = count;
   
    count = count - 1;
    // to create a timer we use 'setTimeout' function
    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 1000); //timeout in one second

    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 2000);// time out in two seconds

    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 3000);// time out in three seconds

    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 4000);//time out in...do we get the pattern and reasoning yet?

    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 5000);
    // if not... each time out function has to be set one second further than the last in order to be properly set
    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 6000);
     // this one fires off after seven seconds
    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 7000);
     //so on...
    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 8000);
     // and so forth.
    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = count;
      count = count - 1;
    }, 9000);
     //Until we reach the end
    setTimeout(function () {
      document.getElementById("countDownTimer").innerHTML = "Blast Off!!";
      count = count - 1;
    }, 10000);

  }*/


//setting up the play craps function
  function playCraps ()
  {
    //Setting our three needed variables: die1, die2, and sum
   var die1 =Math.ceil( Math.random()*6);
   //Math.random gives us a float so we use Math.ceil() to round it up
   var die2 = Math.ceil(Math.random()*6);
   var sum = die1 + die2;
   // getting the element by ID name to print out our results
   document.getElementById("die1Res").innerHTML = die1;
   document.getElementById("die2Res").innerHTML = die2;
   document.getElementById("sumRes").innerHTML = sum;
 //if the sum == 7 or 11 print out "craps you lose"
   if(sum== 7 || sum==11)
   {
     document.getElementById("crapsResults").innerHTML = "Craps you Lose!!";
   }
   //else if the die are even and doubles...you win.. the 2%0 returns true if there is no remainder when dividing by 2
   else if (die1 == die2 && die1%2== 0)
   {
     document.getElementById("crapsResults").innerHTML = "Doubles, you win!!";
   }

   //else try again
   else
   {
     document.getElementById("crapsResults").innerHTML = "Push, please try again.";
   }
  }

  // built a sandbox to practice our code in
  function runSandbox ()
  {
    //set our var. starting position
    var count = 10;
    // I do not completly understand how this works. Var "i" is my stopping point, if "i" is less than or = to 10 go up by one with "i" ?
     for(var i = 1; i <= 10; i++)
     {
      setTimeout(function () 
      {
        document.getElementById("sandboxDisplay").innerHTML = count;
        count--; // the afore mentioned confusion comes in with this line "count--" how is that not arguing with "i++"?
      }, 1000 * i);
    //setting the seconds for our timer cut in and cut out
     }
     setTimeout(function () 
     {
       document.getElementById("sandboxDisplay").innerHTML = "Blast off";
       count--;
     }, 11000);
 
  }
