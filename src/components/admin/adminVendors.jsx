import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { Card, Grid } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { vendorService } from "../../services/vendorService";
import ApplicationStatus from "./applicationStatus";
import SummaryFormVendors from "./summaryFormVendors";

class AdminVendors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: []
    };
  }

  async componentDidMount() {
    await vendorService.getAll().then(vendors => {
      this.setState({ vendors });
    });
  }

  getVendor = id => {
    return this.state.vendors.find(v => v._id === id);
  };

  render() {
    const { vendors } = this.state;

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
        name: "businessName",
        label: "Company Name",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "vendorCategory",
        label: "Category",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "discountInPercent",
        label: "Discount Rate",
        options: {
          filter: true,
          sort: false
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
        name: "applicationStatus",
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
              return <SummaryFormVendors data={this.getVendor(rowData[0])} />;
            }
          }
        }
      }
    ];

    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      print: false,
      viewColumns: false,
      onRowsDelete: rowsDeleted => {
        rowsDeleted.vendors.map(rowDeleted =>
          console.log(vendors[rowDeleted.dataIndex])
        );
      }
    };
    return (
      <React.Fragment>
        <Grid container justify="center" alignItems="center">
          <Card>
            <MuiThemeProvider theme={muiDatatableTheme}>
              <MUIDataTable
                title={"Vendor Consolidation Table"}
                data={vendors}
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

export default AdminVendors;
