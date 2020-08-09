import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import './ColorSlider.css';

class ColorSlider extends Component {
  render() {
    const {colorName} = this.props;
    return (
      <div className={"color-slider"}>
        <div className={"slider-label"}>
          <Typography id="range-slider" gutterBottom>
            {colorName}
          </Typography>
        </div>
        <Slider
          value={this.props.value}
          onChange={this.props.onChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={255}
        />
      </div>
    );
  }
}

export default ColorSlider;