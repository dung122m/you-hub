import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Thịnh hành", icon: <MdLocalFireDepartment />, type: "category" },
  { name: "Âm nhạc", icon: <CgMusicNote />, type: "category" },
  { name: "Phim", icon: <FiFilm />, type: "category" },
  { name: "Phát trực tiếp", icon: <MdLiveTv />, type: "category" },
  { name: "Trò chơi", icon: <IoGameControllerSharp />, type: "category" },
  { name: "Tin tức", icon: <ImNewspaper />, type: "category" },
  { name: "Thể thao", icon: <GiDiamondTrophy />, type: "category" },
  {
    name: "Học tập",
    icon: <RiLightbulbLine />,
    type: "category",
    divider: true,
  },
  // {
  //   name: "Fashion & beauty",
  //   icon: <GiEclipse />,
  //   type: "category",
  // },
  { name: "Cài đặt", icon: <FiSettings />, type: "menu" },
  // { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Trợ giúp", icon: <FiHelpCircle />, type: "menu" },
  // { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];
