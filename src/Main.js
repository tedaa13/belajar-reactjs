import React, {Component} from "react";

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Menu Makanan',
      title2: 'Menu Minuman',
      inputValue: "Andre Teda",
      inputKota: "",
    }
    this.rubahData = this.rubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //MENGGUNAKAN FUNCTION BIASA
  // rubahData(){
  //   this.setState({title: 'Pilih Makanan'});
  // }

  //MENGGUNAKAN ARROW FUNCTION
  rubahData() {
    this.setState((state, props) => {
      return { 
        title: state.title2,
        title2: state.title
      };
    });
  }

  // handleChange(e){
  //   // console.log('Data Diubah');
  //   // console.log(e.target.value);
  //   this.setState({
  //     inputValue: e.target.value,
  //   })
  // }

  handleChange(value,e){
    this.setState({
      [value]: e.target.value,
    })
  }



  render(){
    return(
      <div>
        <h3>{this.state.title}</h3>
        <button onClick={this.rubahData}>Ubah Makanan</button>
        <br></br>
        <input type="text" onChange={(e) => this.handleChange('inputKota',e)}></input>
        <br></br>
        <input type="text" value={this.state.inputKota} placeholder="kota"  readOnly/>
      </div>
    );
  };
}

export default Main;