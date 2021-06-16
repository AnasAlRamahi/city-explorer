import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export class WeatherForecast extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <ListGroup>
                    {   
                    <ListGroup.Item>
                        {this.props.date} ----- {this.props.description}
                    </ListGroup.Item>
                    }
                </ListGroup>
                <br />
            </div>
        )
    }
}

export default WeatherForecast
