import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
  const videoLengthInSeconds = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");
  return (
    <div className="absolute bottom-2 right-2 bg-black text-sm px-1 text-white rounded-md">
      {videoLengthInSeconds}
    </div>
  );
};

export default VideoLength;
