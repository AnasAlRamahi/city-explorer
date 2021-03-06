import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Container from 'react-bootstrap/Container';



export class Movies extends Component {
    render() {
        return (
            <div style={{ width: '18rem', margin: '10px', display: "inline-block"}}>
                <Container style={{ display: "flex", justifyContent: "center", marginTop: "20px", }}>
                    <Card style={{ width: '100%', border: 'solid 1px black' }}>
                        <Card.Img variant="top" src={this.props.image_url} />
                        <Card.Body>
                            <Card.Title style={{ height: '44px', fontWeight: 'bold', overflow: 'hidden' }}>{this.props.title}</Card.Title>
                            <Card.Text style={{ height: '100px', overflowY: 'scroll', border: '1px black solid' }}>
                                {this.props.overview}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Released on: <span style={{ fontWeight: 'bold'}}>{this.props.released_on}</span></ListGroupItem>
                            <ListGroupItem>Popularity: <span style={{ fontWeight: 'bold'}}>{this.props.popularity}</span></ListGroupItem>
                            <ListGroupItem>Average Votes: <span style={{ fontWeight: 'bold'}}>{this.props.average_votes}</span></ListGroupItem>
                            <ListGroupItem>Total Votes: <span style={{ fontWeight: 'bold'}}>{this.props.total_votes}</span></ListGroupItem>
                        </ListGroup>
                    </Card>
                </Container>
                <br />
            </div>
        )
    }
}

export default Movies

// overview={item.overview}
//                           image_url={item.image_url}
//                            released_on={item.released_on}
//                             popularity={item.popularity}
//                              avgerage_votes={item.average_votes}
//                               total_votes={item.total_votes} />)