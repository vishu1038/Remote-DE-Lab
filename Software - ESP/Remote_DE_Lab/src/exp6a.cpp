#include "exp6a.h"

extern AsyncWebServer server;

void exp6a_init()
{
    io1.pinMode(EXP6A_IO1_A , OUTPUT);
    io1.pinMode(EXP6A_IO1_B , OUTPUT);

    io1.digitalWrite(EXP6A_IO1_A , LOW);
    io1.digitalWrite(EXP6A_IO1_B , LOW);

    io1.pinMode(EXP6A_IO1_Y3, INPUT);
    io1.pinMode(EXP6A_IO1_Y1, INPUT);
    io1.pinMode(EXP6A_IO1_Y2, INPUT);
}

void exp6a()
{
    // Send a GET request to <ESP_IP>/update?state=<inputMessage>
    server.on("/exp6a", HTTP_GET, [] (AsyncWebServerRequest *request) {
        // if(!request->authenticate(SERVER_USER, SERVER_PASS))
        //     return request->requestAuthentication();
        String inputMessage;
        String inputParam;
        // GET input1 value on <ESP_IP>/update?state=<inputMessage>
        if (request->hasParam(PARAM6A_A)) {
            inputMessage = request->getParam(PARAM6A_A)->value();
            inputParam = PARAM6A_A;
            io1.digitalWrite(EXP6A_IO1_A, inputMessage.toInt());
        }
        if (request->hasParam(PARAM6A_B)) {
            inputMessage = request->getParam(PARAM6A_B)->value();
            inputParam = PARAM6A_B;
            io1.digitalWrite(EXP6A_IO1_B, inputMessage.toInt());
        }

        String outData = "";
        if(io1.digitalRead(EXP6A_IO1_Y3)) {   
            outData += "y3=1,";
        }
        else {
            outData += "y3=0,";
        }
        if(io1.digitalRead(EXP6A_IO1_Y2)) {   
            outData += "y2=1,";
        }
        else {
            outData += "y2=0,";
        }
        if(io1.digitalRead(EXP6A_IO1_Y1)) {   
            outData += "y1=1,";
        }
        else {
            outData += "y1=0,";
        }

        if(request->method() == HTTP_GET)
            request->send(200, "text/plain", outData);
        else
            request->send(404, "text/plain", "Not Found");
    });
}