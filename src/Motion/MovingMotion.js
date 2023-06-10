export default class MovingMotion  {
    constructor(condition,xspeed, yspeed,delay,duration,easetype) {
      this.motionstate = "motion"
      this.currentX = 0
      this.currentY = 0
      this.xspeed = xspeed
      this.yspeed = yspeed
      this.condition = condition
      this.variants = {
      "motion" : {x:this.currentX,y:this.currentY},
    };
    this.delay = delay
    this.duration = duration
    this.easetype = easetype
    }
  
    handleMotion(input) {
      if(input.state >0 && ((this.condition == null) || (this.condition != null && this.condition(input.value)))){
        this.currentX -= this.xspeed
        this.currentY -= this.yspeed
      }

      else if (input.state <0 && ((this.condition == null) || (this.condition != null && this.condition(input.value)))){
        this.currentX += this.xspeed
        this.currentY += this.yspeed
      }

      this.variants["motion"] = {x:this.currentX,y:this.currentY}
      return "motion"
    }

  }