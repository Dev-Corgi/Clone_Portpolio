import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function WaveText(props) {
  const characters = Array.from(props.text);
  const motioncomponent = props.motioncomponent;
  const inputcontroller = props.inputcontroller;
  const motioncomponents = {};
  const [state, setState] = useState({});
  const [motionstate, setMotionState] = useState("default");
  const fontindexlist = []
  characters.map((character, index) => {
    fontindexlist[index] = null
})

// Extract the index and tag for all matches of the tag pattern
const fontlist = []
const tagMatches = props.text.matchAll(/<\/([^>]*)>/g);
for (const match of tagMatches) {
  fontlist.push(match[1]);
}
const content = props.text.matchAll(/<.*?>(.*?)<\/.*?>/g);
    for (const match of Array.from(content).reverse()) {
  const startIndex = match.index;
  const lastIndex = match[1].length+match.index;
  characters.splice(match[0].indexOf(match[1]) + match[1].length+match.index,match[0].indexOf(match[1])+1)
  characters.splice(match.index,match[0].indexOf(match[1]))
  fontindexlist.splice(match[0].indexOf(match[1]) + match[1].length+match.index,match[0].indexOf(match[1])+1)
  fontindexlist.splice(match.index,match[0].indexOf(match[1]))
  const currentfont = fontlist.pop();
  for (let i = startIndex; i < lastIndex; i++) {
    fontindexlist[i] = currentfont
  }
}

  characters.map((character, index) => {
    const newMotion = Object.create(Object.getPrototypeOf(motioncomponent));
    Object.assign(newMotion, motioncomponent);
    newMotion.delay = props.stepdelay * index;
    motioncomponents[index] = newMotion;
  });

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
    <div className={props.classname}>
      {characters.map((character, index) => (
        <motion.div
          key={index}
          style={{
              fontFamily: (fontindexlist[index] != null ? fontindexlist[index] : null)
            }}
          className= {props.textclassname}
          animate={motioncomponents[index].variants[motionstate]}
          transition={{
            delay: motioncomponents[index].delay,
            duration: motioncomponents[index].duration,
            easetype: motioncomponents[index].easetype,
          }}
        >
          {character}
        </motion.div>
))}
    </div>
  );
}