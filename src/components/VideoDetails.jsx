import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionVideoCard";
const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);
  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);
  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      //console.log(res);
      setVideo(res);
      setLoading(false);
    });
  };
  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideos(res);
      setLoading(false);
    });
  };
  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] overflow-hidden xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https:/www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              autoPlay="true"
              allow="autoplay; encrypted-media"
              playing={true}
            />
          </div>
          <div className="text-white font-bold text-sm md:text-xl pb-6 mt-4 line-clamp-2">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row ">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img src={video?.author?.avatar[0]?.url} alt="" />
                </div>
              </div>
              <div className="flex flex-col  ml-4 text-white">
                <div className="flex flex-row items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                  )}
                </div>

                <div className="text-xs text-white/[0.7] font-extralight">
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
              <div className="ml-8 flex items-center">
                <button className=" text-black items-center text-base bg-white rounded-full px-3 py-1 hover:opacity-80">
                  Đăng ký
                </button>
              </div>
              <div className="flex text-white mt-4 md:mt-0 items-center">
                <div className="flex items-center justify-center ml-10 h-10 px-6 rounded-3xl bg-white/[0.15]">
                  <AiOutlineLike className="text-xl text-white mr-2" />
                  <span> {`${abbreviateNumber(video?.stats?.likes, 2)} `}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF1A]  rounded-lg w-full mt-4 h-40">
            <div className="mx-4 my-4">
              <div className="text-white font-sans font-semibold text-[14px]">
                <span>
                  {`${abbreviateNumber(video?.stats?.views, 2)} `} lượt xem
                </span>
                <span className="ml-2 text-white/[0.5]">
                  {video?.superTitle?.items[0]}
                </span>
                <div className="mt-4">
                  <span className="  text-white">
                    {`${abbreviateNumber(
                      video?.stats?.comments,
                      2
                    )} lượt bình luận `}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col py-6 px-4 scrollbar-hide overflow-y-auto lg:w-[350px] xl:[400px]">
          {relatedVideos?.contents?.map((item, index) => {
            if (item.type !== "video") return false;
            return <SuggestionVideoCard key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
