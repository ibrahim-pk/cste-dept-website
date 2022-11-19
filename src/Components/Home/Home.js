import React from "react";
import { Link } from "react-router-dom";
import CarouselHome from "./Carousel/CarouselHome";
import CSTEClubHome from "./CSTEClubHome/CSTEClubHome";
import MessageFromChairman from "./MessageFromChairman/MessageFromChairman";
import NewsHome from "./News/News";
import NoticeHome from "./Notice/NoticeHome";
import ResearchHome from "./Research/Research";

export default function Home() {
  return (
    <>
      <CarouselHome />

      <MessageFromChairman />
      <div className="flex flex-col md:flex-row gap-4 max-w-screen-xl p-4 mx-auto w-full my-20">
        <div className="w-full flex-1">
          <NewsHome />
        </div>
        <div className="w-full flex-1">
          <NoticeHome />
        </div>
      </div>
      <ResearchHome />
      <CSTEClubHome />
    </>
  );
}
