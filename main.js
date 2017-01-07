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
lcd.drawCircle(100, 110, 10, st7735.ST7735_BLUE);
lcd.refresh();
//lcd.drawCircle(width/2,height/2,100,st7735.ST7735_RED);
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
