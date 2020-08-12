import {useCallback} from "react";

export const useMessage = () => {
  return useCallback(text => {
    document.getElementById("notification").innerHTML = text;
    if ( text ) {
      window.$("#toast").toast("show");
    }
  }, []);
};