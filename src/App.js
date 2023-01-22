import React, { Component } from 'react';
import axios from 'axios';
import AddProduct from "./Components/AddPro.jsx"
import Navbar from './Components/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import GetProduct from './Components/GetProduct.jsx';


  class App extends React.Component{

      constructor(props){
        super(props);

      }

   render() {
    return (
      <div>
          <Navbar/>
        <Routes>
          <Route path='/' element={<AddProduct/>}></Route>
          <Route path='/show' element={<GetProduct/>}></Route>
        </Routes>
      </div>
    );
  }
  }

  export default App;


      // <div>
      //   {/* Add Item Form */}
      //   <form onSubmit={(e) => {
      //     e.preventDefault();
      //     this.addGroceryItem({ name, qty, price, description, image });
      //   }}>
      //     <input type="text" placeholder="Name" value={name} onChange={(e) => this.setState({name: e.target.value})} />
      //     <input type="number" placeholder="Quantity" value={qty} onChange={(e) => this.setState({qty: e.target.value})} />
      //     <input type="number" placeholder="Price" value={price} onChange={(e) => this.setState({price: e.target.value})} />
      //     <input type="text" placeholder="Description" value={description} onChange={(e) => this.setState({description: e.target.value})} />
      //     <input type="text" placeholder="Image URL" value={image} onChange={(e) => this.setState({image: e.target.value})} />
      //     <button type="submit">Add Item</button>
       
     

