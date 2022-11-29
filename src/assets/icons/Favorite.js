import * as React from 'react';
import Svg, { Mask, Path, G } from "react-native-svg"
import PropTypes from 'prop-types';
import { colors } from '../../theme';


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
          <Path fill="#D9D9D9" d="M0 0h28v28H0z" />
        </Mask>
        <G mask="url(#a)">
          <Path
            d="m13.067 23.62-.017-.015-2.07-1.868a80.409 80.409 0 0 1-5.673-5.64C3.74 14.37 3 12.521 3 10.525c0-1.606.533-2.897 1.593-3.945C5.653 5.53 6.965 5 8.6 5c.915 0 1.769.19 2.572.57.816.387 1.502.91 2.068 1.572a1 1 0 0 0 1.52 0 6.145 6.145 0 0 1 2.068-1.571A5.93 5.93 0 0 1 19.4 5c1.635 0 2.946.531 4.007 1.58C24.467 7.628 25 8.92 25 10.525c0 1.998-.738 3.853-2.295 5.592-1.671 1.866-3.574 3.748-5.709 5.644l-.006.005-2.04 1.839-.017.016c-.279.264-.575.379-.933.379-.358 0-.654-.116-.933-.38Z"
            fill={props.colorBg}
            stroke={props.colorStroke}
            strokeWidth={2}
            strokeLinejoin="round"
          />
        </G>
      </Svg>
    );
}

Icon.propTypes = {
  colorBg : PropTypes.string,
  colorStroke: PropTypes.string
};

Icon.defaultProps = {
  colorBg : null,
  colorStroke: colors.ACCENT
};

export default Icon;
