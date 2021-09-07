import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Favoritecard from './Favoritecard.js';
import Updateform from './Updateform.js';

class MyFavorites extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show:false,
      selectedCard:'',
      favoriteList:[],

    }
  }

  componentDidMount=()=>{
    axios.get(`http://localhost:3001/getFavData?userEmail${this.props.auth0.user.email}`).then(result=>{
      this.setState({
        favoriteList:result.data

      })
      console.log(result.data)

    })
  }

  deleteFav=(wantedId)=>{
    axios.delete(`http://localhost:3001/delete/${wantedId}?userEmail=${this.props.auth0.user.email}`).then(result=>{
      this.setState({
        favoriteList:result.data
      })
    })
  }

  updateFav=(wantedId)=>{
    let chosen = this.state.favoriteList.find(item =>{
      return item._id === wantedId

    })
    this.setState({
      show:true,
      selectedCard : chosen
    })
  }

  updateFavInfo=(e)=>{
    e.preventDefault();

    let updatedObj={
      title:e.target.title.value,
      imageUrl:e.target.imageUrl.value

    }
    let wantedId = this.state.selectedCard._id
    axios.put(`http://localhost:3001/update/${wantedId}`,updatedObj).then(result=>{
      this.setState({
        selectedCard:result.data

      })
    })
  }



  Updateform

  render() {
    return(
      <div>
       {this.state.favoriteList.map((item,idx)=> <Favoritecard favoriteList={item} key={idx} deleteFav={this.deleteFav} updateFav={this.updateFav} />)}

       {this.state.favoriteList.map((item,idx)=> <Updateform favoriteList={item} key={idx} addToFav={this.updateFavInfo}/>)}

     
        
      </div>
    )
  }
}

export default withAuth0(MyFavorites);

