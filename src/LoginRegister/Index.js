import React, { useState } from "react";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import {
  Button,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
const LoginRegister = () => {
  const [active, toggleTab] = useState("1");

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "90vh" }}
    >
      <Card style={{ minHeight: "300px", width: "500px" }}>
        <CardBody>
          <TabContent activeTab={active}>
            <TabPane tabId="1">
              <LoginScreen toggleTab={toggleTab} />
            </TabPane>
            <TabPane tabId="2">
              <RegisterScreen toggleTab={toggleTab} />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginRegister;
