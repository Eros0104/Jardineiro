import React, { Component } from 'react'
import { CustomModal } from './CustomModal'
import { CustomButton } from '../../components/inputs/CustomButton'

export class CustomCreateModal extends Component {
  save = async () =>{
    this.props.onSave();
    this.props.toggle();
  }
  render() {
    let { children, isLoading } = this.props
    return (
      <form>
        <CustomModal
          {...this.props}
          isLoading={this.props.isLoading}
          footer={
            <CustomButton disabled={isLoading} color="success" onClick={() => this.save()}>
              Salvar
            </CustomButton>
          }
        >
          {children}
        </CustomModal>
      </form>
    )
  }
}
