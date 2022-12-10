#include "webserver.h"
#include "ioexpander.h"
#include "exp1.h"
#include "exp2.h"
#include "exp3.h"


void setup() {
  // Serial port for debugging purposes
  Serial.begin(115200);

  // IO Expanders Startup
  ioexpander_startup();

  // Exp Initializations
  exp1_init();
  exp2_init();
  exp3_init();

  // Connect to Wi-Fi
  wifi_setup();

  //Start Server
  server_startup();
}
  
void loop() {
  Serial.println(WiFi.localIP());

}