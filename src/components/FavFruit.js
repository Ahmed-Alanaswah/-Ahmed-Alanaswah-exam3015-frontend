import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import FavFruitsCards from "./FavFruitsCards";
import { Row } from "react-bootstrap";
import Form from "./Form";
class FavFruit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataApiFavFlower: [],
			showDataFavFlower: false,
			slug: "",
			photo: "",
			instructions: "",
			name: "",
			showForm: false,
		};
	}

	componentDidMount = async () => {
		const request = await axios.get(`http://localhost:8001/flowers/favourite`);
		this.setState({
			dataApiFavFlower: request.data,
			showDataFavFlower: true,
		});
	};

	deleteFavourite = async (slug) => {
		const request = await axios.delete(
			`http://localhost:8001/flowers/favourite/${slug}`
		);

		this.setState({
			dataApiFavFlower: request.data,
			showDataFavFlower: true,
		});
	};

	showFormUpdate = async (slug, photo, instructions, name) => {
		this.setState({
			slug: slug,
			photo: photo,
			instructions: instructions,
			name: name,
			showForm: true,
		});
	};

	updateData = async (e) => {
		e.preventDefault();
		const updated = {
			name: this.state.name,
			photo: this.state.photo,
			instructions: this.state.instructions,
		};
		const request = await axios.put(
			`http://localhost:8001/flowers/favourite/${this.state.slug}`,
			updated
		);
		this.setState({
			dataApiFavFlower: request.data,
			showDataFavFlower: true,
		});
	};
	updateName = (e) => {
		this.setState({
			name: e.target.value,
		});
	};
	updatePhoto = (e) => {
		this.setState({
			photo: e.target.value,
		});
	};
	updateInstructions = (e) => {
		this.setState({
			instructions: e.target.value,
		});
	};

	render() {
		return (
			<Row>
				{this.state.showForm && (
					<Form
						name={this.state.name}
						instructions={this.state.instructions}
						photo={this.state.photo}
						updateData={this.updateData}
						updateInstructions={this.updateInstructions}
						updateName={this.updateName}
						updatePhoto={this.updatePhoto}
					/>
				)}
				{this.state.showDataFavFlower && (
					<FavFruitsCards
						dataApiFavFlower={this.state.dataApiFavFlower}
						deleteFavourite={this.deleteFavourite}
						showFormUpdate={this.showFormUpdate}
					/>
				)}
			</Row>
		);
	}
}

export default FavFruit;
