const createBem = block => (modifier, element) => {
  let className = block;

  if (modifier) {
    className += `__${modifier}`;
  }

  if (element) {
    className = `${className} ${className}--${element}`;
  }

  return className;
};

export default createBem;
