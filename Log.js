class Log extends BaseClass{
    constructor(x, y, height, angle){
var options={
  friction:1.0
}

      super(x,y,20,height,angle,options);
      this.image = loadImage("sprites/wood2.png");
   Matter.Body.setAngle(this.body,angle);
    }
  };
  