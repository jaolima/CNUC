import React from 'react';

// eslint-disable-next-line react/prop-types
const Bar = ({ svgRef }) => (
  <svg viewBox="0 0 1938 21.217" ref={svgRef}>
    <defs>
      <style>{'.a{fill:#136235;}.b{filter:url(#a);}'}</style>
      <filter id="a" x={0} y={0} width="100%" height={21.217} filterUnits="userSpaceOnUse">
        <feOffset dy={3} input="SourceAlpha" />
        <feGaussianBlur stdDeviation={3} result="b" />
        <feFlood floodOpacity={0.161} />
        <feComposite operator="in" in2="b" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g className="b" transform="matrix(1, 0, 0, 1, 0, 0)">
      <path
        className="a"
        d="M6.1,0H1913.9c3.37,0,6.1.017,6.1.038V3.179c0,.021-2.732.038-6.1.038H6.1C2.732,3.217,0,3.2,0,3.179V.038C0,.017,2.732,0,6.1,0Z"
        transform="translate(9 6)"
      />
    </g>
  </svg>
);

// eslint-disable-next-line react/jsx-props-no-spreading
const ForwardRef = React.forwardRef((props, ref) => <Bar svgRef={ref} {...props} />);
export default ForwardRef;
