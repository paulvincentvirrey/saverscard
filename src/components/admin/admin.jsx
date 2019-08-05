import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import {
  Chip,
  Card,
  Container,
  Paper,
  Typography,
  Button
} from "@material-ui/core";
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
        name: "",
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
        <Paper>
          <Container>
            <Card raised>
              <MUIDataTable
                title={"Vendor Consolidation"}
                data={this.state.data}
                columns={columns}
                options={options}
              />
            </Card>
          </Container>
        </Paper>
      </React.Fragment>
    );
  }
}

export default Admin;
