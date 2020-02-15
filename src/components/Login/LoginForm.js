import React from "react";
import "antd/dist/antd.css";
import "./login.css";
import { Form, Icon, Input, Button, Row } from "antd";

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleSubmit()
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
      
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              name="username"
              placeholder="Username"
              onChange={this.props.handleChange}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.props.handleChange}
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={this.props.loading}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
      </Row>
    );
  }
}

const WrappedLoginForm = Form.create({ name: "normal_login" })(
  LoginForm
);

export { WrappedLoginForm as LoginForm };
