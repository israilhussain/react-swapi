import React from "react";
import { AutoComplete, Icon, Input, Row, message } from "antd";
import PlanetDetails from "./PlanetDetails";
import { setNetworkRequestLimit } from "../../api";
import { Header } from "../Header";
import "antd/dist/antd.css";
import "./planet.css";

function renderOption(item) {
  return (
    <AutoComplete.Option key={item.url} text={item.name}>
      <span>{item.name}</span>
      <span className="certain-search-item-count">
        {`Population ${item.population}`}
      </span>
    </AutoComplete.Option>
  );
}

class PlanetSearch extends React.Component {
  state = {
    loading: true,
    query: "",
    dataSource: [],
    selectedPlanet: {},
    show_palnet_details: false
  };

  componentDidMount() {
    const loggedInUser = localStorage.getItem('user');
    message.success(`Welcom ${loggedInUser}`)
    if(loggedInUser !== "Luke Skywalker") {
      // initiates network request limit
      const { getPlanetSuggestions } = setNetworkRequestLimit(15, 60000);
      return this.getPlanetSuggestions = getPlanetSuggestions;
    }

    const { getPlanetSuggestions } = setNetworkRequestLimit();
    this.getPlanetSuggestions = getPlanetSuggestions;
  }

  onSelect = value => {
    const selectedPlanet = this.state.dataSource.filter(ds => ds.url === value);
    this.setState({
      selectedPlanet: selectedPlanet[0],
      show_palnet_details: true
    });
  };

  getOptions = () => {
    return this.state.dataSource.map(opt => (
      <AutoComplete.Option key={opt.url} value={opt.name}>
        {opt.name}
        <span className="certain-search-item-count">
          {`Population ${opt.population}`} people
        </span>
      </AutoComplete.Option>
    ));
  };
  handleSearch = async value => {
    const res = await this.getPlanetSuggestions(value);
    const planets = res.data.results;
    this.setState({ dataSource: planets });
  };

  logoutHandler = e => {
    localStorage.removeItem("isLoggedIn");
    this.props.history.push('/login');
  }

  render() {
    const { dataSource } = this.state;
    return (
      <div id="container" style={{ padding: "24px 24px" }}>
        <Header logoutHandler={this.logoutHandler} user={localStorage.getItem('user')} />
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ minHeight: "20vh" }}
        >
          <AutoComplete
            dataSource={dataSource.map(renderOption)}
            style={{ width: "75vw" }}
            onSelect={this.onSelect}
            onSearch={this.handleSearch}
            optionLabelProp="text"
            placeholder="Search for a planet"
            loading={true}
          >
            <Input suffix={<Icon type="search" />} />
          </AutoComplete>
        </Row>
        {this.state.show_palnet_details && (
          <PlanetDetails {...this.state.selectedPlanet} />
        )}
      </div>
    );
  }
}

export default PlanetSearch;
