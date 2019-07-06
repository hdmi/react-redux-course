import React from 'react';

class ImageCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({spans});
  }


  render() {
    const {description, urls} = this.props.image;

    return (
      <img
        alt={description}
        src={urls.regular}
        ref={this.imageRef}
        style= {{gridRowEnd: `span ${this.state.spans}`}}
      />
    );

  }

}

export default ImageCard;
