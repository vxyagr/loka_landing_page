import { useSetAtom } from "jotai";
import { useAtom } from "jotai";
import snakeLogo from "../assets/loka_landing_logo.png";
import { isModalOpenAtom, isBuyModalOpenAtom } from "../store/modal";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppProvider";
import { useMediaQuery } from "react-responsive";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout, Row, Col, Button, theme } from "antd";
import Icon, {
  PoweroffOutlined,
  CloseOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import "./style.css";
const IconConnect = () => (
  <svg
    width="20"
    height="10"
    viewBox="0 0 20 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.25 0.833375H5.83333C3.53214 0.833375 1.66666 2.69886 1.66666 5.00004C1.66666 7.30123 3.53214 9.16671 5.83333 9.16671H7.5C9.80118 9.16671 11.6667 7.30123 11.6667 5.00004M13.75 9.16671H14.1667C16.4679 9.16671 18.3333 7.30123 18.3333 5.00004C18.3333 2.69886 16.4679 0.833374 14.1667 0.833374H12.5C10.1988 0.833374 8.33333 2.69886 8.33333 5.00004"
      stroke="white"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default function Header() {
  const [isButtonOpen, setIsButtonOpen] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1080px)",
  });

  const [collapsed, setCollapsed] = useState(false);
  const {
    loginInstance,
    setCanisterActor,
    setGameData,
    setUserData,
    walletAddress,
    setWalletAddress,
  } = useContext(AppContext);
  const [isBuyModalOpen, setBuyModalOpen] = useAtom(isBuyModalOpenAtom);

  useEffect(() => {
    let timer;

    if (isButtonOpen) {
      // If the accordion is open, set a timer to close it after 3 seconds
      timer = setTimeout(() => {
        setIsButtonOpen(false);
      }, 3000);
    }

    return () => {
      // Clear the timer when the component unmounts or the state changes
      clearTimeout(timer);
    };
  }, [isButtonOpen]);
  return (
    <nav className="fixed  grid w-full">
      <div className="bg-[#65b2a5] sticky lg:px-[10%] p-5  w-full h-14 lg:h-20 flex justify-center items-center text-sm lg:text-base sticky-header">
        <div className="w-full flex items-center justify-between">
          <div className="w-24 lg:w-34">
            <img src={snakeLogo} alt="Logo" />
          </div>
          {isDesktopOrLaptop ? (
            <div className="flex items-center gap-5 font-semibold text-white">
              <a
                href="https://blog.lokamining.com"
                target="blank"
                className="py-1 px-2 lg:py-2.5 lg:px-4"
              >
                Blog
              </a>
              <a
                href="https://go.lokamining.com/about"
                target="blank"
                className="py-1 px-2 lg:py-2.5 lg:px-4"
              >
                About
              </a>
              <a
                href="https://miner.lokamining.com"
                target="blank"
                className="py-1 px-2 lg:py-2.5 lg:px-4 flex "
              >
                <span className="pr-1">Miners </span>
                <div className="text-center justify-center items-center text-xs bg-gradient-to-r from-2b47b4 to-854498 rounded-xl p-1 px-2">
                  Beta
                </div>
              </a>
              <a href="https://discord.gg/yDytXMMDs9" target="blank">
                <div className=" border-warm-white border p-2 px-4 rounded-3xl">
                  Join Discord
                </div>
              </a>
            </div>
          ) : (
            <div className="flex items-center gap-3 font-semibold right-0">
              <Button
                type="text"
                className="toogle-collapse-button"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                  color: "white",
                }}
              />
            </div>
          )}
        </div>
      </div>

      {collapsed && !isDesktopOrLaptop ? (
        <div className="h-[100vh] text-white bg-white bg-opacity-80 mt-4 space-y-4 p-5 text-center justify-center transition duration-300 ease-in-out">
          <div className="grid text-lg w-full items-center text-center gap-3 font-semibold text-[#1E3557]">
            <a
              href="https://blog.lokamining.com"
              target="blank"
              className="py-1 px-2 lg:py-2.5 lg:px-4"
            >
              Blog
            </a>
            <a
              className="py-1 px-2 lg:py-2.5 lg:px-4"
              target="blank"
              href="https://go.lokamining.com/about"
            >
              About
            </a>
            <a
              href="https://miner.lokamining.com"
              target="blank"
              className="py-1 px-2 lg:py-2.5 lg:px-4 flex justify-center items-center text-center "
            >
              <span className="pr-1">Miners </span>
              <div className="text-center justify-center text-white items-center text-xs bg-gradient-to-r from-2b47b4 to-854498 rounded-xl p-1 px-2">
                Beta
              </div>
            </a>
            <div className="items-center text-center">
              <a href="https://discord.gg/yDytXMMDs9" target="blank">
                <div className=" border-warm-white border-1 p-4 rounded-2xl">
                  Join Discord
                </div>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}
