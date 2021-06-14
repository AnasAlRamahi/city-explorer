import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'

export class ErrorMessage extends Component {
    

    
    render() {
        return (
            <div>{
                <Alert show={this.props.showError} variant="success">
                    <Alert.Heading>{this.props.errorMessage}</Alert.Heading>
                    <div className="d-flex justify-content-end">
                    <Button onClick={this.props.setShowError} variant="outline-success">
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
