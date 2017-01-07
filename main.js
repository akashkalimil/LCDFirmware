var st7735 = require('jsupm_st7735');
var lcd = new st7735.ST7735(7, 1, 9, 8);

lcd.fillScreen(st7735.ST7735_RED);
lcd.refresh();
lcd.fillScreen(st7735.ST7735_CYAN);
lcd.refresh();

lcd.fillScreen(st7735.ST7735_BLACK);
lcd.refresh();
//128 x 160 display
//lcd.Circle(64,80,50,st7735.ST7735_RED);
lcd.refresh();
function fillrectangle(x0, y0, x1, y1, color){
 var width = x1 - x0 +1;
 var height = y1 - y0 +1;
 
while (y0<= y1){
    lcd.drawLine(x0,y0,x1,y0,color);
    y0+=1;
    
}
    lcd.refresh();
    lcd.sdCSOn();

}

//fillrectangle(0,0,100,100,st7735.ST7735_RED);
var width = 128;
var height = 160;


function FillCircle (xPos, yPos, radius, color)
// draws filled circle at x,y with given radius & color
{
 var r2 = radius * radius;
 for (var x=0; x<=radius; x++)
 {
 var y = Math.sqrt(r2-x*x);
 var y0 = yPos-y;
 var y1 = yPos+y;
 lcd.drawLine(xPos+x,y0,xPos+x,y1,color);
 lcd.drawLine(xPos - x,y0,xPos-x, y1,color);
 }
     lcd.refresh();
   //s lcd.sdCSOn();
}
//lcd.drawCircle(100, 110, 10, st7735.ST7735_BLUE);
//lcd.drawCircle((width/2)-1,(height/2)-1,60,st7735.ST7735_RED);
lcd.refresh();
FillCircle((width/2)-1,(height/2)-1,60,st7735.ST7735_GREEN);
FillCircle((width/2)-1,(height/2)-1,52,st7735.ST7735_BLACK);
lcd.refresh();

function setup_hour(){
for (var i = 0; i < 360; i += 30) {
    var sx = Math.cos((i - 90) * 0.0174532925);
    var sy = Math.sin((i - 90) * 0.0174532925);
    var x0 = sx * 56 + (width/2)-1;
    var yy0 = sy * 56 + (height/2)-1;
    var x1 = sx * 42 + (width/2)-1;
    var yy1 = sy * 42 + (height/2)-1;

    lcd.drawLine(x0, yy0, x1, yy1, st7735.ST7735_YELLOW);//garis penanda angka jam
    lcd.refresh();
  }
}

for (var i = 0; i < 360; i += 6) {
    var sx = Math.cos((i - 90) * 0.0174532925);
    var sy = Math.sin((i - 90) * 0.0174532925);
    var x0 = sx * 102 + (width/2)-1;
    var yy0 = sy * 102 + (height/2)-1;
    // Draw minute markers
    lcd.drawPixel(x0, yy0, st7735.ST7735_WHITE); //titik penanda menit
}
    lcd.refresh();

setup_hour();
/*
lcd.refresh();

lcd.drawPixel(20, 20, st7735.ST7735_GREEN);
lcd.refresh();

lcd.drawTriangle(50, 50, 80, 80, 60, 90, st7735.ST7735_GREEN);
lcd.refresh();

lcd.drawCircle(100, 110, 10, st7735.ST7735_BLUE);
lcd.refresh();

lcd.setTextWrap(0x0);

lcd.setCursor(0, 30);
lcd.setTextColor(st7735.ST7735_RED, st7735.ST7735_RED);
lcd.setTextSize(1);
lcd.print('Hello World!');

lcd.setCursor(10, 50);
lcd.setTextColor(st7735.ST7735_RED, st7735.ST7735_RED);
lcd.setTextSize(2);
lcd.print('BIG');

lcd.refresh();*/
