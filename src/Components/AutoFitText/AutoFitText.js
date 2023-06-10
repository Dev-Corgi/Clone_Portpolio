// import React, { useRef, useEffect, useState } from 'react';

// function AutoFitText(props) {
//   const containerRef = useRef(null);
//   const [fontSize, setFontSize] = useState(16);

//   useEffect(() => {
//     const containerWidth = containerRef.current.offsetWidth;
//     const textWidth = getTextWidth(props.text, fontSize);
//     const scaleFactor = containerWidth / textWidth;
//     const newFontSize = Math.floor(fontSize * scaleFactor);
//     setFontSize(newFontSize);
//   }, [props.text, fontSize]);

//   function getTextWidth(text, fontSize) {
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');
//     ctx.font = `${fontSize}px sans-serif`;
//     return ctx.measureText(text).width;
//   }

//   return (
//     <div ref={containerRef} style={props.style}>
//       <p style={{ fontSize: `${fontSize}px` }}>{props.text}</p>
//     </div>
//   );
// }

// export default AutoFitText;