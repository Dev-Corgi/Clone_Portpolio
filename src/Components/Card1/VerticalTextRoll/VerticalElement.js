import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function VerticalElement(props) {
  const motioncomponent = props.motioncomponent;
  const inputcontroller = props.inputcontroller;
  const motioncomponents = {};
  const [state, setState] = useState({});
  const [motionstate, setMotionState] = useState(motioncomponent.motionstate);



  useEffect(() => {
    if (inputcontroller != null) {
      const handleMotion = (event) => {
        characters.map((character, index) => {
          setMotionState(motioncomponents[index].handleMotion(event.detail));
        });
        setState({});
      };

      inputcontroller.addEventListener(props.eventname, handleMotion);
    } else {
      characters.map((character, index) => {
        setMotionState(motioncomponents[index].handleMotion("motion"));
      });
      setState({});
    }
  }, []);

  return (
        <motion.div
          key={index}
          animate={motioncomponents[index].variants[motionstate]}
          transition={{
            delay: motioncomponents[index].delay,
            duration: motioncomponents[index].duration,
            easetype: motioncomponents[index].easetype,
          }}
        >
          {props.children}
        </motion.div>
  );
}