#include "webserver.h"
#include "exp1.h"
#include "exp2.h"


void setup(){
  // Serial port for debugging purposes
  Serial.begin(115200);

  //EXP1
  pinMode(EXP1_A, OUTPUT);
  digitalWrite(EXP1_A, LOW);

  pinMode(EXP1_D, OUTPUT);
  digitalWrite(EXP1_D, LOW);

  pinMode(EXP1_B, OUTPUT);
  digitalWrite(EXP1_B, LOW);

  pinMode(EXP1_Y, INPUT);

  //EXP2
  pinMode(EXP2_CO,  INPUT);
  pinMode(EXP2_S3,  INPUT);
  pinMode(EXP2_S2,  INPUT);
  pinMode(EXP2_S1,  INPUT);
  pinMode(EXP2_S0,  INPUT);

  pinMode(EXP2_A3, OUTPUT);
  pinMode(EXP2_A2, OUTPUT);
  pinMode(EXP2_A1, OUTPUT);
  pinMode(EXP2_A0, OUTPUT);
  pinMode(EXP2_B3, OUTPUT);
  pinMode(EXP2_B2, OUTPUT);
  pinMode(EXP2_B1, OUTPUT);
  pinMode(EXP2_B0, OUTPUT);
  pinMode(EXP2_Cin, OUTPUT);

  
  // Connect to Wi-Fi
  wifi_setup();

  //Start Server
  server_startup();
}
  
void loop() {
  Serial.println(WiFi.localIP());

}