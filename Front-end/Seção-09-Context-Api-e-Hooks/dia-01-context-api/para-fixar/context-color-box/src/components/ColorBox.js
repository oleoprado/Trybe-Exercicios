import React from 'react';
import ColorsContext from '../context/ColorsContext';
import '../style/box.css';

class ColorBox extends React.Component {
  render() {
    const { nextColor, colors, colorIndex } = this.context;
    return(
      <button
        type="button"
        className="box"
        style={ { backgroundColor: colors[colorIndex] } }
        onClick={ () => nextColor() }
      >
        Click me to change my color!
      </button>
    )
  }
}
ColorBox.contextType = ColorsContext;
export default ColorBox;

