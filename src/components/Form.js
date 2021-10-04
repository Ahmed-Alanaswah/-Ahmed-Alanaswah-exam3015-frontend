import React, { Component } from "react";
import { Image, Modal, Button } from "react-bootstrap";
export class Form extends Component {
	render() {
		return (
			<div>
				<Modal
					show={this.props.showForm}
					onHide={this.props.handleClose}
					animation={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.name}</Modal.Title>
						<Modal.Title>{this.props.updateInstructions}</Modal.Title>
						<Image src={this.props.photo} style={{ width: "400px" }} rounded />
					</Modal.Header>
					<Modal.Body>
						{" "}
						<form onSubmit={this.props.updateData}>
							<input
								type="text"
								onChange={this.props.updatePhoto}
								value={this.props.photo}
							/>
							<input
								type="text"
								onChange={this.props.updateName}
								value={this.props.name}
							/>
							<input
								type="text"
								onChange={this.props.updateInstructions}
								value={this.props.instructions}
							/>
							<input type="submit" value="update" />
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.props.handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={this.props.handleClose}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default Form;
