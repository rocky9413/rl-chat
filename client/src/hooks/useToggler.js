import { useState } from 'react';

const useToggler = (defaultOnValue = false) => {
  const [isToggledOn, setIsToggledOn] = useState(defaultOnValue);

  const toggle = () => setIsToggledOn(prev => !prev);

  return [isToggledOn, toggle];
};

export default useToggler;
