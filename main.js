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


var SWRESET =char('0x01'); // software reset
var SLPOUT = char('0x11'); // sleep out
var DISPOFF = char('0x28'); // display off
var DISPON = char('0x29'); // display on
var CASET = char('0x2A'); // column address set
var RASET = char('0x2B'); // row address set
var RAMWR = char('0x2C'); // RAM write
var MADCTL = char('0x36'); // axis control
var COLMOD = char('0x3A'); // color mode
// 1.8" TFT display constants
var XSIZE = 128;
var YSIZE =160;
var XMAX = XSIZE-1
var YMAX  = YSIZE-1
// Color constants
var BLACK = char('0x0000');
var BLUE = char('0x001F');
var RED = char('0xF800');
var GREEN = char('0x0400');
var LIME = char('0x07E0');
var CYAN = char('0x07FF');
var MAGENTA = char('0xF81F');
var YELLOW = char('0xFFE0');
var WHITE = char('0xFFFF');


var GPIO9 = new m.Gpio(9); //setup Digital pin #9 (D9)  DC
GPIO9.dir(mraa.DIR_OUT); //set the gpio direction to output

var GPIO8 = new m.Gpio(8) //setup Digital pin #8 (d8) reset
GPIO8.dir(mraa.DIR_OUT); // set the gpio direction to output
var transfer = new m.Spi(0);


GPIO5.write(0); //set the digital pin to high (1)


function WriteCmd(byte){
    GPIO9.write(0);
    transfer.write(byte);
    GPIO9.write(1);
}

function HardwareReset(){
    GPIO8.write(0); //pulling line temporarily low
    sleep.usleep(1000);// 1 ms delay
    GPI08.write(1);
}
function char(x) { 
	return parseInt(x, 16); 
}

function initDisplay(){
    HardwareReset();
    WriteCmd(SLPOUT);
    sleep.usleep(1500); //150ms delay
    WriteCmd(COLMOD);
    transfer.write(char('0x05'));
    WriteCMD(DISPON);
    
}

console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

initDisplay();
console.log('done');