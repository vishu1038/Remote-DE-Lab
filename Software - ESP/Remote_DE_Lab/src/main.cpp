#include "webserver.h"
#include "ioexpander.h"
#include "exp1.h"
#include "exp2.h"
#include "exp3.h"
#include "exp6a.h"
#include "exp11.h"


void setup() {
  // Serial port for debugging purposes
  Serial.begin(115200);

  // IO Expanders Startup
  ioexpander_startup();

  // Connect to Wi-Fi
  wifi_setup();

  // Exp Initializations
  exp1_init();
  exp2_init();
  exp3_init();
  exp6a_init();
  exp11_init();

  //Start Server
  server_startup();
}
  
void loop() {
  Serial.println(WiFi.localIP());

}