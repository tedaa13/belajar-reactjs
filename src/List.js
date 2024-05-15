import React, {Component} from "react";
import Image from "./Image";

class List extends Component {
  componentDidMount() {
    console.log('Jalan: componentDidMount');
   }
   
  render(){
    return (
      <div>
        {/* <Image/> */}
        <ol>
          <li>
            Satu <br/>
            <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg' />
          </li>
          <li>
            Dua <br/>
            <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg' />
          </li>
          <li>
            Tiga <br/>
            <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png' />
          </li>
          <li>
            Empat <br/>
            <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png' />
          </li>
        </ol>
      </div>
    );
  }
}

export default List;