import React, { useEffect } from "react";

function WeatheNext() {
  useEffect(() => {
    window.location.replace("https://weatherappnext.herokuapp.com/");
    return;
  }, []);

  // componentDidMount(){
  //     window.location.replace('https://weatherappnext.herokuapp.com/')
  //     }
  return (
    <div>
      Redirecting to.. (https://weatherappnext.herokuapp.com/). Please use that
      link if its not working! Thanks
    </div>
  );
}

export default WeatheNext;
