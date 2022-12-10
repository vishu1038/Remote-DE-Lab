#include "exp11.h"

extern AsyncWebServer server;

void exp11_init()
{
    io2.pinMode(EXP11_IO2_MC , OUTPUT);
    io2.pinMode(EXP11_IO2_CLK , OUTPUT);
    io2.pinMode(EXP11_IO2_QB , OUTPUT);
    io2.pinMode(EXP11_IO2_QA , OUTPUT);
    io2.pinMode(EXP11_IO2_QC , OUTPUT);
    io2.pinMode(EXP11_IO2_QD , OUTPUT);

    io2.digitalWrite(EXP11_IO2_MC , LOW);
    io2.digitalWrite(EXP11_IO2_CLK , LOW);
    io2.digitalWrite(EXP11_IO2_QB , LOW);
    io2.digitalWrite(EXP11_IO2_QA , LOW);
    io2.digitalWrite(EXP11_IO2_QC , LOW);
    io2.digitalWrite(EXP11_IO2_QD , LOW);

    io2.pinMode(EXP11_IO2_A, INPUT);
    io2.pinMode(EXP11_IO2_B, INPUT);
    io2.pinMode(EXP11_IO2_C, INPUT);
    io2.pinMode(EXP11_IO2_D, INPUT);
}

void exp11()
{
    // Send a GET request to <ESP_IP>/update?state=<inputMessage>
    server.on("/exp11", HTTP_GET, [] (AsyncWebServerRequest *request) {
        // if(!request->authenticate(SERVER_USER, SERVER_PASS))
        //     return request->requestAuthentication();
        String inputMessage;
        String inputParam;
        // GET input1 value on <ESP_IP>/update?state=<inputMessage>
        if (request->hasParam(PARAM11_MC)) {
            inputMessage = request->getParam(PARAM11_MC)->value();
            inputParam = PARAM11_MC;
            io2.digitalWrite(EXP11_IO2_MC, inputMessage.toInt());
        }
        if (request->hasParam(PARAM11_CLK)) {
            inputMessage = request->getParam(PARAM11_CLK)->value();
            inputParam = PARAM11_CLK;
            io2.digitalWrite(EXP11_IO2_CLK, inputMessage.toInt());
        }
        if (request->hasParam(PARAM11_QA)) {
            inputMessage = request->getParam(PARAM11_QA)->value();
            inputParam = PARAM11_QA;
            io2.digitalWrite(EXP11_IO2_QA, inputMessage.toInt());
        }
        if (request->hasParam(PARAM11_QB)) {
            inputMessage = request->getParam(PARAM11_QB)->value();
            inputParam = PARAM11_QB;
            io2.digitalWrite(EXP11_IO2_QB, inputMessage.toInt());
        }
        if (request->hasParam(PARAM11_QC)) {
            inputMessage = request->getParam(PARAM11_QC)->value();
            inputParam = PARAM11_QC;
            io2.digitalWrite(EXP11_IO2_QC, inputMessage.toInt());
        }
        if (request->hasParam(PARAM11_QD)) {
            inputMessage = request->getParam(PARAM11_QD)->value();
            inputParam = PARAM11_QD;
            io2.digitalWrite(EXP11_IO2_QD, inputMessage.toInt());
        }

        String outData = "";
        if(io2.digitalRead(EXP11_IO2_A)) {   
            outData += "a=1,";
        }
        else {
            outData += "a=0,";
        }
        if(io2.digitalRead(EXP11_IO2_B)) {   
            outData += "b=1,";
        }
        else {
            outData += "b=0,";
        }
        if(io2.digitalRead(EXP11_IO2_C)) {   
            outData += "c=1,";
        }
        else {
            outData += "c=0,";
        }
        if(io2.digitalRead(EXP11_IO2_D)) {   
            outData += "d=1,";
        }
        else {
            outData += "d=0,";
        }

        if(request->method() == HTTP_GET)
            request->send(200, "text/plain", outData);
        else
            request->send(404, "text/plain", "Not Found");
    });
}