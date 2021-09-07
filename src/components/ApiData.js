import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export class ApiData extends Component {

    addToFav=()=>{
        this.props.addToFav(this.props.idx)
    }
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.chocoList.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.chocoList.title}</Card.Title>
                        
                        <Button onClick={this.addToFav} variant="primary">ADD TO Favorite</Button>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}

export default ApiData
