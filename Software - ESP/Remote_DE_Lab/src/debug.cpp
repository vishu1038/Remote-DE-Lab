// const char* PARAM_INPUT_1 = "state";
// const char* PARAM_INPUT_2 = "state2";
// const char* PARAM_INPUT_3 = "state3";
// const char* PARAM_INPUT_4 = "state4";

// //exp1
// const int output = 15;
// const int output2 = 2;
// const int output3 = 4;
// const int input = 5;

// const char index_html[] PROGMEM = R"rawliteral(
// <!DOCTYPE HTML><html>
// <head>
//   <title>ESP Web Server</title>
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//   <meta http-equiv="refresh" content="3">
//   <style>
//     html {font-family: Arial; display: inline-block; text-align: center;}
//     h2 {font-size: 2.6rem;}
//     body {max-width: 600px; margin:0px auto; padding-bottom: 10px;}
//     .switch {position: relative; display: inline-block; width: 120px; height: 68px} 
//     .switch input {display: none}
//     .slider {position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; border-radius: 34px}
//     .slider:before {position: absolute; content: ""; height: 52px; width: 52px; left: 8px; bottom: 8px; background-color: #fff; -webkit-transition: .4s; transition: .4s; border-radius: 68px}
//     input:checked+.slider {background-color: #2196F3}
//     input:checked+.slider:before {-webkit-transform: translateX(52px); -ms-transform: translateX(52px); transform: translateX(52px)}
//   </style>
// </head>
// <body>
//   <h2>ESP Web Server</h2>
//   <h3>Experiment - 1</h3>
//   <button onclick="logoutButton()">Logout</button>
//   <p><!-- Output - GPIO 15 - State --><span id="state">%STATE%</span></p>
//   %BUTTONPLACEHOLDER%
//   <p><!-- Output - GPIO 2 - State --><span id="state2">%STATE2%</span></p>
//   %BUTTONPLACEHOLDER2%
//   <p><!-- Output - GPIO 4 - State --><span id="state3">%STATE3%</span></p>
//   %BUTTONPLACEHOLDER3%
//   <p><!-- Input - GPIO 5 - State --><span id="state4">%STATE4%</span></p>
//   %BUTTONPLACEHOLDER4%

// <script>function toggleCheckbox(element) {
//   var xhr = new XMLHttpRequest();
//   if(element.checked){ 
//     xhr.open("GET", "/update?state=1", true); 
//     document.getElementById("state").innerHTML = "A - HIGH";  
//   }
//   else { 
//     xhr.open("GET", "/update?state=0", true); 
//     document.getElementById("state").innerHTML = "A - LOW";      
//   }
//   xhr.send();
// }
// function toggleCheckbox2(element) {
//   var xhr = new XMLHttpRequest();
//   if(element.checked){ 
//     xhr.open("GET", "/update?state2=1", true); 
//     document.getElementById("state2").innerHTML = "D - HIGH";  
//   }
//   else { 
//     xhr.open("GET", "/update?state2=0", true); 
//     document.getElementById("state2").innerHTML = "D - LOW";      
//   }
//   xhr.send();
// }
// function toggleCheckbox3(element) {
//   var xhr = new XMLHttpRequest();
//   if(element.checked){ 
//     xhr.open("GET", "/update?state3=1", true); 
//     document.getElementById("state3").innerHTML = "B - HIGH";  
//   }
//   else { 
//     xhr.open("GET", "/update?state3=0", true); 
//     document.getElementById("state3").innerHTML = "B - LOW";      
//   }
//   xhr.send();
// }
// function toggleCheckbox4(element) {
//   var xhr = new XMLHttpRequest();
//   if(element.checked){ 
//     xhr.open("GET", "/update?state4=1", true); 
//     document.getElementById("state4").innerHTML = "Y - HIGH";  
//   }
//   else { 
//     xhr.open("GET", "/update?state4=0", true); 
//     document.getElementById("state4").innerHTML = "Y - LOW";      
//   }
//   xhr.send();
// }
// function logoutButton() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "/logout", true);
//   xhr.send();
//   setTimeout(function(){ window.open("/logged-out","_self"); }, 1000);
// }
// </script>
// </body>
// </html>
// )rawliteral";

// const char logout_html[] PROGMEM = R"rawliteral(
// <!DOCTYPE HTML><html>
// <head>
//   <meta name="viewport" content="width=device-width, initial-scale=1">
// </head>
// <body>
//   <p>Logged out or <a href="/">return to homepage</a>.</p>
//   <p><strong>Note:</strong> close all web browser tabs to complete the logout process.</p>
// </body>
// </html>
// )rawliteral";

// // Replaces placeholder with button section in your web page
// String processor(const String& var){
//   //Serial.println(var);
//   if(var == "BUTTONPLACEHOLDER"){
//     String buttons ="";
//     String outputStateValue = outputState();
//     buttons+= "<p><label class=\"switch\"><input type=\"checkbox\" onchange=\"toggleCheckbox(this)\" id=\"output\" " + outputStateValue + "><span class=\"slider\"></span></label></p>";
//     return buttons;
//   }
//   if(var == "BUTTONPLACEHOLDER2"){
//     String buttons ="";
//     String outputStateValue = outputState2();
//     buttons+= "<p><label class=\"switch\"><input type=\"checkbox\" onchange=\"toggleCheckbox2(this)\" id=\"output2\" " + outputStateValue + "><span class=\"slider\"></span></label></p>";
//     return buttons;
//   }
//   if(var == "BUTTONPLACEHOLDER3"){
//   String buttons ="";
//   String outputStateValue = outputState3();
//   buttons+= "<p><label class=\"switch\"><input type=\"checkbox\" onchange=\"toggleCheckbox3(this)\" id=\"output3\" " + outputStateValue + "><span class=\"slider\"></span></label></p>";
//   return buttons;
//   }
//   if(var == "BUTTONPLACEHOLDER4"){
//   String buttons ="";
//   String outputStateValue = inputState();
//   buttons+= "<p><label class=\"switch\"><input type=\"checkbox\" onchange=\"toggleCheckbox4(this)\" id=\"input\" " + outputStateValue + "><span class=\"slider\"></span></label></p>";
//   return buttons;
//   }
//   if (var == "STATE"){
//     if(digitalRead(output)){
//       return "A - HIGH";
//     }
//     else {
//       return "A - LOW";
//     }
//   }
//   if (var == "STATE2"){
//     if(digitalRead(output2)){
//       return "D - HIGH";
//     }
//     else {
//       return "D - LOW";
//     }
//   }
//   if (var == "STATE3"){
//     if(digitalRead(output3)){
//       return "B - HIGH";
//     }
//     else {
//       return "B - LOW";
//     }
//   }
//   if (var == "STATE4"){
//     if(digitalRead(input)){
//       return "Y - HIGH";
//     }
//     else {
//       return "Y - LOW";
//     }
//   }
//   return String();
// }

// String outputState(){
//   if(digitalRead(output)){
//     return "checked";
//   }
//   else {
//     return "";
//   }
//   return "";
// }

// String outputState2(){
//   if(digitalRead(output2)){
//     return "checked";
//   }
//   else {
//     return "";
//   }
//   return "";
// }

// String outputState3(){
//   if(digitalRead(output3)){
//     return "checked";
//   }
//   else {
//     return "";
//   }
//   return "";
// }

// String inputState(){
//   if(digitalRead(input)){
//     return "checked";
//   }
//   else {
//     return "";
//   }
//   return "";
// }

//