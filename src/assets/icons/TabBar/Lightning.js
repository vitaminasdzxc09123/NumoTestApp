import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';


function Icon(props) {
    return (
        <Svg
        width={28}
        height={28}
        fill="none"
        {...props}
      >
        <Path
          d="M4.004 15.841 14.771 3.418c.424-.49 1.229-.19 1.229.459V10.3a.7.7 0 0 0 .7.7h6.767a.7.7 0 0 1 .529 1.159L13.229 24.581c-.424.49-1.229.19-1.229-.459V17.7a.7.7 0 0 0-.7-.7H4.533a.7.7 0 0 1-.529-1.159Z"
          stroke={props.color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
}

Icon.propTypes = {
    color : PropTypes.string
};

Icon.defaultProps = {
    color : '#9763FF'
};

export default Icon;
