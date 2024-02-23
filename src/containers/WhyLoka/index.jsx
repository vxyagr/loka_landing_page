import React from "react";
import { Button, Row, Col, Typography } from "antd";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

import "./style.css";

const { Title, Text } = Typography;

const WhyLoka = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isExtraLargeScreen = useMediaQuery({ minWidth: 1920 });

  return (
    <div
      className="why-loka-container"
      style={{
        padding: isExtraLargeScreen
          ? "40px 250px 120px 250px"
          : isMobile
          ? "30px 24px"
          : "40px 40px 120px 40px",
        width: "100%",
      }}
    >
      <Row justify="center">
        <Col xs={{ span: 18 }} md={{ span: 12 }}>
          <Title level={1} className="why-loka-title">
            {t("whyLoka.title")}
          </Title>
        </Col>
      </Row>
      <Row gutter={[32, 32]} justify="center">
        <Col xs={{ span: 24 }} md={{ span: 7 }}>
          <div className="why-card">
            <Title level={4}>{t("whyLoka.feat1.title")}</Title>
            <Text className="why-desc">{t("whyLoka.feat1.desc")}</Text>
          </div>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 7 }}>
          <div className="why-card">
            <Title level={4}>{t("whyLoka.feat2.title")}</Title>
            <Text className="why-desc">{t("whyLoka.feat2.desc")}</Text>
          </div>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 7 }}>
          <div className="why-card">
            <Title level={4}>{t("whyLoka.feat3.title")}</Title>
            <Text className="why-desc">{t("whyLoka.feat3.desc")}</Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WhyLoka;
