import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Typography } from "antd";
import Icon from "@ant-design/icons";

import Illustration1 from "../../assets/images/about-illustration1.png";
import Illustration2 from "../../assets/images/about-illustration2.png";

import { ReactComponent as CheckIconSvg } from "../../assets/icons/check-icon.svg";
import { ReactComponent as RightArrowIconSvg } from "../../assets/icons/right-arrow-icon.svg";

import "./style.css";

const { Title, Paragraph } = Typography;

const About = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isExtraLargeScreen = useMediaQuery({ minWidth: 1920 });

  return (
    <div
      className="about-loka-container"
      style={{
        padding: isExtraLargeScreen
          ? "97px 250px"
          : isMobile
          ? "40px 24px"
          : "97px 124px",
      }}
    >
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 11 }}>
          <Title level={2}>{t("about.title")}</Title>
        </Col>
      </Row>

      <Row style={{ marginTop: "50px" }}>
        <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }}>
          <div className="about-text-container">
            <Title level={3} className={clsx("about-title-text", { isMobile })}>
              {t("about.miningPoolTitle")}
            </Title>

            <Paragraph className="about-text">
              {t("about.miningPoolDesc")}
            </Paragraph>

            <div className="about-info-item">
              <Icon style={{ fontSize: "26px" }} component={CheckIconSvg} />
              <Paragraph className="about-text">
                {t("about.miningPoolPointFirst")}
              </Paragraph>
            </div>

            <div className="about-info-item">
              <Icon style={{ fontSize: "26px" }} component={CheckIconSvg} />
              <Paragraph className="about-text">
                {t("about.miningPoolPointSecond")}
              </Paragraph>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }}>
          <div
            className="about-image-container"
            style={{ justifyContent: "flex-end" }}
          >
            <img
              src={Illustration1}
              alt="loka-miningpool"
              width={isMobile ? "100%" : "80%"}
            />
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: "80px" }}>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <div
            className="about-image-container"
            style={{ justifyContent: "flex-start" }}
          >
            <img
              src={Illustration2}
              alt="loka-miningpool"
              width={isMobile ? "100%" : "80%"}
            />
          </div>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <div className="about-text-container">
            <Title level={3} className={clsx("about-title-text", { isMobile })}>
              {t("about.hashRateMarketPlaceTitle")}
            </Title>

            <Paragraph className="about-text">
              {t("about.hashRateMarketPlaceDesc")}
            </Paragraph>

            <div className="about-info-item">
              <Icon
                style={{ fontSize: "24px" }}
                component={RightArrowIconSvg}
              />
              <Paragraph className="about-text">
                {t("about.hashRateMarketPlacePointFirst")}
              </Paragraph>
            </div>

            <div className="about-info-item">
              <Icon
                style={{ fontSize: "24px" }}
                component={RightArrowIconSvg}
              />
              <Paragraph className="about-text">
                {t("about.hashRateMarketPlacePointSecond")}
              </Paragraph>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
