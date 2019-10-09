import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import { get } from '../../functions/functions'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

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
    let list = await get(this.props.dataUrl);
    list = list.data
    this.setState({ list })
  }

  render() {
    let { list } = this.state;
    return (
      <div
        className="ag-theme-material"
        style={{
          height: '500px',
          width: '100%'
        }}
      >
        <AgGridReact
          columnDefs={list.listHeader}
          rowData={list.listData}>
        </AgGridReact>
      </div>
    );
  }
}