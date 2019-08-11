import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { Card, Grid } from "@material-ui/core";
import { userService } from "../../services/userService";
import ApplicationStatus from "./applicationStatus";
import SummaryFormUsers from "./summaryFormUsers";

class AdminUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    await userService.getAll().then(users => {
      this.setState({ users });
    });

    // add this to filter admin users.find(v => !v.isAdmin)
  }

  getUser = id => {
    return this.state.users.find(v => v._id === id);
  };

  render() {
    const tableTitle = ["Users List"];
    const { users } = this.state;
    console.log(users);
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
        name: "accountStatus",
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
        name: "dateCreated",
        label: "Memeber Since",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "dateModified",
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
            const { rowData } = tableMeta;
            if (rowData) {
              return <SummaryFormUsers data={this.getUser(rowData[0])} />;
            }
          }
        }
      }
    ];

    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      print: false,
      onRowsDelete: rowsDeleted => {
        rowsDeleted.users.map(rowDeleted =>
          console.log(this.state.users[rowDeleted.dataIndex])
        );
      }
    };
    return (
      <React.Fragment>
        <Grid container justify="center">
          <Card raised>
            <MUIDataTable
              title={"Users Consolidation Table"}
              data={this.state.users}
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
