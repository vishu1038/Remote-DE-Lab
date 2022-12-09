#include "webserver.h"

//ESP Pins
#define EXP2_CO  23
#define EXP2_S3  36
#define EXP2_S2  39
#define EXP2_S1  34
#define EXP2_S0  35

#define EXP2_A3 13
#define EXP2_A2 12
#define EXP2_A1 14
#define EXP2_A0 27
#define EXP2_B3 26
#define EXP2_B2 25
#define EXP2_B1 33
#define EXP2_B0 32
#define EXP2_Cin 22

//Server parameters
#define PARAM2_A3 "a3"
#define PARAM2_A2 "a2"
#define PARAM2_A1 "a1"
#define PARAM2_A0 "a0"
#define PARAM2_B3 "b3"
#define PARAM2_B2 "b2"
#define PARAM2_B1 "b1"
#define PARAM2_B0 "b0"
#define PARAM2_Cin "cin"

extern AsyncWebServer server;

void exp2();



