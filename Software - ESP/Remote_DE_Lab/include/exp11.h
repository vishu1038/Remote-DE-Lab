#include "webserver.h"
#include "ioexpander.h"

//ESP Pins
#define EXP11_IO2_MC 0
#define EXP11_IO2_CLK 1
#define EXP11_IO2_QB 2
#define EXP11_IO2_QA 3
#define EXP11_IO2_QC 4
#define EXP11_IO2_QD 5

#define EXP11_IO2_A 15
#define EXP11_IO2_B 14
#define EXP11_IO2_C 13
#define EXP11_IO2_D 12

//Server parameters
#define PARAM11_MC "mc"
#define PARAM11_CLK "clk"
#define PARAM11_QB "qb"
#define PARAM11_QA "qa"
#define PARAM11_QC "qc"
#define PARAM11_QD "qd"

extern AsyncWebServer server;

void exp11_init();
void exp11();



