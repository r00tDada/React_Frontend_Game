import React, { Component } from "react";



const input_style = {
  width: "200px",
  padding: "5px",
  border: "solid 5px",
  borderColor: "rgb(252, 185, 248)",
};

const button_style = {
  width: "150px",
  margin: "20px 800px 20px",
};



class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: "",
      cols: "",
      flag: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRowChange = (event) => {
    this.setState({
      rows: event.target.value,
    });
  };

  handleColChange = (event) => {
    this.setState({
      cols: event.target.value,
    });
  };

  checkingInputWithInRange(ROW, COL, maxRow, maxCol) {
    if (ROW >= 0 && ROW <= maxRow && COL >= 0 && COL <= maxCol) {
      return true;
    }
    return false;
  }

  handleSubmit = (event) => {
    const { rows, cols, flag } = this.state;

    if (!this.checkingInputWithInRange(rows, cols, 10, 10)) {
      alert("Please enter the row or column within the range 1 to 10");
      return;
    }
    event.preventDefault();
    console.log(rows + " " + cols);
    this.setState({
      flag: true,
    });
  };

  all_btn_toggle(toggle_state) {
    const btn_list = ["toggle_UD", "toggle_LR", "shuffle", "clearbtn"];
    for (let btn of btn_list) {
      document.getElementById(btn).disabled = toggle_state;
    }
    if (toggle_state) {
      for (let btn of btn_list) {
        document.getElementById(btn).classList.add("disabled");
      }
    } else {
      for (let btn of btn_list) {
        document.getElementById(btn).classList.remove("disabled");
      }
    }
  }

  render() {
    const { rows, cols, flag } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br />
          <label>Number of rows </label>
          <input
            type="number"
            id="nrow"
            style={input_style}
            value={rows}
            onChange={this.handleRowChange}
          />
          <br />
          <br />
          <label>Number of cols </label>
          <input
            type="number"
            id="ncol"
            style={input_style}
            value={cols}
            onChange={this.handleColChange}
          />
          <br />
          <br />
          <button type="submit" style={button_style} className="button">
            Submit
          </button>
          <br></br>
        </form>
          <div>
            <button
              disabled
              type="submit"
              id="toggle_UD"
              className="button disabled"
            >
              Toggle_Up_Down
            </button>
            <button
              disabled
              type="submit"
              id="toggle_LR"
              className="button disabled"
            >
              Toggle_Left_Right
            </button>
            <button
              disabled
              type="submit"
              id="shuffle"
              className="button disabled"
            >
              Shuffle
            </button>
            <button
              disabled
              type="submit"
              id="clearbtn"
              className="button disabled"
            >
              Clear Table
            </button>
            <br />
          </div>
        {flag ? this.all_btn_toggle(false) : null}
        <table id="mytable" border="1px"></table>
      </div>
    );
  }
}

export default Form;
