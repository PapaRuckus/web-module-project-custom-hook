import { useState } from "react";

const useDarkMode = (intialValue) => {
  const [darkMode, setDarkMode] = useState(intialValue);
  return [darkMode, setDarkMode];
};

export default useDarkMode;
