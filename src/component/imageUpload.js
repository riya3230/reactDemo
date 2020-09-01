import React from "react";
import MultiImageInput from "react-multiple-image-input";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.handleClick = this.handleClick.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    if (!this.state.images.length) alert("Image not found");
    else alert("done");
    
  }

  onDrop(image) {
    const pics = []
    Object.keys(image).forEach(e=>pics.push(image[e]))
    this.setState({
      images: pics,
    });
  }
  
  render() {
    return (
      <div className="container">
        <MultiImageInput
          images={this.state.images}
          max={4}
          allowCrop={false}
          setImages={this.onDrop}
        />
        <button className="btn btn-block btn-success" onClick={this.handleClick}>
          Finish
        </button>
      </div>
    );
  }
}
export default ImageUpload;