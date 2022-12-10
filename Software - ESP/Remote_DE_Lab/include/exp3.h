#include "webserver.h"
#include "ioexpander.h"

//ESP Pins
#define EXP3_IO1_A3 0
#define EXP3_IO1_A2 1
#define EXP3_IO1_Cin 2
#define EXP3_IO1_A0 3
#define EXP3_IO1_A1 4

#define EXP3_IO1_S3 15
#define EXP3_IO1_S2 14
#define EXP3_IO1_CO 13
#define EXP3_IO1_S1 12
#define EXP3_IO1_S0 11

//Server parameters
#define PARAM3_A3 "a3"
#define PARAM3_A2 "a2"
#define PARAM3_Cin "cin"
#define PARAM3_A0 "a0"
#define PARAM3_A1 "a1"

extern AsyncWebServer server;

void exp3_init();
void exp3();



