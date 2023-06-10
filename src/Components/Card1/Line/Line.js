import "./Card1.css";
import { Card } from "../Card/Card";
import MovingMotion from "../../Motion/MovingMotion";
import controllerSet from "../Controller/ScrollController/ControllerSet";
import { WaveText } from "./WaveText/WaveText";
import ScaleMotion from "Motion/ScaleMotion";
import OpacityMotion from "Motion/OpacityMotion";
import { MotionConfig } from "framer-motion";
export function Card1 (props)  {
   props.length
   props.width
   props.color

   function condition(value){
       if(value>0 && value <16 ){return true}
       return false
   }

  return (
      <motion.div style = {{}}></motion.div>
  );

};

