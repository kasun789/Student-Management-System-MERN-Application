import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nonAcademicStaff: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://localhost:3500/nonAcademicStaff").then((res) => {
      if (res.data.success) {
        this.setState({
          nonAcademicStaff: res.data.existingPosts,
        });
        //console.log(this.state.teachers);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:3500/nonAcademicStaff/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePosts();
    });
  };

  render() {
    return (
      <div className="container">
        <p>All Details of Non Academic Staff</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Subject</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.teachers.map((nonAcademicStaff, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/teacher/${nonAcademicStaff._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {nonAcademicStaff.Name}
                  </a>
                </td>
                <td scope>{nonAcademicStaff.Subject}</td>
                <td scope>{nonAcademicStaff.Address}</td>
                <td>
                  <a className="btn btn-warning" href={`/edit/${nonAcademicStaff._id}`}>
                    <i className="fas fa-edit"></i>&nbsp; Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(nonAcademicStaff._id)}
                  >
                    <i className="fas fa-trash-alt"></i>&nbsp; Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success">
          <a href="/add" style={{ textDecoration: "none", color: "white" }}>
            Add New Staff Member
          </a>
        </button>
      </div>
    );
  }
}
