import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
export class FruitsCards extends Component {
	render() {
		return this.props.dataApiFlower.map((obj) => {
			return (
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src={obj.photo} />
						<Card.Body>
							<Card.Title>{obj.name}</Card.Title>
							<Card.Text>{obj.instructions}</Card.Text>
							<Button
								variant="primary"
								onClick={(e) => {
									this.props.addToFavourite(obj);
								}}
							>
								addToFavourite
							</Button>
						</Card.Body>
					</Card>
				</Col>
			);
		});
	}
}

export default FruitsCards;
