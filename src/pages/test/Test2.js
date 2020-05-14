import React from "react";
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

mobiscroll.settings = {
  theme: "ios",
  themeVariant: "light",
};

class Test2 extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   view: "month",
    //   weeks: 6,
    // };
    this.state = {
      view: "week",
      weeks: 1,
    };
  }
  changeView = (event) => {
    let weekNr = 0;
    switch (event.target.value) {
      case "month":
        weekNr = 6;
        break;
      case "week":
        weekNr = 1;
        break;
      default:
        break;
    }
    this.setState({
      view: event.target.value,
      weeks: weekNr,
    });
  };

  handleClick() {
    console.log("e");
  }
  render() {
    return (
      <mobiscroll.Form>
        <mobiscroll.FormGroup>
          <mobiscroll.FormGroupTitle>
            Month view and week view
          </mobiscroll.FormGroupTitle>
          <mobiscroll.Segmented
            name="view"
            value="month"
            checked={this.state.view === "month"}
            onChange={this.changeView}
          >
            Month
          </mobiscroll.Segmented>
          <mobiscroll.Segmented
            name="view"
            value="week"
            checked={this.state.view === "week"}
            onChange={this.changeView}
          >
            Week
          </mobiscroll.Segmented>
          <mobiscroll.Calendar
            display="inline"
            type="hidden"
            weeks={this.state.weeks}
            onSelect={this.handleClick.bind(this)}
          />
        </mobiscroll.FormGroup>
      </mobiscroll.Form>
    );
  }
}
export default Test2;
