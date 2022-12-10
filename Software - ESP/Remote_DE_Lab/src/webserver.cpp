#include "webserver.h"
#include "exp1.h"
#include "exp2.h"
#include "exp3.h"

AsyncWebServer server(80);

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
    DefaultHeaders::Instance().addHeader("Access-Control-Allow-Origin", "*");
    DefaultHeaders::Instance().addHeader("Access-Control-Allow-Methods", "GET, POST, PUT");
    DefaultHeaders::Instance().addHeader("Access-Control-Allow-Headers", "Content-Type");
    // Route for root / web page
    // server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
    //     if(!request->authenticate(SERVER_USER, SERVER_PASS))
    //         return request->requestAuthentication();
    //     request->send_P(200, "text/html", index_html, processor);
    // });


    exp1();
    exp2();
    exp3();

    // Start server
    server.begin();
}