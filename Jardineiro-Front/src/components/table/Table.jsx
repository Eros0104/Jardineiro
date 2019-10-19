import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import { get } from '../../functions/functions'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { CustomButton } from '../inputs/CustomButton';

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {
        listHeader: [],
        listData: []
      }
    }
  }

  componentDidMount = async () => {
    await this.refresh()
  }

  refresh = async () => {
    let list = await get(this.props.dataUrl);
    list = list
    this.setState({ list })
  }

  render() {
    let { list } = this.state;
    return (
      <div>
        <CustomButton onClick={() => this.refresh()}>
          <i className="fas fa-sync-alt"></i>
        </CustomButton>
        <div
          className="ag-theme-material rounded border"
          style={{
            height: '500px',
            width: '100%'
          }}>
          <AgGridReact
            columnDefs={list.listHeader}
            rowData={list.listData}>
          </AgGridReact>
        </div>
      </div>
    );
  }
}