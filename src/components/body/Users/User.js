import React, { Component } from "react";


import "../../../css/body/User.css"
import ModalDeleteUser from "./ModalDeleteUser";
import ModalUpdateUser from "./ModalUpdateUser";

class User extends Component {
  state = {
    modalDeleteUser: false,
    modalUpdateUser: false,
  };

  toggleModalDeleteUser = () => {
    console.log("You cliked");
    console.log(!this.modalDeleteUser)
    this.setState(prevState => ({
      modalDeleteUser: !prevState.modalDeleteUser
    }));
  };

  toggleModalUpdateUser = () => {
    this.setState(prevState => ({
      modalUpdateUser: !prevState.modalUpdateUser
    }));
  };


  render() {
    const {
      id,
      firstName,
      lastName,
      birthDate,
      role,
      email,
      url,
      creationDate
    } = this.props.user;

    return (
      <>
        <tr key={id} >
          <td><img src={url}
            alt="..."
            className="profilPicture" /></td>
          <td className="cell" > {lastName}</td>
          <td className="cell" >{firstName}</td>
          <td className="cell" >{email}</td>
          <td className="cell" >{birthDate}</td>
          <td className="cell" >{role}</td>
          <td className="cell" >{creationDate}</td>
          <td  className="cell"> <button className="update" onClick={this.toggleModalUpdateUser}>
              <i className="fas fa-pen"></i>
            </button>
            <button className="delete" onClick={this.toggleModalDeleteUser}>
            <i className="fas fa-trash-alt" ></i>
          </button></td>


        </tr>

        <ModalDeleteUser
          id={id}
          modalDeleteUser={this.state.modalDeleteUser}
          toggleModalDeleteUser={this.toggleModalDeleteUser}
          fetchUsers={this.props.fetchUsers}
        />

    <ModalUpdateUser
          id={id}
          modalUpdateUser={this.state.modalUpdateUser}
          toggleModalUpdateUser={this.toggleModalUpdateUser}
          handleOnChange={this.handleOnChange}
          fetchUsers={this.props.fetchUsers}
        />


      </>
    );
  }
}

export default User;
