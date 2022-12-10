#include "webserver.h"
#include "ioexpander.h"

//ESP Pins
#define EXP6A_IO1_A 19
#define EXP6A_IO1_B 6

#define EXP6A_IO1_Y3 10
#define EXP6A_IO1_Y1 9
#define EXP6A_IO1_Y2 9

//Server parameters
#define PARAM6A_A "a"
#define PARAM6A_B "b"

extern AsyncWebServer server;

void exp6a_init();
void exp6a();



