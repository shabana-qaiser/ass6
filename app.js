// chapter # 21 to 25 Q # 1
// var firstname =prompt("Enter first name");
// var lastname =prompt("Enter last name");
// var fullname =(firstname + " " + lastname);
// document.write(fullname);
// var fullname =(firstname + " " + lastname);
// alert("welcome "+ firstname + " " + lastname);

// chapter # 21 to 25 Q # 2

// var text =prompt("  My  favorite  phone  is:  Samsung Galaxy S6 Edge Plus")
// var indexNum =text.indexOf("Samsung Galaxy S6 Edge Plus");
// document.write(indexNum)

// chapter # 21 to 25 Q # 3

// var city ="Pakistani"
// var indexNum =city.inedxOf("n")
// document.write(indexNum)

// chapter # 21 to 25 Q # 4

// var greet ="Hello World"
// var indexNum =greet.lastIndexOf("l")
// document.write("last index of 'l':" + indexNum)

// chapter # 21 to 25 Q # 5

// var a="pakistan";
// document.write("character  at index 3:")
// document.write(a.charAt(3))

// chapter # 21 to 25 Q # 6

// var firstname =prompt("Enter first name");
// var lastname =prompt("Enter last name");
// var fullname =(firstname + " " + lastname);
// var greet =(" Have a nice day!")
// document.write(fullname + "!" + greet );


// chapter # 21 to 25 Q # 7 

// var city ="Hyderabad"
// var afterreplacement = city.replace("Hyder","Islam");
// document.write(afterreplacement);

// chapter # 21 to 25 Q # 8

// var message = "Ali and Sami are best friends They play cricket and football together";
// var  newMessage = message.replace(/and/g, "&");
// document.write(newMessage);

// chapter # 21 to 25 Q # 9

// var integerString = "472"
// var num = Number(integerString);
// document.write(num);

// chapter # 21 to 25 Q # 10

// var userinput =prompt("Enter your favorite  nut");
// var userinput = userinput.toUpperCase();
// document.write(userinput);

// chapter # 21 to 25 Q # 11

// var userinput =prompt("Enter your text");
// var firstchar =userinput.slice(0,1);
// firstchar = firstchar.toUpperCase()
// var otherchar = userinput.slice(1)
// otherchar = otherchar.toLowerCase()
// var userinput = firstchar+ otherchar;
// document .write(userinput);


// // chapter # 21 to 25 Q # 12

// var num = 35.36 ;
// var string =num.toString();
// document.write( string);

// chapter # 21 to 25 Q # 13

//  var  username =prompt("enter your name");
// var tetlength =username.length;
// for(i = 0; i < username.length; i++){
//     if(username.slice(i, i + 1) == "!" || username.slice(i, i + 1) == "@" || username.slice(i, i + 1)) {  
//         alert("please enter a valid username ")  
//     }
//     break;
// }

// chapter # 21 to 25 Q # 14

// var arr =["cake","apple pie","cookie","chips","patties"];
// var bakery =prompt("enter your bakery items ");
// bakery = bakery.toLowerCase();
// var bakeryItems =arr.indexOf(bakery);
// if(arr.indexOf(bakery) != -1){
//     alert(bakery + " " + "is available  at index " + " bakery items in our bakery");
// }else{
//     alert( "we are sorry" + " " + bakery + " " +"is not available in our bakery")
// }

// chapter # 21 to 25 Q # 15

// var user =prompt("enter your password ");
//     if(user === charCodeAt > 65 || user === charCodeAt < 122 && ! num){
//    alert("Enter password: 123cmad" )

// }else if( user === ! user === charCodeAt()){
//     alert("password can not begin with a number")

// }else if(user.valueOf.length >6 ){
//     alert("password.value.length ")
// }


// chapter # 21 to 25 Q # 16

// var university = "university of karachi";
// var res = university.split('');
// for (var i =0; i < res.length; i++){
// document.write(res[i], "<br>")
// }

// chapter # 21 to 25 Q # 17

// var a="pakistan";
// document.write(a.charAt(7))

// chapter # 21 to 25 Q # 18


// var text = "The quick brown fox jumps over the lazy dog";
// var a = text.toLowerCase();
// var b = a.match(/the/gi).length
// document.write("there are" + " " + b + " accurance(s) of the word 'the' ");


// chapter # 26 to 30 Q # 1

// var a ="number: 3.45214"
// document.write(a +"<br>");

// var num =3.45214;
// var round = Math.round(num)
// document.write("round of value:" + round +"<br>");

// var num =3.45214;
// var round = Math.floor(num)
// document.write("floor value:" + round +"<br>");

// var num =3.45214;
// var round = Math.ceil(num)
// document.write("ceil value:" + round );


// chapter # 26 to 30 Q # 2

// var a ="number: -2.673"
// document.write(a +"<br>");

// var num =-2.673;
// var round = Math.round(num)
// document.write("round of value:" + round +"<br>");

// var num =-2.673;
// var round = Math.floor(num)
// document.write("floor value:" + round +"<br>");

// var num =-2.673;
// var round = Math.ceil(num)
// document.write("ceil value:" + round);


// chapter # 26 to 30 Q # 3

// const num = prompt("enter number")
// document.write("the absolute value of" + " " +  num + " " + "is:"+ " ")
// document.write(Math.abs(num)) 


// chapter # 26 to 30 Q # 4

// Math.floor( Math.random() * 6 )
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write("random dice value: "  + diceRoll + "<br>");
// Math.floor( Math.random() * 6 )
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write("random dice value: "  + diceRoll);

// chapter # 26 to 30 Q # 5

// var headsuser = prompt("Enter heads username");
// var tailsuser = prompt("Enter tails username");
// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//    alert("heads " + headsuser + " win the toss")
// }else{
//    alert("tails " + tailsuser + " win the toss")
// }

// chapter # 26 to 30 Q # 6
   
// function randomNumber(min, max) {  
//     return Math.floor(Math.random() * (max - min) + min); 
// }  
// document.write("Random Number between 1 and 100: ")   
// document.write( randomNumber(1, 100) );


// chapter # 26 to 30 Q # 7

// var a =prompt("enter your weight")
// var a =parseFloat(a)
// var b = Math.random()*1
// document.write(b);

// chapter # 26 to 30 Q # 8

// var a = prompt( "try your luck ","write a number between 1 to 10")
// if(a == 8){
//     alert("congregation! you win")
// }else{
//     alert("sorry you lost! try again")
// }

// chapter # 31 to 34 Q # 1

// var a =new Date();
// document.write(a);

// chapter # 31 to 34 Q # 2

// var d = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.write("current  month:" + " " + months[d.getMonth()]);

// chapter # 31 to 34 Q # 3

// var a =new Date();
// var b = a.toString();
// var c= b.slice(0,3)
// alert("Today is" + " " + c);


// chapter # 31 to 34 Q # 4

// var days=["monday","tuesday","wednesday ","thursday ","friday ","saturday ","sunday"];
// var a = new Date();
// var b = a.getDay()
// if(b === 5 || b === 6 ) {
//     alert("It's Fun day")
// }else{
//     alert("It's working  day")
// }


// chapter # 31 to 34 Q # 5

// var a = new Date();
// var b = a.getDate()
// if(b < 16) {
//     alert("First fifteen days of the month")
// }else{
//     alert("Last fifteen days of the month")
// }

// chapter # 31 to 34 Q # 6

// var minutes  = new Date();
// var minMili = minutes.getTime();
// var minutesconvert = minMili/(1000*60*60)
// document.write("current  date:" + minutes + "<br>")
// document.write("Elapsed miliSecond since january 1 ,1970:" + minMili + "<br>")
// document.write("Elapsed minutes since january 1 ,1970:" + minutesconvert + "<br>")


// chapter # 31 to 34 Q # 7

// var a =time
// var time = 12.00 && 23.59
// if(a == time){
//     alert("It's am")
// }else{
//     alert("It's pm")
// }


// chapter # 31 to 34 Q # 8

// var d = newDate();
// d.setFullYear(d.getFullYear(), d.getMonth() + 6,)
// document.write("later date:" + d)

// chapter # 31 to 34 Q # 9

// chapter # 31 to 34 Q # 10

// var y12 =new Date("dec 31 2014 00:00:00");
// var L45 = new Date ("Dec 5 2015" );
// var io1 = L45.getTime();
// var Pkj = y12.getTime();
// var we2 = io1 - Pkj;
// var d67 = we2/(1000*60)
// var I9x = d67;
// document.write(I9x + "second had passed since the beginning of 2015.")

// chapter # 31 to 34 Q # 11

// var current = new Date();
// var hour= current.getHours ()-1
// document.write("current  date:" + current +"<br>");
// document.write("1 hour ago:" + hour )

// chapter # 31 to 34 Q # 12

// var y12 =new Date("jun 22 1920 00:00:00");
// var L45 = new Date ("jun 22 2020" );
// var io1 = L45.getTime();
// var Pkj = y12.getTime();
// var we2 = io1 - Pkj;
// var d67 = we2/(1000*60)
// var I9x = d67;
// document.write(I9x + "second had passed since the beginning of 1920.")

// chapter # 31 to 34 Q # 13

//  var dob = new Date(prompt("enter your date of birth","march 4, 1994"));
//  var dobmili = dob.getTime();
//  var today = new Date();
//  var todaymili = today.getTime();
//  var diff = todaymili- dobmili;
//  var accuage = Math.floor(diff/(1000*60*60*24*30*12))
//  document.write("your age is" + " " + accuage + "</br>");
//  document.write("your birth year is 1994");

// chapter # 31 to 34 Q # 14

// document.write("<h1>K-ELECTRIC BILL</h1>")
// var arr =[ "Cusromer Name: <b>ABC Customer</b>","Current Month: <b> February</b>","Number of units: <b>410</b>","charges per unit: <b>16</b>"]
// for (var i =0; i < arr.length; i++){
//   document.write(arr[i], "<br>" )

// var units= 410;
// var charges = 16
// var Late = 350;
// var net = (units* charges)
// var gross = ( net + Late)

//   }
//   document.write(" Net Amount Payable (within Due Date):" +net +"</br>")
//   document.write(" Late Payment Surcharge:" +Late +"</br>")
//   document.write("Gross Amount Payable (after Due Date) :" + gross)

// chapter # 35 to 38 Q # 1

// var a =new Date();
// document.write(a);

// chapter # 35 to 38 Q # 2

// function greet(){
// var firstname =prompt("Enter first name");
// var lastname =prompt("Enter last name");
// var fullname =(firstname + " " + lastname);
// document.write("welcome" + " " + fullname);
// }
// greet();

// chapter # 35 to 38 Q # 3

// function add(){
//     var a =+prompt("Enter num 1 ");
//     var b =+prompt("Enter num 2");
//     var result =(a + b);
//     document.write(result)
//     }
//     add();
    


// chapter # 35 to 38 Q # 4

// function calc(num1,opr,num2){
//     if(opr === "+"){
//         return num1 + num2
//     }
//     else if(opr === "-"){
//         return num1 - num2
//     }
//     else if (opr === "*"){
//         return num1 * num2
//     }
//     else if (opr === "/"){
//         return num1 / num2
//     }else{
//         return "Incorrect  operator!"
//     }
// }

// var result = calc(2, "+", 5)
// var result1 = calc(2, "-", 8)
// var result2 = calc(7, "*",5)
// var result3 = calc(6, "/", 3) 
// var result4 = calc(81, "$", 5) 
// document.write(result + "<br>")
// document.write(result1 + "<br>")
// document.write(result2 + "<br>")
// document.write(result3 + "<br>")
// document.write(result4 + "<br>")

// chapter # 35 to 38 Q # 5

// var a =prompt("enter any number")
// var b= (a * a);
// document.write(b)

// chapter # 35 to 38 Q # 6

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 4;
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer);

// chapter # 35 to 38 Q # 7

// function counting(){
//         for(var a = 1; a <= 1 , a <= 200 ; a = a +10){
//             for(var b = a; b < a +10; b++){
//                 document.write(b + " " )
//             }
//             document.write("<br>" )
//         }
//     }
//     counting()

// chapter # 35 to 38 Q # 8

// function pythagorean(sideA, sideB){
//   return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// }

// document.write(pythagorean(  4, 3));

// // chapter # 35 to 38 Q # 9

// function rectangle_area(height, width){
//    var width = 400
//     height = 800
//     return area = height * width;
// }
// var g (area)
// document.write(rectangle_area(height, width));
// rectangle_area(height, width)
// chapter # 35 to 38 Q # 10

// function check_Palindrome(str_entry){
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }

//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//         for (var x = 0; x < ccount; x++) {
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         document.write("it is palindrome word.");
//         return true;
//     }
//     check_Palindrome("madam");

// chapter # 35 to 38 Q # 11

// function first_letter_capital(){
//     return letterOne.replace(/\w\5*/g.function (text.charAt (0).toUpeerCase()+ text.substr(1).toLowerCase()));{
//     } 
// }
// document.write(first_letter_capital("the quick brown fix"));

// var str = "Visit W3Schools";
// var n = str.search(/w3schools/i);


// chapter # 35 to 38 Q # 12

// function longestWord(string) {
//   var str = string.split(" ");
//   var longest = 0;
//   var word = null;
//   for (var i = 0; i <= str.length - 1; i++) {
//       if (longest < str[i].length) {
//           longest = str[i].length;
//           word = str[i];
//       }
//   }
//   return word;
// }

// document.write(longestWord("Web Development Tutorial'"));

// chapter # 35 to 38 Q # 13

// function character_counting(str_1,letter){
// var letter_count = 0;
// for (var position  = 0; position  <str_1.length;position ++){
// if (str_1.charAt(position)=== letter){
// letter_count+=1;
//   }
// }
// return letter_count;
// }
// alert(character_counting('JSResourceS.com', 'o'));


// chapter # 35 to 38 Q # 14

// function calcCircumfrence(radius) {
  
//      var radius=prompt(" ") *2*3.14*radius
//     console.log("The circumfrence is " + radius + ".");
//     }
//     function calcArea(radius) {
//       var x =prompt(" ") * radius;
//     console.log("The area is " + x + ".");
//     }
    
//     calcCircumfrence();
//     calcArea();


