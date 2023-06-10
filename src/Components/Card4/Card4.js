import "./Card4.css";
import { Div } from "../Div/Div";
import MovingMotion from "../../Motion/MovingMotion";
import controllerSet from "../Controller/ScrollController/ControllerSet";
import "../Card/Card.css"
export function Card4 ()  {
  function condition(value){
    if(value>45 && value <61 ){return true}
    return false
}

  return (
    <Div classname="card" stylecomp={{ zIndex: 7, backgroundColor: "#000000" }} motioncomponent = {new MovingMotion(condition,144.86,0,0,1.2,[0,0,0,0])} inputcontroller = {controllerSet.getValue("globalguage")} eventname = "guageevent">
        <div className="card4_content-layout">
          <div className="card4_content-frame">
            <div className="card4_content_role">Art Direction</div>
            <div className="card4_content_role-frame"></div>
            <div className="card4_content_picture" style={{ background : 'url('+'../../Assets/content1.png'+')'}}></div>
            <div className="card4_content_title">1. Self Branding</div>
            <div className="card4_content_discover">DISCOVER →</div>
          </div>

          <div className="card4_content-frame">
            <div className="card4_content_role">Art Direction</div>
            <div className="card4_content_role-frame"></div>
            <div className="card4_content_picture" style={{ background : 'url('+'../../Assets/content2.png'+')'}}></div>
            <div className="card4_content_title">2. Nathaniel Drew</div>
            <div className="card4_content_discover">DISCOVER →</div>
          </div>

          <div className="card4_content-frame">
            <div className="card4_content_role">Art Direction</div>
            <div className="card4_content_role-frame"></div>
            <div className="card4_content_picture" style={{ background : 'url('+'../../Assets/content3.png'+')'}}></div>
            <div className="card4_content_title">3. Yubi</div>
            <div className="card4_content_discover">DISCOVER →</div>
          </div>

          <div className="card4_content-frame">
            <div className="card4_content_role">Art Direction</div>
            <div className="card4_content_role-frame"></div>
            <div className="card4_content_picture" style={{ background : 'url('+'../../Assets/content4.png'+')'}}></div>
            <div className="card4_content_title">4. PIQ</div>
            <div className="card4_content_discover">DISCOVER →</div>
          </div>

          <div className="card4_content-frame">
            <div className="card4_content_role">Art Direction</div>
            <div className="card4_content_role-frame"></div>
            <div className="card4_content_picture" style={{ background : 'url('+'../../Assets/content5.png'+')'}}></div>
            <div className="card4_content_title">5. Gelateria Giotto</div>
            <div className="card4_content_discover">DISCOVER →</div>
          </div>


          <div className="card4_content-frame">
            <div className="card4_content_role">Art Direction</div>
            <div className="card4_content_role-frame"></div>
            <div className="card4_content_picture" style={{ background : 'url('+'../../Assets/content6.png'+')'}}></div>
            <div className="card4_content_title">6. Sicea</div>
            <div className="card4_content_discover">DISCOVER →</div>
          </div>
        </div>
        </Div> 
  );

};

