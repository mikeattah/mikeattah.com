import React from 'react';

const Button: React.FC = ({ buttonType }) => {
  if (buttonType === 'primary') {
    return <button>Primary</button>;
  } else if (buttonType === 'secondary') {
    return <button>Secondary</button>;
  }
  return <button>Tertiary</button>;
};

export default Button;