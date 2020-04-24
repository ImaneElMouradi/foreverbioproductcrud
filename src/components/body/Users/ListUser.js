import React, { Component } from "react";
import { Table } from 'reactstrap';
import axios from "axios";


import ModalAddProduct from "../Users/ModalAddUser";
import User from "./User"


class ListUser extends Component {
  state = {
    users: []
  };

  fetchUsers = async () => {
    return axios.get("http://localhost:9092/user").then(res => {
      const users = res.data;
      console.log(users);
      this.setState({ users });
    });
  };

  componentDidMount = () => {
    this.fetchUsers();
  };

  onChangeSearchText = e => {
    this.setState({ search: e.target.value });
  };


  onSubmitSearchText = () => {
    axios
      .get("http://localhost:9092/user?search=" + this.state.search)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      });
  };

  render() {


    return (
      <>
        <div className="search-container search">
          <select className="mr-3"
            type="select"
            name="role"
            style={{
              width: "200px",
              height: "30px"
            }}
            defaultValue="Choisir un role"
            onChange={async (e) => {
              e.persist()

          
              await this.fetchUsers();

                this.setState({
                  users: this.state.users.filter((user) => e.target.value==="Tout" || user.role === e.target.value)
                    
                });
              } 


            }
          >
            <option >Tout</option>
            <option>Utilisateur</option>
            <option>Administrateur</option>
          </select>

          <input
            type="text"
            placeholder="Search.."
            name="search"
            autoComplete="off"
            onChange={this.onChangeSearchText}
          />





          <button type="submit" onClick={this.onSubmitSearchText}>
            <i className="fa fa-search"></i>
          </button>
          <button className="refresh ml-3" onClick={this.fetchUsers}>
            <i class="fas fa-redo-alt"></i>
          </button>
        </div>

        <ModalAddProduct fetchUsers={this.fetchUsers} />
        <div style={
          {
            margin: "50px",

          }
        }>


          <Table hover style={{
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            <thead>
              <tr>
                <th>Photo</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Date de naissance</th>
                <th>Role</th>
                <th>Date de création</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(user => (
                <User
                  key={user.id}
                  user={user}
                  fetchUsers={this.fetchUsers}
                />

              ))}

            </tbody>

          </Table >

        </div>

      </>
    );
  }
}

export default ListUser;
