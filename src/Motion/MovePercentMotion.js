export default class ScaleMotion  {
    constructor(condition,delay,duration,easetype,movingpercent) {
      this.motionstate = "motion"
      this.condition = condition
      this.initialscale = initialscale
      this.endscale = endscale
      this.rectsize = rectsize
      this.movingpercent = movingpercent
      this.variants = {
        "motion": { right : -movingpercent[0], left : +movingpercent[0], bottom : -movingpercent[1], top : +movingpercent[1],},
      };      
    this.delay = delay
    this.duration = duration
    this.easetype = easetype
    }
  
    handleMotion(input) {
      return "motion"
    }

  }