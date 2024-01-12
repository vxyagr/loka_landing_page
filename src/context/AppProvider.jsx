import React, { createContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ConfigProvider } from "antd";

import OpenLogin from "@toruslabs/openlogin";

import { actorCreation } from "../service/icdragoncanister";

import smallIcon from "../assets/icon/favico_loka.png";

export const AppContext = createContext({});

const openLoginConfig = {
  clientId: process.env.REACT_APP_OPEN_LOGIN_CLIENT_ID,
  network: process.env.REACT_APP_OPEN_LOGIN_NETWORK,
  uxMode: "popup",
};

const themeProvider = {
  token: {
    colorPalette1: "#79d5c6",
    fontFamily: "FamiljenGrotesk",
    Button: {
      colorPrimary: "linear-gradient(90deg, #112cbccc, #8d2895cc) !important",
      fontWeight: 600,
      primaryColor: "white",
      border: "border: 1px solid #7F56D9",
      borderColorDisabled: "border: 1px solid #7F56D9",
    },
  },
  components: {
    Layout: {
      headerBg: "#152233",
      siderBg: "#152233",
    },
  },
};

export const AppProvider = ({ children }) => {
  const [openlogin, setSdk] = useState();
  const [canisterActor, setCanisterActor] = useState();
  const [userData, setUserData] = useState(false);
  const [gameData, setGameData] = useState(false);
  const [ticketPrice, setTicketPrice] = useState(false);
  const [walletAddress, setWalletAddress] = useState(false);
  const [icpAgent, setICPAgent] = useState(false);

  useEffect(() => {
    async function initializeOpenlogin() {
      const sdkInstance = new OpenLogin(openLoginConfig);
      await sdkInstance.init();
      console.log(sdkInstance.privKey, "<<<<< sdkInstance");
      setSdk(sdkInstance);
      if (sdkInstance?.privKey) {
        const actor = actorCreation(sdkInstance.privKey);
        setCanisterActor(actor);
      }
    }
    initializeOpenlogin();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loginInstance: openlogin,
        canisterActor,
        setCanisterActor,
        userData,
        setUserData,
        gameData,
        setGameData,
        ticketPrice,
        setTicketPrice,
        walletAddress,
        setWalletAddress,
        icpAgent,
        setICPAgent,
      }}
    >
      <Helmet>
        <title>Loka Mining Protocol</title>
        <link rel="icon" type="png" href={smallIcon} />
        <link rel="apple-touch-icon" type="png" href={smallIcon} />
      </Helmet>
      <ConfigProvider theme={themeProvider}>{children}</ConfigProvider>
    </AppContext.Provider>
  );
};

export default AppProvider;
