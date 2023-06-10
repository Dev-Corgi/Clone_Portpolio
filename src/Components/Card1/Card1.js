import { Div } from "../Div/Div";
import MovingMotion from "../../Motion/MovingMotion";
import controllerSet from "../Controller/ScrollController/ControllerSet";
import { WaveText } from "./WaveText/WaveText";
import ScaleMotion from "Motion/ScaleMotion";
import OpacityMotion from "Motion/OpacityMotion";
import StretchWithPercent from "Motion/StretchWithPercent";
import "../Card/Card.css"
import "./Card1.css"
export function Card1 ()  {
   function condition(value){
       if(value>0 && value <16 ){return true}
       return false
   }

  return (
      <Div classname="card" stylecomp={{ zIndex: 10, backgroundColor: "#000000" }} motioncomponent = {new MovingMotion(condition,144.86,0,0,1.2,[0,0,0,0])} inputcontroller = {controllerSet.getValue("globalguage")} eventname = "guageevent">
       <WaveText classname="card1_passion" textclassname = "card1_passion_text" text = "Passion is the point" motioncomponent = {new ScaleMotion(null,0,0.4,[0.25, 0.46, 0.45, 0.94],[1,0],[1,1])} inputcontroller = {null} eventname = {null} stepdelay = {0.02} 
      ></WaveText>
      <WaveText  classname="card1_move" textclassname = "card1_move_text" text = "<SomeTimes-times>Read</SomeTimes-times> the <SomeTimes-times>mani</SomeTimes-times>festo→" motioncomponent = {new ScaleMotion(null,0,0.4,[0.25, 0.46, 0.45, 0.94],[1,0],[1,1])} inputcontroller = {null} eventname = {null} stepdelay = {0.02} 
      ></WaveText>

        <Div classname="card1_line1" motioncomponent = {new StretchWithPercent(null,0,3,[0.42, 0, 1, 1],[51.92,100,48.08,0],[51.92,41.46,48.08,0])} inputcontroller = {null} eventname = {null}></Div>
        <Div classname="card1_line2" motioncomponent = {new StretchWithPercent(null,0,3,[0.42, 0, 1, 1],[0,41.39,100,58.54],[0,41.39,0,58.54])} inputcontroller = {null} eventname = {null}></Div> 
        <div className="card1_line3"></div>
        <Div classname="card1_line4" motioncomponent = {new StretchWithPercent(null,0,3,[0.25, 0.46, 0.45, 0.94],[59.35,41.46,40.65,58.54],[59.35,14.3,40.65,58.54])} inputcontroller = {null} eventname = {null}></Div>
        <WaveText  classname="card1_creative" textclassname = "card1_creative_text" text = "A Creative Journey 2012-2022" motioncomponent = {new OpacityMotion(null,0.1,1,[0.25, 0.46, 0.45, 0.94],1)} inputcontroller = {null} eventname = {null} stepdelay = {0.02} 
      ></WaveText>
      <WaveText  classname="card1_silvia" textclassname = "card1_silvia_text" text = "<SomeTimes-times>S​</SomeTimes-times>ilvia <SomeTimes-times>S​</SomeTimes-times>guotti" motioncomponent = {new ScaleMotion(null,0,0.7,[0.25, 0.46, 0.45, 0.94],[1,0],[1,1])} inputcontroller = {null} eventname = {null} stepdelay = {0.02} 
      ></WaveText>
        </Div> 
  );

};

