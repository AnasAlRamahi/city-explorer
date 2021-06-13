import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'

export class ErrorMessage extends Component {
    constructor(props){
        super(props);
        this.state({
            show: true,
        })
    }

    setShow = () => {
        this.setState({
            show: false,
        })
    }
    render() {
        return (
            <div>{
                <Alert show={this.state.show} variant="success">
                    <Alert.Heading>{this.props.error}</Alert.Heading>
                    <p>
                    
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                    <Button onClick={() => this.setShow()} variant="outline-success">
                        Close
                    </Button>
                    </div>
                </Alert>
                }
            </div>
        )
    }
}

export default ErrorMessage
