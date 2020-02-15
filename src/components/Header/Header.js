import React from "react";
import { PageHeader, Button } from "antd";

export function Header({ logoutHandler, user }) {
  return (
    <PageHeader
      style={{
        border: "1px solid rgb(235, 237, 240)"
      }}
      title="Planet search"
      subTitle=""
      extra={[
        <Button key="1" >
          {user}
        </Button>,
        <Button key="2" type="primary" onClick={logoutHandler}>
          Logout
        </Button>
      ]}
    ></PageHeader>
  );
}
