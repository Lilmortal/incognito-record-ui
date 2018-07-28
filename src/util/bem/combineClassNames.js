const combineClassNames = (firstClassName, ...additionalClassNames) =>
  `${firstClassName} ${additionalClassNames.map(className => (className !== undefined ? className : '')).join(' ')}`;

export default combineClassNames;
