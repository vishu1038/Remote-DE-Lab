#include <Wire.h>    
#include <SparkFunSX1509.h> 
#include <PCF8575.h>

#define SX1509_ADDR (0x3E)
#define PCF_ADDR (0x20)

extern SX1509 io1;           
extern PCF8575 io2;

void ioexpander_startup();

