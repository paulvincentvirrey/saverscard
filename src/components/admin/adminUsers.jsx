import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
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

  // handleDelete = async () => {
  //   const {
  //     id,
  //     status,
  //     username,
  //     email,
  //     businessName,
  //     website,
  //     address1,
  //     address2,
  //     city,
  //     zipCode,
  //     telephone,
  //     fax,
  //     authPersonName,
  //     authPersonEmail,
  //     authPersonPhone,
  //     category,
  //     discount,
  //     remarks
  //   } = this.state;

  //   this.setState({
  //     errors: {}
  //   });

  //   if (this.handleValidation()) {
  //     var today = new Date();
  //     var dd = String(today.getDate()).padStart(2, "0");
  //     var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  //     var yyyy = today.getFullYear();

  //     today = mm + "/" + dd + "/" + yyyy;

  //     const updatedForm = {
  //       applicationStatus: status,
  //       username: username,
  //       email: email,
  //       businessName: businessName,
  //       website: website,
  //       address1: address1,
  //       address2: address2,
  //       city: city,
  //       zip: zipCode,
  //       telephone: telephone,
  //       fax: fax,
  //       authorizedPerson: authPersonName,
  //       authorizedPersonEmail: authPersonEmail,
  //       authorizedPersonPhone: authPersonPhone,
  //       vendorCategory: category,
  //       discountInPercent: discount,
  //       remarks: remarks,
  //       dateModified: today
  //     };
  //     const vendor = await vendorService.updateVendor(id, updatedForm);
  //     console.log(vendor);
  //   }
  //   this.handleClose();
  //   this.handleClose2();
  // };

  getUser = id => {
    return this.state.users.find(v => v._id === id);
  };

  render() {
    const tableTitle = ["Users List"];
    const { users } = this.state;
    console.log(users);

    const muiDatatableTheme = createMuiTheme({
      overrides: {
        MUIDataTable: {
          responsiveScroll: {
            maxHeight: "720px"
          }
        }
      }
    });

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
        label: "Member Since",
        options: {
          filter: true,
          sort: false,
          customBodyRender: value => {
            console.log(typeof value);
            if (value != null) {
              const date = new Date(value);
              return date.toLocaleString();
            }
          }
        }
      },
      {
        name: "dateModified",
        label: "Date Modified",
        options: {
          filter: true,
          sort: false,
          customBodyRender: value => {
            console.log(typeof value);
            if (value != null) {
              const date = new Date(value);
              return date.toLocaleString();
            }
          }
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
            <MuiThemeProvider theme={muiDatatableTheme}>
              <MUIDataTable
                title={"Users Consolidation Table"}
                data={this.state.users}
                columns={columns}
                options={options}
              />
            </MuiThemeProvider>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
}

export default AdminUsers;
