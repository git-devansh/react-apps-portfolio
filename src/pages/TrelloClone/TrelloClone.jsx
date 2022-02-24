import React, { useEffect } from "react";

function TrelloClone() {
  useEffect(() => {
    window.location.replace("https://trelloclonereactapp.herokuapp.com/");
    return;
  }, []);

  return (
    <div>
      Redirecting to.. (https://trelloclonereactapp.herokuapp.com/). Please use
      that link if its not working! Thanks
    </div>
  );
}

export default TrelloClone;
