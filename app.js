
// Chapter No 1

// Q1
// alert("Welcome")

// Q2
// alert("Error! Please enter a valid password.")

// Q3
// alert("Welcome to JS Land... \n Happy Coding!")

// Q4
// alert("Welcometo JS Land...")
// alert("Happy Coding!")

// Q5
// console.log("Hello... I can run JS through my web browser's console")

// Q6
// alert("HEllo World")

// Q7
// (b)  Body (before your page’s HTML)


// Chapter No 2

// Q1
// var username ;

// Q2
// var myName = "Shahwar Ali";

// Q3
// var message = "Hello World";
// alert(message)

// Q4
// var name = "Jhone Doe";
// alert(name)
// var age = "15 years old";
// alert(age)
// var course = "Certified Mobile Application Development";
// alert(course)

// Q5
// var food = " Pizza \n Pizz \n Piz \n Pi \n P";
// alert(food)

// Q6
// var email = "example@example.com";
// alert("my email address is " + email)

// Q7
// var book = "A smarter \n way to learn JavaScript";
// alert(" I am trying to learn from the book " + book)

// Q8
// var yah = "Yah! I can write HTML content through JavaScript";
// document.write(yah)

// Q9
// Skip    


// Chapter No 3

// Q1
// var age = 15;
// alert("I am " + age + " years old")

// Q2

// window.onload = function(e){  
//     var localCount = Number(localStorage.getItem("Count"));
    
//     if(localCount != null && localCount > 0){
//         count = localCount + 1
//     }
//     else{
//         count = 1;
//     }
//     alert(`You have visited ${count} times`)
//    localStorage.setItem("Count", count);

// }


// Q3
// var birthYear = 1990;
// document.write("My birth year is " + birthYear + "<br>")
// document.write("Data Type of My Decleard variable is " + (typeof birthYear))


// Q4
// var name = prompt("Enter Your Name");
// var product = prompt("Enter Product Name");
// var quantity = prompt("Enter Quantity");
// document.write("<b> Name </b>" + name , "<b> Product </b>" + product , "<b> Quantity </b>" + quantity)


// Chapter No 4

// Q1
// var fName = "Jhone " , lName = "Doe " , from = "England ";
// document.write(fName , lName , from)

// Q2
// 5 legal variable
// var firstName ;
// var first_name;
// var Name12;
// var LastName;
// var $lastname;

// 5 illegal variable

// var 1firstName ;
// var first name;
// var Name&;
// var #LastName;
// var last-name;

// Q3
// A) document.write("Rules for naming JS variables")

// b) Variable names can only contain, Number, $ and _ .For example $my_1stVariable

// c) Variables must begin with a letter, $ or _. For example $name, _name or name

// d) Variable names are case Sensitive

// e) Variable names should not be JS Keyboard


// Chapter No 5

// Q1
// var num1 = 3;
// var num2 = 5;
// var newNum = num1 + num2;
// document.write("Sum of 3 and 5 is " + newNum)

// Q2
//  var a = 12;
//  var b = 8;
//  var num1 = a + b;
//  document.write("<b> Addition </b>" + num1)

//  var c = 54;
//  var d = 6;
//  var num4 = c - d;
//  document.write("<b> Subtraction </b>" + num4)

//  var e = 7;
//  var f = 14;
//  var num2 = e * f;
//  document.write("<b> Multiplication </b>" + num2)

//  var g = 12;
//  var h = 3;
//  var num3 = g / h;
//  document.write("<b> Division </b>" + num3)

//  var i = 28;
//  var j = 5;
//  var num5 = i % j;
//  document.write("<b> Modulus </b>" + num5)


// Q4
// var price = 600;
// var buying = 5;
// var calulate = 600*5;
// document.write("Total cost to buy 5 tickets to a movie is " + calulate + "PKR")

// Q5
// document.write("Table of 4")

// document.write("<br> 4x1="+ (1*4))
// document.write("<br> 4x2="+ (2*4))
// document.write("<br> 4x3="+ (3*4))
// document.write("<br> 4x4="+ (4*4))
// document.write("<br> 4x5="+ (5*4))
// document.write("<br> 4x6="+ (6*4))
// document.write("<br> 4x7="+ (7*4))
// document.write("<br> 4x8="+ (8*4))
// document.write("<br> 4x9="+ (9*4))
// document.write("<br> 4x10="+ (10*4))


// Q8
// var totalMark = +prompt("Enter Total Marks")
// var obtMark = +prompt("Enter Obtained Marks")
// var percentage = obtMark / totalMark * 100;
// document.write("Total Marks " + totalMark + "<br>" )
// document.write("Obtained Marks " + obtMark + "<br>")
// document.write("Percentage " + percentage)


// Q11
// document.write("<h1> Age Calculator </h1>")
// var currentYear = +prompt("Enter The Current Year")
// document.write("Current Year " + currentYear)
// var birthYear = +prompt("Enter The Birth Year")
// document.write("<br> Birth Year " + birthYear)
// document.write("<br> Your Age is " + (currentYear - birthYear))


// Q12
// var radius = +prompt("Enter Please");
// document.write("<br> Radius of a Circle : " + radius)
// var circumference = Math.PI * 2*radius;
// document.write("<br> The circumference is : " + circumference);
// var area = Math.PI * radius*radius;
// document.write("<br> The area is : " + area.toFixed(1));


// Q13
// document.write("<h1> The Lifetime Supply Calculate </h1>")

// var favourite = prompt("Enter Your Favourite Snack")
// document.write("<br> Favourite Snack : " + favourite)
// var age = +prompt("Enter Your Age")
// document.write("<br> Current Age : " + age)
// var maxAge = +prompt("Enter Your Estimated Maximum Age")
// document.write("<br> Estimated Maximum Age : " + maxAge)
// var amount = +prompt("Amount of Snacks Per Day")
// document.write("<br> Amount of Snacks Per Day : " + amount)
// document.write("<br> You Will Need "  +(maxAge - age) * 365 * 3 + " Chocolate Chip to Last You Until The Ripe Old Age Of " + maxAge)


// Chapter No 6-9

// Q1
// document.write("Result <br> The Value of a is : 10 <br> ")
// var a = 10;
// document.write("<br> The value of ++a is : ", ++a)
// document.write("<br> Now The value of a is : ", a )

// document.write("<br><br> The value of a++ is : ", a++)
// document.write("<br> Now The value of a is : ", a )

// document.write("<br><br> The value of --a is : ", --a)
// document.write("<br> Now The value of a is : ", a )

// document.write("<br><br> The value of a-- is : ", a--)
// document.write("<br> Now The value of a is : ", a )


// Q2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is " + a, "<br> b is " + b, "<br> Result " + result )


// Q3
// var userName = prompt("Enter Your Name")
// alert("Hello How are You")

// Q4
// var num = prompt("Enter Number", "0")
// var num = parseInt(num); 
// var i = 0;
// document.write('<table border="1" cellspacing="0">');
// for (i = 1; i < 10; i++) {
//   document.write("<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>");
// }

// Q5
// document.write("<h2> Subject Total Marks Obtained Marks Percentage </h2>")
// var num1 = +prompt("English")
// var num2 = +prompt("Math")
// var num3 = +prompt("Urdu")

// document.write("English 100"+'&nbsp;&nbsp;'+ num1 +'&nbsp;&nbsp;'+ num1 + "%")
// document.write("<br> Math 100 "+' &nbsp;&nbsp; '+ num2 + ' &nbsp;&nbsp; ' + num2 + "%")
// document.write("<br> Urdu 100 "+' &nbsp;&nbsp; '+ num1 + ' &nbsp;&nbsp; ' + num1 + "%")
// var totalmark =  300;
// var obt = num1 + num2 + num3;

// var percentage = obt / totalmark * 100;
// document.write("<br>&nbsp;"+totalmark, "&nbsp;"+obt, "&nbsp;"+ percentage + "%" )


// Chapter No 9-11

// Q1
// var userInput = prompt("Enter Your City")
// var city = "Karachi";
// if(userInput == city){
//   alert("Welcome to city of lights" + city)
// }
// else{
//     alert("Your City is Not Available")
// }


// Q2
// var gender = prompt("Enter Your Gender");
// gender = gender.toLowerCase()
// if(gender == "male"){
//     alert("Good Morning Sir")
// }
// else if(gender == "female"){
//   alert(" Good Morning Ma’am")
// }
// else{
//     alert("Gender is Other")
// }


// Q3

// var userInput = prompt("Enter Signal color")
// userInput = userInput.toLowerCase();

// if(userInput == "red"){
//    alert("Must Stop " + userInput)
// }

// else if(userInput == "yellow"){
//     alert("Ready To Move " + userInput)
// }
// else if(userInput == "green"){
//      alert("Move Now "  + userInput)
// }
// else{
//     alert("Signal color is Not Right")
// }


// Q4

// var fuel = +prompt(" Remaining Fuel in Car")

// if(fuel < 0.25){
//     document.write("Please refill the fuel in your car")
// }
// else{
//     document.write("fuel tank is full")
// }


// Q5
// a 
// var num = 4;
// if(++num === 5){
// alert("given condition for variable a is true ");
// }

// // b 
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is false");
// }

// // c 
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is false");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is false");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// // d 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// // e 
// if (true){
//   alert("True");
// }
// if (false){
// alert("False");
// }

// // f 
// if("car" < "cat"){
//   alert("car is not smaller than cat");
// }
    

// Q6

// var tmark = +prompt("Enter Total Marks")
// document.write("Total Marks : " + tmark)
// var obtmark = +prompt("Enter Obtained Marks")
// document.write("<br> Marks Obtained : " + obtmark)
// var percentage = obtmark / tmark * 100;
// document.write("<br> Percentage : " + percentage)
// if(percentage >= 80 && percentage <= 100){
//     document.write("<br> Grade : " + "A+" + "<br> Remarks : " + "Excellent")
// }
// else if(percentage >= 70 && percentage <= 79){
//    document.write("<br> Grade : " + "A" + "<br> Remarks : " + "Good")
// }
// else if(percentage >= 60 && percentage <= 69){
//     document.write("<br> Grade : " + "B" + "<br> Remarks : " + "You Need To Improve")
// }
// else if(percentage >= 50 && percentage <= 59){
//     document.write("<br> Grade : " + "C" + "<br> Remarks : " + "You Need To Improve")
// }
// else if(percentage < 50){
//     document.write("<br> Grade : " + "Fail" + "<br> Remarks : " + "Sorry")
// }
// else{
//     document.write("<br> Enter a Right Percentage")
// }


// Q7

// var userInput = +prompt("Guess The Secret Number")
// var num = 12;
// if(num == userInput){
//   alert("Bingo! Correct Answer")
// }
// else if(++num == userInput){
//     alert("“Close Enough to The Correct Answer")
// }
// else{
//     alert("Not Correct Answer")
// }


// Q8 
// var input = +prompt("Enter The Number")
// var num = 3;
// if(input % num == 0){
//   alert("The Number is Divisible By 3")
// }
// else{
//     alert("The Number is Not Divisible By 3")
// }


// Q9
// var input = +prompt("Enter The Number")
// if (input % 2 == 0) {
//     alert("The Number is Even " + input)
// }
// else{
//     alert("The Number is Odd " + input)
// }


// Q10
// var userTemp = +prompt("Enter The  Temperature")
// if(userTemp >= 40 && userTemp <= 50){
//   alert("“It is too hot outside.")
// }
// else if(userTemp >= 30 && userTemp <= 39 ){
// alert("The Weather today is Normal")
// }
// else if(userTemp >= 20 && userTemp <= 29 ){
//     alert("Today’s Weather is cool")
// }
// else if(userTemp >= 10 && userTemp <= 19 ){
//     alert("OMG! Today’s weather is so Cool")
// }
// else{
//     alert("write the correct value")
// }


// Q11
// var num1 = +prompt("Enter The First Number");
// var opt = prompt("Enter The Oprator");
// var num2 = +prompt("Enter The Second Number");

// if(opt === "+"){
//   alert(num1 + num2)
// }
// else if(opt === "-"){
//     alert(num1 - num2)
// }
// else if(opt === "*"){
//     alert(num1 * num2)
// }
// else if(opt === "/"){
//     alert(num1 / num2)
// }
// else if(opt === "%"){
//     alert(num1 % num2)
// }
// else{
//     alert("Enter The Correct")
// }


// Chapter No 12-13 


// Q1

// var input = prompt("Enter Please")
// var match, result;
// let ascii = [
//     ['UpperCase', 65],
//     ['lowerCase', 97],
//     ['UpperCase', 66],
//     ['lowerCase', 98],
//     ['UpperCase', 67],
//     ['lowerCase', 99],
//     ['UpperCase', 68],
//     ['lowerCase', 100]

// ];
// var _asci = input.charCodeAt(0);
// console.log(_asci)

// for(i = 0; i < ascii.length; i++){
//    if(_asci == ascii[i][1]){
//       match = true;
//        result = _asci + " value matched & is equal to " + ascii[i][0];
//    }
//    else{
//        if(!result){
//            result = ' not match';
//        }
       
//    }
// }
// console.log(result)


// Q2

// var num1 = +prompt("Enter Your First Number");
// var num2 = +prompt("Enter Your Second Number");

// if(num1 > num2){
//     document.write(`<b> Num1 </b> ${num1} is Greater Than <b> Num2 </b> ${num2}`)
// }
// else if(num1 < num2){
//     document.write(`<b> Num2 </b> ${num2} is  Greater Than <b> Num1 </b> ${num1}`)
// }

// else{
//     document.write(`<b> Num1 </b> ${num1} and <b> Num2 </b> Equal ${num2}`)
// }


// Q3

// var input = +prompt("Enter The Number")
// if(input > 0){
//    console.log(input + " The Number is Positive")
// }
// else if(input == 0){
//     console.log(input + " The Number is Zero")
// }
// else{
//     console.log(input + " The Number is Negitive")
// }


// q4

// function isVowel(argument){

// 	var text;
// 	var argument = argument.toLowerCase();

//     var vowels = (['a', 'e', 'i', 'o', 'u']);

//     for (var i = 0; i <= vowels.length; i++){
//         if (argument != vowels[i]) {
//             continue;
//         }
//         return true;
//     }
//     return false;
// }

// // See if "A" is a vowel
// var char = prompt("Enter A Letter");

// if (isVowel(char)) {
// 	console.log(char + " is a vowel");
// } else {
// 	console.log(char + " is not a vowel");
// }


// Q5
// var pas1 = prompt("Enter The Password")
// var pas2 = prompt("Enter The Confirm Password")
// if(pas1 == pas2){
//   alert("Correct! The password you entered matches the original password")
// }
// else if(pas1 == "" || pas2 == ""){
//    alert("Please enter your password")
// }
// else{
//     alert("Incorrect password")
// }

// Q6

// var user = prompt("Pleasr Enter")
// if(user < 18){
//   alert("Good Day")
// }
// else{
//     alert("Good Evening")
// }


// Q7
// var time = prompt("Enter Please")

// if(time >= 0000 && time < 1200){
//    alert("Good Morning ")
// }
// else if(time >= 1200 && time < 1700){
//    alert("Good Afternoon ")
// }
// else if(time >= 1700 && time < 2100){
//     alert("Good Evening ")
//  }
//  else if(time >= 2100 && time < 2359){
//     alert("Good Night ")
//  }
//  else{
//      alert(" Please Enter The Correct Time")
//  }



