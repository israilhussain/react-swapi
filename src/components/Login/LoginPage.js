import React from "react";
import { getLoginUser } from "../../api";
import { LoginForm } from "./LoginForm";
import { message } from "antd";

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    this.setState({ loading: true });
    const { username, password } = this.state;
    if (username && password) {
      const res = await getLoginUser(username);
      const poeple = res.data.results[0];
      if (poeple) {
        const { name, birth_year } = poeple;

        if (birth_year === password) {
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("user", name);
          this.props.history.push("/search");
        } else {
          message.error("Either username or password wrong");
          this.setState({
            loading: false
          });
        }
      } else {
        message.error("User not found");
        this.setState({ loading: false });
      }
    }
  };

  componentDidMount() {
    if (localStorage.getItem("isLoggedIn")) {
      this.props.history.push("/search");
    }
  }

  render() {
    return (
      <div id="container" style={{ padding: "24px" }}>
        <LoginForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          loading={this.state.loading}
          message={this.state.message}
        />
      </div>
    );
  }
}
