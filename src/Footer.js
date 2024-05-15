import React, {Component} from "react";

////ADA 3 CARA PENULISAN UNTUK MEMBUAT COMPONENT 
///1* MENGGUNAKAN ARROW FUNCTION
// const Footer = (props) => {
//   return(
//     <div>
//       <h3>Halaman Footer</h3>
//       <h3>Component ini dibuat menggunnakan Function bukan class</h3>
//       <p>Nilai ini ditampilkan dari props: {props.judul}</p>
//       <p>Nama Saya: {props.nama}</p>
//     </div>
//   );
// }

///2* MENGGUNAKAN VARIABLE
const Footer = function(props){
  return(
    <div>
      <h3>Halaman Footer</h3>
      <h3>Component ini dibuat menggunnakan Function bukan class</h3>
      <p>Nama Saya: {props.nama}</p>
    </div>
  );
}

///3* MENGGUNAKAN FUNCTION SEPERTI BIASA
// function Footer(props){
//   var nama = 'Andre';
//   return(
//     <div>
//       <h3>Halaman Footer</h3>
//       <h3>Component ini dibuat menggunnakan Function bukan class</h3>
//       <p>Nama saya: {nama}</p>
//     </div>
//   );
// }

export default Footer;