import React, {Component} from "react";

class Image extends Component{
  render(){
    return(
      <div>
        <img src={ this.props.linkGambar } alt={ this.props.linkGambar } width='500' />
      </div>
      // <img src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" alt="Food" width='500' />
    );
  }
}

export default Image;