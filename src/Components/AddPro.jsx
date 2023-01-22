import React from "react";
import {Button, Container, Heading, Input } from "@chakra-ui/react"
import axios from "axios";
import GetProduct from "./GetProduct";
class AddProduct extends React.Component{

        constructor(props){
            super(props)
            this.state={
                state:'',
                add:[],

            }        
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }
        handleChange = async(e) =>{
             
            const {name,value} = e.target
                 this.setState({
                   ... this.state,
                    [name]:value
                 })
                 console.log(this.state);
        }

        handleSubmit =async (e) =>{
                e.preventDefault()
            let res = await axios.post(`https://mock-api-h3i9.onrender.com/products`,this.state)

                this.setState({add:res.data})
               
              
        }

        render(){
            return (

                <>
                <form action="" >
                <Container>
                    <Heading textAlign={'center'}>Add Products</Heading>
                    <Input value={this.state.name} onChange={this.handleChange} mt='4' placeholder="Product name" type='text' name='name' 
                    // onChange={(e)=>this.setState({name:e.target.value})}
                    ></Input>

                    <Input value={this.state.qty} onChange={this.handleChange} mt='4' placeholder="Quantity" type='number' name='qty' 
                    // onChange={(e)=>this.setState({qty:e.target.value})}
                    ></Input>

                    <Input value={this.state.price} onChange={this.handleChange} mt='4' placeholder="Enter Price" type='number' name='price' 
                    // onChange={(e)=>this.setState({price:e.target.value})}
                    ></Input>

                    <Input value={this.state.desc} onChange={this.handleChange} mt='4' placeholder="Enter Description" name='desc' 
                    // onChange={(e)=>this.setState({desc:e.target.value})}
                    ></Input>

                    <Input value={this.state.img} onChange={this.handleChange} mt='4' placeholder="Image Link" type={'url'} name='img' 
                    // onChange={(e)=>this.setState({img:e.target.value})}
                    ></Input>

                    <Button onClick={this.handleSubmit} w='100%' mt='4'>Add Product</Button>
                </Container>
                </form>

                    <GetProduct />
                </>
            )
        }

}

export default AddProduct   