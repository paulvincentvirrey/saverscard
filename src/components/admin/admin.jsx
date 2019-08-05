import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { Chip, Card, Grid } from "@material-ui/core";
// import { withStyles } from "@material-ui/core/styles";
import { getVendors, getVendor } from "../../services/fakeVendorService";
import VendorStatus from "./vendorStatus";
import EditButton from "./editButton";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: getVendors()
    });
  }

  render() {
    const tableTitle = ["Vendor List"];
    const { data } = this.state;
    // const { businessName, authorizedPerson } = vendorInformation;

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
        name: "name",
        label: "Company Name",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "category",
        label: "Category",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "discountRate",
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
        name: "status",
        label: "Application Status",
        options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta) => {
            return <VendorStatus value={value} index={tableMeta.columnIndex} />;
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
              <EditButton
                data={getVendor(
                  tableMeta.rowData ? tableMeta.rowData[0] : null
                )}
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
              title={"Vendor Consolidation"}
              data={this.state.data}
              columns={columns}
              options={options}
            />
          </Card>
        </Grid>
        >
      </React.Fragment>
    );
  }
}

export default Admin;
