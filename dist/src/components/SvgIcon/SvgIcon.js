import '../../../node_modules/external-svg-loader/dist/svg-loader.min.js';
import React from 'react';

function SvgIcon({ iconName, size = "24px", className = "", onClick }) {
    return (React.createElement(React.Fragment, null,
        React.createElement("span", { onClick: onClick, className: `material-symbols-outlined ${className}`, style: { fontSize: size } }, iconName)));
}

export { SvgIcon };
