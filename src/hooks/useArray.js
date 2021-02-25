import { useCallback, useState } from "react";
export const useArray = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,

    add: useCallback((toAdd) => setValue((value) => [...value, toAdd])),
    changeCaught: useCallback((id) =>
      setValue((arr) => {
        let newArr = arr.map((val) => {
          if (val.id === id) {
            return { ...val, completed: !val.completed };
          }
          return val;
        });
        return newArr;
      })
    ),
    clear: useCallback(() => setValue([])),
    delete: useCallback((id) =>
      setValue((arr) => arr.filter((v) => v && v.id !== id))
    ),
  };
};
