#include "exp3.h"

extern AsyncWebServer server;

void exp3_init()
{
    io1.pinMode(EXP3_IO1_A3 , OUTPUT);
    io1.pinMode(EXP3_IO1_A2 , OUTPUT);
    io1.pinMode(EXP3_IO1_Cin, OUTPUT);
    io1.pinMode(EXP3_IO1_A0 , OUTPUT);
    io1.pinMode(EXP3_IO1_A1 , OUTPUT);

    io1.digitalWrite(EXP3_IO1_A3 , LOW);
    io1.digitalWrite(EXP3_IO1_A2 , LOW);
    io1.digitalWrite(EXP3_IO1_Cin, LOW);
    io1.digitalWrite(EXP3_IO1_A0 , LOW);
    io1.digitalWrite(EXP3_IO1_A1 , LOW);

    io1.pinMode(EXP3_IO1_S3, INPUT);
    io1.pinMode(EXP3_IO1_S2, INPUT);
    io1.pinMode(EXP3_IO1_CO, INPUT);
    io1.pinMode(EXP3_IO1_S1, INPUT);
    io1.pinMode(EXP3_IO1_S0, INPUT);
}

void exp3()
{
    // Send a GET request to <ESP_IP>/update?state=<inputMessage>
    server.on("/exp3", HTTP_GET, [] (AsyncWebServerRequest *request) {
        // if(!request->authenticate(SERVER_USER, SERVER_PASS))
        //     return request->requestAuthentication();
        String inputMessage;
        String inputParam;
        // GET input1 value on <ESP_IP>/update?state=<inputMessage>
        if (request->hasParam(PARAM3_A0)) {
            inputMessage = request->getParam(PARAM3_A0)->value();
            inputParam = PARAM3_A0;
            io1.digitalWrite(EXP3_IO1_A0, inputMessage.toInt());
        }
        if (request->hasParam(PARAM3_A1)) {
            inputMessage = request->getParam(PARAM3_A1)->value();
            inputParam = PARAM3_A1;
            io1.digitalWrite(EXP3_IO1_A1, inputMessage.toInt());
        }
        if (request->hasParam(PARAM3_A2)) {
            inputMessage = request->getParam(PARAM3_A2)->value();
            inputParam = PARAM3_A2;
            io1.digitalWrite(EXP3_IO1_A2, inputMessage.toInt());
        }
        if (request->hasParam(PARAM3_A3)) {
            inputMessage = request->getParam(PARAM3_A3)->value();
            inputParam = PARAM3_A3;
            io1.digitalWrite(EXP3_IO1_A3, inputMessage.toInt());
        }
        if (request->hasParam(PARAM3_Cin)) {
            inputMessage = request->getParam(PARAM3_Cin)->value();
            inputParam = PARAM3_Cin;
            io1.digitalWrite(EXP3_IO1_Cin, inputMessage.toInt());
        }

        String outData = "";
        if(io1.digitalRead(EXP3_IO1_S0)) {   
            outData += "s0=1,";
        }
        else {
            outData += "s0=0,";
        }
        if(io1.digitalRead(EXP3_IO1_S1)) {   
            outData += "s1=1,";
        }
        else {
            outData += "s1=0,";
        }
        if(io1.digitalRead(EXP3_IO1_S2)) {   
            outData += "s2=1,";
        }
        else {
            outData += "s2=0,";
        }
        if(io1.digitalRead(EXP3_IO1_S3)) {   
            outData += "s3=1,";
        }
        else {
            outData += "s3=0,";
        }
        if(io1.digitalRead(EXP3_IO1_CO)) {   
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