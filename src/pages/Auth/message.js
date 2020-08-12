import React, { useState } from "react";

export const Message = () => {

  return (
    <div aria-live="polite" aria-atomic="true" style={{ position: "relative", minheight: "200px" }}>
      <div style={{ position: "absolute", top: "0", right: "0" }}>


      <div id="toast2" data-delay="500" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div id="notification" className="toast-body text-white bg-dark">asdasd</div>
      </div>

      <div id="toast1" data-delay="1800" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div id="notification1" className="toast-body text-white bg-dark">kokokoko</div>
      </div>

      </div>
    </div>
  )
}