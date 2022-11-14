#include "webserver.h"

const char* PARAM_INPUT_1 = "state";
const char* PARAM_INPUT_2 = "state2";
const int output = 2;
const int output2 = 15;

AsyncWebServer server(80);

const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE HTML><html>
<head>
  <title>ESP Web Server</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    html {font-family: Arial; display: inline-block; text-align: center;}
    h2 {font-size: 2.6rem;}
    body {max-width: 600px; margin:0px auto; padding-bottom: 10px;}
    .switch {position: relative; display: inline-block; width: 120px; height: 68px} 
    .switch input {display: none}
    .slider {position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; border-radius: 34px}
    .slider:before {position: absolute; content: ""; height: 52px; width: 52px; left: 8px; bottom: 8px; background-color: #fff; -webkit-transition: .4s; transition: .4s; border-radius: 68px}
    input:checked+.slider {background-color: #2196F3}
    input:checked+.slider:before {-webkit-transform: translateX(52px); -ms-transform: translateX(52px); transform: translateX(52px)}
  </style>
</head>
<body>
  <h2>ESP Web Server</h2>
  <button onclick="logoutButton()">Logout</button>
  <p><!-- Ouput - GPIO 2 - State --><span id="state">%STATE%</span></p>
  %BUTTONPLACEHOLDER%
  <p><!-- Ouput - GPIO 15 - State --><span id="state2">%STATE2%</span></p>
  %BUTTONPLACEHOLDER2%

<script>function toggleCheckbox(element) {
  var xhr = new XMLHttpRequest();
  if(element.checked){ 
    xhr.open("GET", "/update?state=1", true); 
    document.getElementById("state").innerHTML = "ON";  
  }
  else { 
    xhr.open("GET", "/update?state=0", true); 
    document.getElementById("state").innerHTML = "OFF";      
  }
  xhr.send();
}
function toggleCheckbox2(element) {
  var xhr = new XMLHttpRequest();
  if(element.checked){ 
    xhr.open("GET", "/update?state2=1", true); 
    document.getElementById("state2").innerHTML = "ON";  
  }
  else { 
    xhr.open("GET", "/update?state2=0", true); 
    document.getElementById("state2").innerHTML = "OFF";      
  }
  xhr.send();
}
function logoutButton() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/logout", true);
  xhr.send();
  setTimeout(function(){ window.open("/logged-out","_self"); }, 1000);
}
</script>
</body>
</html>
)rawliteral";

const char logout_html[] PROGMEM = R"rawliteral(
<!DOCTYPE HTML><html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <p>Logged out or <a href="/">return to homepage</a>.</p>
  <p><strong>Note:</strong> close all web browser tabs to complete the logout process.</p>
</body>
</html>
)rawliteral";

// Replaces placeholder with button section in your web page
String processor(const String& var){
  //Serial.println(var);
  if(var == "BUTTONPLACEHOLDER"){
    String buttons ="";
    String outputStateValue = outputState();
    buttons+= "<p><label class=\"switch\"><input type=\"checkbox\" onchange=\"toggleCheckbox(this)\" id=\"output\" " + outputStateValue + "><span class=\"slider\"></span></label></p>";
    return buttons;
  }
  if(var == "BUTTONPLACEHOLDER2"){
    String buttons ="";
    String outputStateValue = outputState2();
    buttons+= "<p><label class=\"switch\"><input type=\"checkbox\" onchange=\"toggleCheckbox2(this)\" id=\"output2\" " + outputStateValue + "><span class=\"slider\"></span></label></p>";
    return buttons;
  }
  if (var == "STATE"){
    if(digitalRead(output)){
      return "ON";
    }
    else {
      return "OFF";
    }
  }
  if (var == "STATE2"){
    if(digitalRead(output2)){
      return "ON";
    }
    else {
      return "OFF";
    }
  }
  return String();
}

String outputState(){
  if(digitalRead(output)){
    return "checked";
  }
  else {
    return "";
  }
  return "";
}

String outputState2(){
  if(digitalRead(output2)){
    return "checked";
  }
  else {
    return "";
  }
  return "";
}


void wifi_setup()
{
    WiFi.begin(WIFI_SSID, WIFI_PASS);

    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting to WiFi..");
    }

    //Print ESP Local IP Address
    Serial.println(WiFi.localIP());
}

void server_startup()
{
    // Route for root / web page
    server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
        if(!request->authenticate(SERVER_USER, SERVER_PASS))
            return request->requestAuthentication();
        request->send_P(200, "text/html", index_html, processor);
    });

    server.on("/logout", HTTP_GET, [](AsyncWebServerRequest *request){
        request->send(401);
    });

    server.on("/logged-out", HTTP_GET, [](AsyncWebServerRequest *request){
        request->send_P(200, "text/html", logout_html, processor);
    });

    // Send a GET request to <ESP_IP>/update?state=<inputMessage>
    server.on("/update", HTTP_GET, [] (AsyncWebServerRequest *request) {
        if(!request->authenticate(SERVER_USER, SERVER_PASS))
            return request->requestAuthentication();
        String inputMessage;
        String inputParam;
        // GET input1 value on <ESP_IP>/update?state=<inputMessage>
        if (request->hasParam(PARAM_INPUT_1)) {
            inputMessage = request->getParam(PARAM_INPUT_1)->value();
            inputParam = PARAM_INPUT_1;
            digitalWrite(output, inputMessage.toInt());
        }
        else {
            inputMessage = "No message sent";
            inputParam = "none";
        }
        if (request->hasParam(PARAM_INPUT_2)) {
            inputMessage = request->getParam(PARAM_INPUT_2)->value();
            inputParam = PARAM_INPUT_2;
            digitalWrite(output2, inputMessage.toInt());
        }
        else {
            inputMessage = "No message sent";
            inputParam = "none";
        }
        Serial.println(inputMessage);
        request->send(200, "text/plain", "OK");
    });

    // Start server
    server.begin();
}