import React, { Component } from "react";
import axios from "axios";

export default class AddNonAcademicStaff extends Component {

    
      constructor(props) {
        super(props);
        this.state = {
          Name: "",
          NIC:"",
          ContactNo: "",
          Position: "",
          Email: "",
        };
      }
    
      handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          ...this.state,
          [name]: value,
        });
      };
    
      onSubmit = (e) => {
        e.preventDefault();
        const { Name, NIC, ContactNo, Position, Email } = this.state;
        const data = {
          Name: Name,
          NIC: NIC,
          ContactNo: ContactNo,
          Position: Position,
          Email: Email
        }
    
        axios.post("/nonAcademicStaff/save", data).then((res) => {
          if (res.data.success) {
            this.setState({
                Name: "",
                NIC: "",
                ContactNo: "",
                Position: "",
                Email: ""
            })
          }
        })
      };
    
      render() {
        return (
          <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Add Non Academic Staff</h1>
            <form className="needs-validation" noValidate>
              <div classname="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  placeholder="Enter Name"
                  value={this.state.Name}
                  onChange={this.handleInputChange}
                ></input>
              </div>

              <div classname="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>NIC</label>
                <input
                  type="text"
                  className="form-control"
                  name="NIC"
                  placeholder="Enter NIC Number"
                  value={this.state.NIC}
                  onChange={this.handleInputChange}
                ></input>
              </div>
    
              <div classname="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>ContactNo</label>
                <input
                  type="text"
                  className="form-control"
                  name="ContactNo"
                  placeholder="Enter ContactNo"
                  value={this.state.ContactNo}
                  onChange={this.handleInputChange}
                ></input>
              </div>
    
              <div classname="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Position</label>
                <input
                  type="text"
                  className="form-control"
                  name="Position"
                  placeholder="Enter Position"
                  value={this.state.Position}
                  onChange={this.handleInputChange}
                ></input>
              </div>
              <div classname="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="Email"
                  placeholder="Enter Email"
                  value={this.state.Email}
                  onChange={this.handleInputChange}
                ></input>
              </div>
    
              <button
                className="btn btn-success"
                type="submit"
                style={{ marginTop: "15px" }}
                onClick={this.onSubmit}
              >
                <i className="far fa-check-square"></i>
                &nbsp; Save
              </button>
            </form>
          </div>
        );
      }
    }
    