#include "webserver.h"
#include "ioexpander.h"

//ESP Pins
#define EXP6A_IO1_A 10
#define EXP6A_IO1_B 11

#define EXP6A_IO1_Y3 12
#define EXP6A_IO1_Y1 13
#define EXP6A_IO1_Y2 14

//Server parameters
#define PARAM6A_A "a"
#define PARAM6A_B "b"

extern AsyncWebServer server;

void exp6a_init();
void exp6a();



