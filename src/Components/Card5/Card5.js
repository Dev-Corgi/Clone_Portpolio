import "./Card5.css";
import { Div } from "../Div/Div";
import MovingMotion from "../../Motion/MovingMotion";
import controllerSet from "../Controller/ScrollController/ControllerSet";
import "../Card/Card.css"
export function Card5 ()  {
  function condition(value){
    if(value>60 && value <76 ){return true}
    return false
}

  return (
    <Div classname="card" stylecomp={{ zIndex: 6, backgroundColor: "#F5F5F5" }} motioncomponent = {new MovingMotion(condition,144.86,0,0,1.2,[0,0,0,0])} inputcontroller = {controllerSet.getValue("globalguage")} eventname = "guageevent">
       <div className="card5_title"><span style={{fontFamily: 'SomeTimes-times'}}>Let's build</span> the next
big thing <span style={{fontFamily: 'SomeTimes-times'}}>together</span></div>
       <div className="card5_keep_frame">
        <div className="card5_keep_text">Keep</div>
       </div>
       <div className="card5_in_frame">
        
        <div className="card5_in_text">In</div>
       </div>
       <div className="card5_touch_frame">
        <div className="card5_touch_text">Touch</div>
       </div>
       <div className="card5_subscribe">Subscribe to the Newsletter →</div>
       <div className="card5_copyright">ⓒ Silvia Sguotti ·</div>
       <div className="card5_domain">A Creative Journey.</div>
       <div className="card5_year">2012-2022</div>
       <div className="card5_design">Design</div>
       <div className="card5_dev">Dev</div>
        </Div> 
  );

};

