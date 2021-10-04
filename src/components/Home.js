import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import FruitsCards from "./FruitsCards";
import { Row } from "react-bootstrap";
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataApiFlower: [],
			showDataFlower: false,
		};
	}

	componentDidMount = async () => {
		const request = await axios.get(`https://exam3015.herokuapp.com/flowers`);
		this.setState({
			dataApiFlower: request.data,
			showDataFlower: true,
		});
	};

	addToFavourite = async (obj) => {
		axios.post(`https://exam3015.herokuapp.com/flowers/favourite`, obj);
		console.log(obj);
	};
	render() {
		return (
			<Row>
				{this.state.showDataFlower && (
					<FruitsCards
						dataApiFlower={this.state.dataApiFlower}
						addToFavourite={this.addToFavourite}
					/>
				)}
			</Row>
		);
	}
}

export default Home;
