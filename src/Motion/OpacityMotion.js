export default class OpacityMotion  {
    constructor(condition,delay,duration,easetype,opacity) {
      this.motionstate = "motion"
      this.condition = condition
      this.opacity = opacity
      this.variants = {
      "motion" : {opacity: 1},
    };
    this.delay = delay
    this.duration = duration
    this.easetype = easetype
    }
  
    handleMotion(input) {
      return "motion"
    }

  }