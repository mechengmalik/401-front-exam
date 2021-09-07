import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'

export class Favoritecard extends Component {


  deleteFav=()=>{
      this.props.deleteFav(this.props._id)
  }
  updateFav=()=>{
    this.props.updateFav(this.props._id)
}


    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.favoriteList.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.favoriteList.title}</Card.Title>
                        
                        <Button onClick={this.deleteFav} variant="primary">Delete</Button>
                        <Button onClick={this.updateFav} variant="primary">Update</Button>
                    </Card.Body>
                </Card>
                
            </div>
        )
    }
}

export default Favoritecard
