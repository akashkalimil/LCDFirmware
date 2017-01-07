var st7735 = require('jsupm_st7735');
var lcd = new st7735.ST7735(7, 1, 9, 8);
lcd.fillScreen(st7735.ST7735_RED);
lcd.refresh();

lcd.fillScreen(st7735.ST7735_CYAN);
lcd.refresh();

lcd.fillScreen(st7735.ST7735_BLACK);
lcd.refresh();

lcd.drawCircle(0,0,100,st7735.ST7735_RED);
lcd.refresh();
function FillCircle ( xPos,  yPos,  radius,  color)
// draws filled circle at x,y with given radius & color
{
 var r2 = radius * radius;
 for (var x=0; x<=radius; x++)
 {
 var y = Math.sqrt(r2-x*x);
 var y0 = yPos-y;
 var y1 = yPos+y;
 lcd.drawLine(xPos+x,y0,y1,color);
 lcd.drawLine(xPos-x,y0,y1,color);
 }
    lcd.refresh();
}
FillCircle(0,0,100,st7735.magenta);
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
