/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
// Leave the above lines for propper jshinting

/*
    The Serial Peripheral Interface (SPI) sample application distributed within Intel® XDK IoT Edition under the IoT with Node.js Projects project creation option showcases how to communicate with SPI devices with Intel(R) IoT platforms such as Intel(R) Edison as the master device.

	This sends 4 bytes on MOSI and if connected correctly will yield a 4 buffer object with the result on MISO and print both. Connect MOSI to MISO and input should match the result
	Acceptable parameters to the SPI constructor depends on the amount of SPI buses & chip selects you have. Mraa considers every chip select on every bus to be represented by a SPI object. But 0 is always the default.
	SPI pins are 10/11/12 on an Intel(R) Edison Arduino type board.
		* Pin 10 >> SS
		* Pin 11 >> MOSI
		* Pin 12 >> MISO
		* Pin 13 >> SCK
	
    MRAA - Low Level Skeleton Library for Communication on GNU/Linux platforms
    Library in C/C++ to interface with Galileo & other Intel platforms, in a structured API with port names/numbering that match compatible boards & with bindings to javascript.

    Steps for installing MRAA & UPM Library on Intel IoT Platform with IoTDevKit Linux* image and an active internet connection
    Using a ssh client: 
	    1. echo "src maa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/intel-iotdk.conf
	    2. opkg update
	    3. opkg upgrade

    Article: https://software.intel.com/en-us/node-js-templates-for-intel-xdk-iot-edition
*/
//SPI: 10 (SS), 11 (MOSI), 12 (MISO), 13 (SCK)
// DC 9 
// reset 8  



////gpio init


var sleep = require('sleep'); 
var m = require('mraa'); //require mraa


var SWRESET =0x01; // software reset
var SLPOUT = 0x11; // sleep out
var DISPOFF = 0x28; // display off
var DISPON = 0x29; // display on
var CASET = 0x2A; // column address set
var RASET = 0x2B; // row address set
var RAMWR = 0x2C; // RAM write
var MADCTL = 0x36; // axis control
var COLMOD = 0x3A; // color mode
// 1.8" TFT display constants
var XSIZE = 128;
var YSIZE =160;
var XMAX = XSIZE-1;
var YMAX  = YSIZE-1;
// Color constants
var BLACK = 0x0000;
var BLUE = 0x001F;
var RED = 0xF800;
var GREEN = 0x0400;
var LIME = 0x07E0;
var CYAN = 0x07FF;
var MAGENTA = 0xF81F;
var YELLOW = 0xFFE0;
var WHITE = 0xFFFF;


var GPIO9 = new m.Gpio(9); //setup Digital pin #9 (D9)  DC
GPIO9.dir(m.DIR_OUT); //set the gpio direction to output

var GPIO8 = new m.Gpio(8); //setup Digital pin #8 (d8) reset
GPIO8.dir(m.DIR_OUT); // set the gpio direction to output

var transfer = new m.Spi(0); //spi bus

function WriteData(byte){
    buf = new Buffer(1);
    buf[0] = byte;
    transfer.write(buf);
}

function WriteCmd(byte){
    var buf = new Buffer(1);
    buf[0] = byte;
    
    GPIO9.write(0);
    transfer.write(buf);
    GPIO9.write(1);
}

function HardwareReset(){
    GPIO8.write(0); //pulling line temporarily low
    sleep.usleep(1000);// 1 ms delay
    GPIO8.write(1);
}

 
function initDisplay(){
    HardwareReset();
    WriteCmd(SLPOUT);
    sleep.usleep(1500); //150ms delay
    WriteCmd(COLMOD);
    WriteData(0x05);
    WriteCmd(DISPON);
    
}

function spitest(){
   buf = new Buffer(1);
    buf[0] = 0x01;
    transfer.write(buf);
}

console.log('MRAA Version: ' + m.getVersion()); //write the mraa version to the console

//initDisplay();
spitest();
console.log('done');