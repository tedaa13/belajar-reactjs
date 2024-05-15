import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
import Top from "./Top";
import Main from "./Main";


function App() {
  return (
    <div>
      <Header list='10 Daftar Makanan'/>
      <Main/>
      <Top/>
      <h1>Hello World</h1>
      <List/>
      <Footer judul="Halaman Footer" nama="Andre"/>
    </div>
    
  );
}

export default App;


