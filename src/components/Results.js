import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from 'react-bootstrap'

export class Results extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>{this.props.cityData.display_name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Longitude: {this.props.cityData.lon}</ListGroupItem>
                            <ListGroupItem>Latitude: {this.props.cityData.lat}</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Results
