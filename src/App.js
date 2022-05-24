import React from "react";

const styles = {
  h1: {
    fontSize: "10rem",
  },

  div: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    textAlign: "center",
  },
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div style={styles.div}>
        <h1 style={styles.h1}>
          {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    );
  }
}

export default App;
