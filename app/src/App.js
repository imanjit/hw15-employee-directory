import React, { Component } from "react";
import "./App.css";
import API from "./api/api"
import Search from "./components/search";
import Results from "./components/results";

class App extends Component {

  state = {
    allUsers: [],
    filteredResults: [],
    searchData: ""
  }

  componentDidMount() {
    API.getData()
    .then(users => {
      this.setState({
        allUsers: users.data.results,
        filteredResults: users.data.results
      })
    })
  }

  handleChange = event => {
    const searchData = event.target.value;
    const filteredUsers = this.state.allUsers.filter(user => 
      user.name.first.indexOf(searchData)>=0 || 
      user.name.last.indexOf(searchData)>=0 || 
      user.email.indexOf(searchData)>=0 || 
      user.phone.indexOf(searchData)>=0 || 
      user.location.city.indexOf(searchData)>=0 ||
      user.location.country.indexOf(searchData)>=0);
    this.setState({filteredResults: filteredUsers})
  }

  handleSubmit = event => {
    const searchData = event.target.value;
    const filteredUsers = this.state.allUsers.filter(user => user.name.first.indexOf(searchData)>=0);
    this.setState({filteredResults: filteredUsers})
  }

  render() {
    return (
      <>
      <Search 
      handleChange={this.handleChange}
      searchData={this.state.searchData}
      handleSubmit={this.handleSubmit}
      />
      <Results users={this.state.filteredResults}/>
      </>
    );
  }

};

export default App;
