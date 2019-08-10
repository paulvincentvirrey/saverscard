import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { Card, Grid } from "@material-ui/core";
import { getUsers, getUser } from "../../services/fakeUserService";
import ApplicationStatus from "./applicationStatus";
import EditButton2 from "./editButton2";

class AdminUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: getUsers()
    });
  }

  render() {
    const tableTitle = ["Users List"];
    const { data } = this.state;

    console.log(data);

    const columns = [
      {
        name: "_id",
        label: "",
        options: {
          display: false,
          filter: false
        }
      },
      {
        name: "lastName",
        label: "Last Name",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "firstName",
        label: "First Name",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "paymentMethod",
        label: "Payment Method",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "status",
        label: "Application Status",
        options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta) => {
            return (
              <ApplicationStatus value={value} index={tableMeta.columnIndex} />
            );
          }
        }
      },
      {
        name: "remarks",
        label: "Remarks",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "postmark",
        label: "Date Modified",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "",
        label: "",
        options: {
          filter: false,
          sort: false,

          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <EditButton2
                data={getUser(tableMeta.rowData ? tableMeta.rowData[0] : null)}
              />
            );
          }
        }
      }
    ];

    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      onRowsDelete: rowsDeleted => {
        rowsDeleted.data.map(rowDeleted =>
          console.log(this.state.data[rowDeleted.dataIndex])
        );
      }
    };
    return (
      <React.Fragment>
        <Grid container justify="center">
          <Card raised>
            <MUIDataTable
              title={"Users Consolidation Table"}
              data={this.state.data}
              columns={columns}
              options={options}
            />
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
}

export default AdminUsers;
