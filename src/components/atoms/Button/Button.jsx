export const Button = ({ buttonType }) => {
  if (buttonType === 'primary') {
    return <button>Primary</button>;
  } else if (buttonType === 'secondary') {
    return <button>Secondary</button>;
  }
  return <button>Tertiary</button>;
};
