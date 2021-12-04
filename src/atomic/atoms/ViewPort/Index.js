import {useEffect, useState} from "react";

const ViewPort = ({ min = 0, max=Infinity, children }) => {
    const [isMatch, setMatch] = useState( window.innerWidth > min && window.innerWidth < max );
  
    const updateMedia = () => {
      setMatch( window.innerWidth > min && window.innerWidth < max );
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    }, []);
  
    return isMatch ? children : null;
};
export default ViewPort;
