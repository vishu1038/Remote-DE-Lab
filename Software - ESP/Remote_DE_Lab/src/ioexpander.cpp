#include "ioexpander.h"

SX1509 io1;           
PCF8575 io2(PCF_ADDR);

void ioexpander_startup()
{
    Wire.begin(21,22);
    io2.begin();
    io1.begin(SX1509_ADDR);
}