import React, {Component} from "react";
class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      judul: "Ini judul dari state",
      dataMakanan: this.props.list,
      statusRendering: true,
    };
    //BIND METHOD
    this.handlePesan = this.handlePesan.bind(this);
    this.handleElement = this.handleElement.bind(this);
  }

  handlePesan(pesan,e){
    e.preventDefault();
    // alert('Halaman Header'); //sebelum dibind method - tidak dapat mengakses state/props
    // alert('Halaman Header :' + this.state.judul); //setelah dibind method - agar dapat mengakses state/props
    alert(pesan);
    alert("Hai");
  }

  handleElement(){
    this.setState((state, props) => {
      return { statusRendering: !state.statusRendering}
    });
  }

  render(){
    return (
      <div>
        {this.state.statusRendering === true ? (
          <div>
            <h1>Selamat Datang</h1>
            <h2>Hi, Andre!</h2>
          </div>
        ) : (
          <div>
            <h1>Selamat tinggal</h1>
            <h2>Sampai bertemu kembali</h2>
          </div>
        )}
        <h2>Component dari Class Header</h2>
        <h3>{this.state.judul}</h3>
        <p>Mengakses props dari App secara langsung: {this.props.list}</p>
        <p>Mengakses props dari State: {this.state.dataMakanan}</p>
        <a href="/" onClick={(e)=>this.handlePesan('Pesan dari Parameter',e)}>Halaman Header</a>
        <button onClick={this.handleElement}>Change</button>
      </div>
    )
  }
}

  export default Header;