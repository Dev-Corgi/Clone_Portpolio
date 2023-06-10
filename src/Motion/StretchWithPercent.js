export default class StretchWithPercent  {
    constructor(condition,delay,duration,easetype,initialrect,endrect) {
      this.motionstate = "motion"
      this.condition = condition
      this.initialrect = initialrect
      this.endrect = endrect
      this.variants = {
        "motion": { top : [initialrect[0]+"%",endrect[0]+"%"], right : [initialrect[1]+"%",endrect[1]+"%"], bottom : [initialrect[2]+"%",endrect[2]+"%"], left : [initialrect[3]+"%",endrect[3]+"%"] },
      };      
    this.delay = delay
    this.duration = duration
    this.easetype = easetype
    }
  
    handleMotion(input) {
      return "motion"
    }

  }