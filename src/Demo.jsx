// import Timer from "@amplication/react-compound-timer/build";
// import React from "react";

// <Timer initialTime={60000 * 60 * 48 + 5000} lastUnit="h" direction="backward">
//   {() => (
//     <React.Fragment>
//       <Timer.Days /> days
//       <Timer.Hours /> hours
//       <Timer.Minutes /> minutes
//       <Timer.Seconds /> seconds
//       <Timer.Milliseconds /> milliseconds
//     </React.Fragment>
//   )}
// </Timer>

import DateCountdown from "react-date-countdown-timer";
import React from "react";

const Demo = () => {
  return (
    <DateCountdown
    
      dateTo="January 10, 2023 8:05:00 GMT+03:00"
      callback={() => alert("Hello")}
    />
  );
};

export default Demo;
