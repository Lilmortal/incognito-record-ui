const combineClassNames = (firstClassName, secondClassName) =>
  `${firstClassName} ${secondClassName !== null ? secondClassName : ""}`;

export default combineClassNames;
