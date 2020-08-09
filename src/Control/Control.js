import React, {Component} from 'react';
import ColorSlider from "../ColorSlider/ColorSlider";
import './Control.css';
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class Control extends Component {

  render() {
    return (
      <div className={"control"}>
        <ColorSlider colorName="R" value={this.props.red} onChange={this.handleChange.bind(this, "red")}/>
        <ColorSlider colorName="G" value={this.props.green} onChange={this.handleChange.bind(this, "green")}/>
        <ColorSlider colorName="B" value={this.props.blue} onChange={this.handleChange.bind(this, "blue")}/>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={this.props.shuffleOn}
                onChange={this.props.shuffleChanged}
                name="Shuffle"
                color="primary"
              />
            }
            label="Shuffle Colors"
          />
        </FormGroup>
      </div>
    );
  }

  handleChange(color, event, value) {
    this.props.colorChanged(color, value);
  }



}

export default Control;