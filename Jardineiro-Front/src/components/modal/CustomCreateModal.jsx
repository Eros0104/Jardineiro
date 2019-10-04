import React, { Component } from 'react'
import { CustomModal } from './CustomModal'
import { CustomButton } from '../../components/inputs/CustomButton'

export class CustomCreateModal extends Component {
  render() {
    let { children, isLoading, onSave } = this.props
    return (
      <form>
        <CustomModal
          {...this.props}
          isLoading={this.props.isLoading}
          footer={
            <CustomButton disabled={isLoading} color="success" onClick={() => onSave()}>
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
