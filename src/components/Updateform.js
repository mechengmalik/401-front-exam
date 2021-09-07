import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export class Updateform extends Component {

    updateFavInfo=(e)=>{
        this.props.updateFavInfo(e)
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.updateFavInfo}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        
                        <Form.Control type="text" name='title' defaultValue={this.props.favoriteList.title} />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      
                        <Form.Control as="textarea" name='imageUrl'defaultValue={this.props.favoriteList.imageUrl} rows={3} />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Updateform
