import * as React from 'react';
import Svg, { Mask, Path, G, Circle } from "react-native-svg"
import PropTypes from 'prop-types';

function Icon(props) {
    return (
     <Svg
        width={28}
        height={28}
        fill="none"
        {...props}
      >
        <Mask
          id="a"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={28}
          height={28}
        >
          <Path fill={props.color} d="M0 0h28v28H0z" />
        </Mask>
        <G stroke={props.color} strokeWidth={2}>
          <Circle cx={14} cy={14} r={11} />
          <Path d="M14 9v5h4" strokeLinecap="round" strokeLinejoin="round" />
        </G>
      </Svg>
    );
}

Icon.propTypes = {
    color : PropTypes.string
};

Icon.defaultProps = {
    color : '#D9D9D9'
};

export default Icon;
