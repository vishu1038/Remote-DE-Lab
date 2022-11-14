#include "webserver.h"

void setup(){
  // Serial port for debugging purposes
  Serial.begin(115200);

  pinMode(output, OUTPUT);
  digitalWrite(output, LOW);

  pinMode(output2, OUTPUT);
  digitalWrite(output2, LOW);
  
  // Connect to Wi-Fi
  wifi_setup();

  //Start Server
  server_startup();
}
  
void loop() {
  Serial.println(WiFi.localIP());

}