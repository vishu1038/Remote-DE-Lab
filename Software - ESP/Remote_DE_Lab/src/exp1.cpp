#include "exp1.h"

extern AsyncWebServer server;

void exp1_init()
{
    pinMode(EXP1_A, OUTPUT);
    digitalWrite(EXP1_A, LOW);

    pinMode(EXP1_D, OUTPUT);
    digitalWrite(EXP1_D, LOW);

    pinMode(EXP1_B, OUTPUT);
    digitalWrite(EXP1_B, LOW);

    pinMode(EXP1_Y, INPUT);
}

void exp1()
{
    // Send a GET request to <ESP_IP>/update?state=<inputMessage>
    server.on("/exp1", HTTP_GET, [] (AsyncWebServerRequest *request) {
        // if(!request->authenticate(SERVER_USER, SERVER_PASS))
        //     return request->requestAuthentication();
        String inputMessage;
        String inputParam;
        // GET input1 value on <ESP_IP>/update?state=<inputMessage>
        if (request->hasParam(PARAM1_A)) {
            inputMessage = request->getParam(PARAM1_A)->value();
            inputParam = PARAM1_A;
            digitalWrite(EXP1_A, inputMessage.toInt());
        }
        if (request->hasParam(PARAM1_D)) {
            inputMessage = request->getParam(PARAM1_D)->value();
            inputParam = PARAM1_D;
            digitalWrite(EXP1_D, inputMessage.toInt());
        }
        if (request->hasParam(PARAM1_B)) {
            inputMessage = request->getParam(PARAM1_B)->value();
            inputParam = PARAM1_B;
            digitalWrite(EXP1_B, inputMessage.toInt());
        }
        if(digitalRead(EXP1_Y))
        {
            if(request->method() == HTTP_GET)
                request->send(200, "text/plain", "Y=1");
            else
                request->send(404, "text/plain", "Not Found");
        }
        else
        {
            if(request->method() == HTTP_GET)
                request->send(200, "text/plain", "Y=0");
            else
                request->send(404, "text/plain", "Not Found");
        }
    });
}