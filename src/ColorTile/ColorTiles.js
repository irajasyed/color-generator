import styled from 'styled-components';

const ColorTile = styled.div.attrs(props => ({
  style: {
    backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`,
  }
}))`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding: 10px;
  margin: 10px;
`;

export default ColorTile;