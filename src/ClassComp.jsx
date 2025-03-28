import { Component } from "react";
import axios from 'axios'

class ClassComp extends Component{
    constructor(props){
        super(props);
        this.state = {quote: ''}
    }
    componentDidMount(){
        axios.get('https://api.github.com/zen').then(response => {
            this.setState({quote: response.data})
        });
    }
    
    render() {
        return(
            <div>
                <h1>always remember</h1>
                <p>{this.state.quote}</p>
            </div>
        );
    }
}



export default ClassComp