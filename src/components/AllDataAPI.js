import React, { Component } from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import ApiData from './ApiData';






class AllDataAPI extends Component {
    constructor(props){
        super(props);
        this.state={
            chocoList:[],

        }
    }
    componentDidMount=()=>{
        axios.get(`http://localhost:3001/getAPIData`).then(
            result=>{ this.setState({
                chocoList:result.data
            })
                
            }

        )
    }

    addToFav=(idx)=>{
        
        let obj={

            userEmail: this.props.auth0.user.email,
            title: this.state.chocoList[idx].title,
            imageUrl:this.state.chocoList[idx].imageUrl

        }

        axios.post(`http://localhost:3001/addData`,obj).then(
            result=>(
                console.log(result.data)
            )
        )

        
    }






    
    render() {
        return (
            <div>
                {this.state.chocoList.map((item,idx)=> <ApiData chocoList={item} idx={idx} addToFav={this.addToFav}/>)}
                
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
