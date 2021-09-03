import React from "react";

import { Cards, Chart, CountryPicker } from "./Components";
import styles from "./App.module.css";

import { fetchData } from "./API";
import CovidImage from "./Images/image.png";
import Footer from "./Components/Footer/Footer";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountrychange = async (new_country) => {
    const fetchedData = await fetchData(new_country);

    this.setState({ data: fetchedData, country: new_country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={CovidImage} className={styles.image} alt="Covid-19" />
        <Cards data={data} />
        <CountryPicker handleCountrychange={this.handleCountrychange} />
        <Chart data={data} country={country} />

        <Footer />
      </div>
    );
  }
}

export default App;
