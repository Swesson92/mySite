import React, {Component} from 'react';


class Testing extends Component{
    constructor(props){
        super(props);

        this.state = {
            brand: "BMW",
            model: "520",
            color: "black",
            year: 2004
                };
        
    }
    render(){
        return(
            <div>
                <h1>Brand: {this.brand}</h1>
                <h1>Codel: {this.model}</h1>
                <h1>Color: {this.color}</h1>
                <h1>Year: {this.year}</h1>
            </div>
        );
    }
}
export default Testing;