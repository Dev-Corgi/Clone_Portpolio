import "./Card2.css";
import { Div } from "../Div/Div";
import MovingMotion from "../../Motion/MovingMotion";
import controllerSet from "../Controller/ScrollController/ControllerSet";
import "../Card/Card.css"
export function Card2 ()  {
  function condition(value){
    if(value>15 && value <31 ){return true}
    return false
}

  return (
      <Div  classname="card" stylecomp={{ zIndex: 9, backgroundColor: "#FAC612" }} motioncomponent = {new MovingMotion(condition,144.86,0,0,1.2,[0,0,0,0])} inputcontroller = {controllerSet.getValue("globalguage")} eventname = "guageevent">
        <div className="card2_feature" style={{left : '14.61%', top: '15.67%'}}>
          <div className="card2_feature_indexnumber">1</div>
          <div className="card2_feature_numberframe"></div>
          <div className="card2_feature_topline"></div>
          <div className="card2_feature_text1">The importance of an idea</div>
          <div className="card2_feature_text2">Right concept, right client</div>
          <div className="card2_feature_text3">Unique, recognizable projects have a strong concept to hold them up.</div>
        </div>

        <div className="card2_feature" style={{left : '14.61%', top: '35.65%'}}>
          <div className="card2_feature_indexnumber">1</div>
          <div className="card2_feature_numberframe"></div>
          <div className="card2_feature_topline"></div>
          <div className="card2_feature_text1">The importance of an idea</div>
          <div className="card2_feature_text2">Right concept, right client</div>
          <div className="card2_feature_text3">Unique, recognizable projects have a strong concept to hold them up.</div>
        </div>

        <div className="card2_feature" style={{left : '14.61%', top: '55.64%'}}>
          <div className="card2_feature_indexnumber">1</div>
          <div className="card2_feature_numberframe"></div>
          <div className="card2_feature_topline"></div>
          <div className="card2_feature_text1">The importance of an idea</div>
          <div className="card2_feature_text2">Right concept, right client</div>
          <div className="card2_feature_text3">Unique, recognizable projects have a strong concept to hold them up.</div>
        </div>

        <div className="card2_bottomtext">Passion <span style={{fontFamily: 'SomeTimes-times'}}>is</span> the point</div>
        </Div> 
  );

};

