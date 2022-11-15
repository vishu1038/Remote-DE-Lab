#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>

//WiFi Credentials
#define WIFI_SSID "MSI 6373"
#define WIFI_PASS "qwertyui"

//Server Credentials 
#define SERVER_USER "admin"
#define SERVER_PASS "admin"

extern const char* PARAM_INPUT_1;
extern const char* PARAM_INPUT_2;
extern const char* PARAM_INPUT_3;
extern const char* PARAM_INPUT_4;
extern const int output;
extern const int output2;
extern const int output3;
extern const int input;

// Create AsyncWebServer object on port 80
extern AsyncWebServer server;


String outputState();
String outputState2();
String outputState3();
String inputState();

String processor(const String& var);

void wifi_setup();
void server_startup();
