import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, bgColor, ...otherProps }) => {
   return (
      <button 
         className={`${bgColor ? 'google-sign-in' : ''} custom-button`} 
         {...otherProps}>
         {children}
      </button>
   );
};

export default CustomButton;