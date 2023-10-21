// q no 1

// var msg = "hello World"
// for(var i = 1  ; i < 6  ; i++){
//     document.write(msg + "<br>")
// }


// q no 2

// for(var i = 1  ; i < 11  ; i++){
//     document.write( i + "<br>")
// }


// q no 3

// var userInp = prompt("enter  number to print your table" , 6 )
// var userInp2 = prompt("Enter max-length" , 11 )
// for(var i = 1 ; i<=userInp2 ; i++ ){
//     document.write(userInp + " X " + i + "=" + userInp*i + "<br>")
// }

// q no 4

// var arr = ["Nokia" , "Samsung" ,  "Apple" , "Hammad" , "Hussain"]
// for(var i = 0 ; i < arr.length ; i++){
//     document.write(arr[i] + "<br>")
// }

// q no 5

// var arr = ["apple" , "banana" , "Strawberry" , "Orange" , "Falsa"]
// for(var i = 0 ; i<arr.length ; i++){
//     document.write(arr[i] + "<br>" + "<br>" )
  
    
// }
// for(var i = 0 ; i<arr.length ; i++){
// document.write("Element at index " + i +" is " + arr[i], "<br>");
// }


// q no 6

// var num = prompt("Enter number of items: ");
// var arr = [];

// for (var i = 0; i < num; i++) {
//     var item = prompt("Enter value for index " + i);
//     arr.push(item);
// }

// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i], "<br>");
// }

// q no 7

// var Counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var ReverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var Even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// var Odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// var Series = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"];

// document.write("<h3>Counting</h3>","<br>",Counting, "<br>");
// document.write("<h3>Reverse Counting</h3>","<br>",ReverseCounting, "<br>");
// document.write("<h3>Even</h3>","<br>",Even, "<br>");
// document.write("<h3>Odd</h3>","<br>",Odd, "<br>");
// document.write("<h3>Series</h3>","<br>",Series, "<br>");

// q no 8 

// var items = ["cookie" , "chips" , "cake" , "patties" , "rusk" ]
// var userInp = prompt("hello what do you want to order")
// var match = "no"

// for(var i=0 ; i<items.length ; i++){
//     if(userInp == items[i]){
//         match == "yes"      
//         alert(userInp + "is availble at index " + i)
//         break
//     }
    
// }
// if(match == "no"){
//     alert("sorry")

// }

// q no 9


// var numbers = [24, 99, 78, 91, 12];
// var max = numbers[0];

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }

// document.write("Array Itmes: " + numbers, "<br>");
// document.write("The largest number is " + max);

// q no 10

// var numbers = [24, 99, 78, 91, 12];
// var min = numbers[0];

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
// }

// document.write("Array Items: " + numbers, "<br>");
// document.write("The smallest number is " + min);

// q no 11 

// var numbers = [24, 99, 78, 91, 12];
// var max = numbers[0];
// var min = numbers[0];

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
// }
// document.write("Array Itmes: " + numbers, "<br>");
// document.write("The largest number is " + max +"<br>" );
// document.write("The smallest number is " + min);

// q no 12

// for(var i = 1 ; i <= 20 ; i++ ){
//     document.write(5*i + ",")
// }

// q no 13

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// document.write("<table><tr><td>Students</td><td>Scores</td></tr>");
// for (var i = 0; i < students.length; i++) {
//     document.write(`<tr><td>${students[i]}</td><td>${scores[i]}</td></tr>`)
// }
// document.write("</table>");

// q no 15
// var arr = [ [1,2,3] , [4,5,6] , [7,8,9] ];

// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         document.write(arr[i][j] + " ")
//     }
//     document.write("<br>")
// }

// q no 19 


// var num = 7;

// for (var i = 1; i <= 7; i++) {
//     for (var j = num; j >= 1; j--) {
//         document.write("*")
//     }
//     num--
//     document.write("<br>")
// }


// q no 20

// 20(a)

// var num = 5;

// for (var i = 1; i <= 4; i++) {
//     for (var j = num; j >= 1; j--) {
//         document.write("*")
//     }
//     document.write("<br>")
// }


// 20(b)

// var num = 5;

// for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }


// 20(c)

// var num = 5;

// for (var i = 1; i <= 5; i++) {
//     for (var j = num; j >= 1; j--) {
//         document.write("*")
//     }
//     num--
//     document.write("<br>")
// }
