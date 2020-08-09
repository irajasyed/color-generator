import React, {Component} from 'react';
import ColorTile from "../ColorTile/ColorTiles";
import './Canvas.css';

class Canvas extends Component {
  constructor(props){
    super(props);
    this.state = {
      colorTiles: [],
      allTiles: []
    }
  }

  render() {
    return (
      <div className={"canvas"}>
        { this.getColors()}
      </div>
    );
  }

  getColors() {
    return this.state.colorTiles;
  }

  setColorTiles(allTiles, offset) {
    const colorRange = allTiles.splice(0, offset);
    const colorTiles = colorRange.map(rgb => {
      const rI = rgb[0];
      const gI = rgb[1];
      const bI = rgb[2];
      let key = rI.toString() + gI.toString() + bI.toString();
      return <ColorTile key={key} red={rI} green={gI} blue={bI}/>
    });
    this.setState({
      colorTiles: this.state.colorTiles.concat(colorTiles)
    });
  }

  componentDidMount() {
    this.generateColors();
    window.addEventListener("scroll", err => {
      this.handleScroll(err);
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.isColorChanged(prevProps) || this.shuffleChanged(prevProps)) {
      this.setState({
        allTiles: [],
        colorTiles: []
      }, function () {
        this.generateColors();
      });
    }
  }

  isColorChanged(prevProps) {
    return prevProps.red !== this.props.red ||
      prevProps.green !== this.props.green ||
      prevProps.blue !== this.props.blue;
  }

  shuffleChanged(prevProps) {
    return this.props.shuffleOn !== prevProps.shuffleOn;
  }

  handleScroll() {
    if (this.hasReachedEnd()) {
      this.loadMoreColors();
    }
  }

  hasReachedEnd() {
    return window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight;
  }

  loadMoreColors() {
    this.setColorTiles(this.state.allTiles, 100);
  }

  generateColors() {
    const {red, green, blue} = this.props;
    let allTiles = [];
    for (let rI = red[0]; rI <= red[1]; rI++) {
      for (let gI = green[0]; gI <= green[1]; gI++) {
        for (let bI = blue[0]; bI <= blue[1]; bI++) {
          allTiles.push([rI, gI, bI]);
        }
      }
    }
    if (this.props.shuffleOn) {
      this.shuffle(allTiles);
    }
    this.setState({
      allTiles
    }, function () {
      this.setColorTiles(allTiles, 1000);
    });
  }

  shuffle(allTiles) {
    for(let i = allTiles.length-1; i > 0; i--){
      const j = Math.floor(Math.random() * i);
      const temp = allTiles[i];
      allTiles[i] = allTiles[j];
      allTiles[j] = temp;
    }
  }
}

export default Canvas;