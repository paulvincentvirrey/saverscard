import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { userService } from "../../services/userService";
import ApplicationStatus from "../applicationStatus";
import SummaryFormUsers from "./summaryFormUsers";
import Header from "../landingPage/Header";
import HeaderLinks from "../landingPage/HeaderLinkInApp";
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
  table: {
    marginTop: theme.spacing(9)
  }
});
class AdminUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    await userService.getAll().then(users => {
      const filteredUsers = users.filter(v => !v.isAdmin);
      this.setState({ users: filteredUsers });
    });
  }

  getUser = id => {
    return this.state.users.find(v => v._id === id);
  };

  render() {
    const { users } = this.state;
    console.log(users);

    const muiDatatableTheme = createMuiTheme({
      overrides: {
        MUIDataTable: {
          responsiveScroll: {
            maxHeight: "100%"
          }
        }
      },
      palette: {
        primary: {
          main: green[800]
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
            if (value != null) {
              var date = new Date(value);
              return date.toLocaleString("en-US", { timeZone: "UTC" });
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
            if (value != null) {
              var date = new Date(value);
              return date.toLocaleString("en-US", { timeZone: "UTC" });
            }
          }
        }
      },
      {
        name: "",
        label: "Edit Record",
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
      selectableRows: "single",
      onRowsDelete: async rowsDeleted => {
        const user = this.state.users[rowsDeleted.data[0].dataIndex];
        await userService
          .deleteUser(user._id)
          .then(x => {
            return true;
          })
          .catch(err => {
            return false;
          });
      }
    };

    const { classes } = this.props;
    const dashboardRoutes = [];

    return (
      <React.Fragment>
        <Header
          color="dark"
          routes={dashboardRoutes}
          brand="SAVERSCARD"
          rightLinks={<HeaderLinks />}
          fixed
        />
        <Grid container className={classes.table} justify="center">
          <Card raised>
            <MuiThemeProvider theme={muiDatatableTheme}>
              <MUIDataTable
                title={"USERS CONSOLIDATION"}
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

export default withStyles(useStyles)(AdminUsers);
