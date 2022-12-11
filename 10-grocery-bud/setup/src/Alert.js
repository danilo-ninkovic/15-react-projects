import React, { useEffect } from "react";

/* remove alert smo postavili u samoj Alert componenti
jer ce njeno renderovanje trigerovati useEffect 
pomocu kojeg cemo, kad se comp. renderuje ,[] 
postaviti remove alert poslije 2 sec

removeAlert je u stvari showAlert ali ce poslije remove 
biti show:false
*/
const Alert = ({ msg, type, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout); //clean up
  }, [list]); //kad god se promjeni list[]
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
