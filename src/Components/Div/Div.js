import React, {useEffect,useState} from "react";
import {motion} from "framer-motion";


export function Div (props)  {

  const motioncomponent = props.motioncomponent
  const inputcontroller = props.inputcontroller
  const [state, setState] = useState({});
  const [motionstate,setMotionState] = useState(motioncomponent.motionstate)



  useEffect(() => {
    if (inputcontroller != null) {
      const handleMotion = (event) => {
        setMotionState(motioncomponent.handleMotion(event.detail))
        setState({});
      };

      inputcontroller.addEventListener(props.eventname, handleMotion);
    } else {
        setMotionState(motioncomponent.handleMotion("motion"));
      setState({});
    }
  }, []);

  return (
    <motion.div
      className={props.classname}
      animate = {motioncomponent.variants[motionstate]}
      transition = {{delay:motioncomponent.delay, duration : motioncomponent.duration, easetype : motioncomponent.easetype}}
      style={props.stylecomp}
      >
      {props.children}
    </motion.div>
  );
};

