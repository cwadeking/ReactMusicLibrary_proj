import axios from 'axios'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
//import Row from './row.js'
//import './table.js';

class App extends Component (){   
     state = {
         data: null,      

    }
     
    componentDidMount(){
        let musicLibrary = this.getDataSetFromApi();
        this.setState({
            data: musicLibrary,
        });
    }
       
    getDataSetFromApi(){
        let responseString;
        axios.get(`http://www.devcodecampmusiclibrary.com/api/music`)       
        return responseString;
    }
    render(){
       

            return(
                <table>
                    <tr>
                        <p>{this.state.data}</p>
                    </tr>                
                </table>
            
            );
        

    }
}



export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
    );
                // constructor(props){
                //     super();
                //     this.state = {
                //         table: makeAxiosCall(),
                //     };
                // }