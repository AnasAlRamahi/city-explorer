import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



export class CityForm extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this.props.getCityData}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>City Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter City Name" onChange={this.props.setCityName} />
                            <Form.Text className="text-muted">
                                Insert the name of the city to show it on the map...
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Explore!
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default CityForm
