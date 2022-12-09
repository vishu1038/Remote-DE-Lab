#include "exp2.h"

extern AsyncWebServer server;

void exp2()
{
    // Send a GET request to <ESP_IP>/update?state=<inputMessage>
    server.on("/exp2", HTTP_GET, [] (AsyncWebServerRequest *request) {
        // if(!request->authenticate(SERVER_USER, SERVER_PASS))
        //     return request->requestAuthentication();
        String inputMessage;
        String inputParam;
        // GET input1 value on <ESP_IP>/update?state=<inputMessage>
        if (request->hasParam(PARAM2_A0)) {
            inputMessage = request->getParam(PARAM2_A0)->value();
            inputParam = PARAM2_A0;
            digitalWrite(EXP2_A0, inputMessage.toInt());
        }
        if (request->hasParam(PARAM2_A1)) {
            inputMessage = request->getParam(PARAM2_A1)->value();
            inputParam = PARAM2_A1;
            digitalWrite(EXP2_A1, inputMessage.toInt());
        }
        if (request->hasParam(PARAM2_A2)) {
            inputMessage = request->getParam(PARAM2_A2)->value();
            inputParam = PARAM2_A2;
            digitalWrite(EXP2_A2, inputMessage.toInt());
        }
        if (request->hasParam(PARAM2_A3)) {
            inputMessage = request->getParam(PARAM2_A3)->value();
            inputParam = PARAM2_A3;
            digitalWrite(EXP2_A3, inputMessage.toInt());
        }
        if (request->hasParam(PARAM2_B0)) {
            inputMessage = request->getParam(PARAM2_B0)->value();
            inputParam = PARAM2_B0;
            digitalWrite(EXP2_B0, inputMessage.toInt());
        }
        if (request->hasParam(PARAM2_B1)) {
            inputMessage = request->getParam(PARAM2_B1)->value();
            inputParam = PARAM2_B1;
            digitalWrite(EXP2_B1, inputMessage.toInt());
        }
        if (request->hasParam(PARAM2_B2)) {
            inputMessage = request->getParam(PARAM2_B2)->value();
            inputParam = PARAM2_B2;
            digitalWrite(EXP2_B2, inputMessage.toInt());
        }
        if (request->hasParam(PARAM2_B3)) {
            inputMessage = request->getParam(PARAM2_B3)->value();
            inputParam = PARAM2_B3;
            digitalWrite(EXP2_B3, inputMessage.toInt());
        }   
        if (request->hasParam(PARAM2_Cin)) {
            inputMessage = request->getParam(PARAM2_Cin)->value();
            inputParam = PARAM2_Cin;
            digitalWrite(EXP2_Cin, inputMessage.toInt());
        }

        String outData = "";
        if(digitalRead(EXP2_S0)) {   
            outData += "s0=1,";
        }
        else {
            outData += "s0=0,";
        }
        if(digitalRead(EXP2_S1)) {   
            outData += "s1=1,";
        }
        else {
            outData += "s1=0,";
        }
        if(digitalRead(EXP2_S2)) {   
            outData += "s2=1,";
        }
        else {
            outData += "s2=0,";
        }
        if(digitalRead(EXP2_S3)) {   
            outData += "s3=1,";
        }
        else {
            outData += "s3=0,";
        }
        if(digitalRead(EXP2_CO)) {   
            outData += "co=1";
        }
        else {
            outData += "co=0";
        }

        if(request->method() == HTTP_GET)
            request->send(200, "text/plain", outData);
        else
            request->send(404, "text/plain", "Not Found");
    });
}