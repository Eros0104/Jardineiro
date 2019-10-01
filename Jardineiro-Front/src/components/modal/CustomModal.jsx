import React, { Component } from 'react'
import { CustomButton } from '../inputs/CustomButton';
import { Modal, ModalFooter, ModalHeader, ModalBody } from 'reactstrap'

export class CustomModal extends Component {
	render() {
		let { size } = this.props
		return (
			<Modal size={size} isOpen={this.props.isOpen} toggle={this.props.toggle}>
				<ModalHeader toggle={this.props.toggle}>{this.props.title}</ModalHeader>
				<ModalBody>
					{this.props.children}
				</ModalBody>
				<ModalFooter>
					{this.props.footer}
					<CustomButton color="secondary" onClick={this.props.toggle}>Cancelar</CustomButton>
				</ModalFooter>
			</Modal>
		)
	}
}
