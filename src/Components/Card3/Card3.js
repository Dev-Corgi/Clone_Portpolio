import "./Card3.css";
import { Div } from "../Div/Div";
import MovingMotion from "../../Motion/MovingMotion";
import controllerSet from "../Controller/ScrollController/ControllerSet";
import "../Card/Card.css"
export function Card3() {
  function condition(value){
    if(value>30 && value <46 ){return true}
    return false
}

  return (
<Div classname="card" stylecomp={{ zIndex: 8, backgroundColor: "#F5F5F5" }} motioncomponent = {new MovingMotion(condition,144.86,0,0,1.2,[0,0,0,0])} inputcontroller = {controllerSet.getValue("globalguage")} eventname = "guageevent">
      <div className="card3_title">
        Creator <span style={{fontFamily: 'SomeTimes-times'}}>of</span>  Quality Design And Thinker of Freash Ideas
      </div>
      <div className="card3_subtitle">
        I’m an art director, graphic designer, and digital artist with over 9
        years’ experience and a degree in Design of Industrial Products. I study
        experiences to create brand identities.
      </div>
      <div className="card3_description">
        I’m curious, passionate, and strive for continuous evolution. I’ve made
        creativity my lifestyle. Currently, I work as an independent Art
        Director, Graphic Designer & Illustrator. Ever since I was a kid, art
        has been what makes me tick. To this day, art is what moves me to
        explore and play around with new shapes and techniques to find solutions
        that are appealing and efficient
      </div>
      <div className="card3_picture"></div>
    </Div>
  );
}
