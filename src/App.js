import './App.css';
import React, {Component} from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Sort from "./components/Sort/Sort";
import API from "./utils/API";
import {Container, Row} from "./components/Grid/index";
class App extends React.Component {
  //set states
  state={
    initialEmp:[],
    display:[],
    search:"",
    sort:"",
    checked:false
  }

  //did components mount
  componentDidMount(){
    API.getEmployee()
    .then(res=>
      this.setState({
        ...this.state,
        initialEmp:res.data.results,
        display:res.data.results
      },console.log(res.data.results)))
      .catch(err=>console.log(err));
  }


  handleInputChange=event=>{
    const search = event.target.value;
    console.log(search);
    this.setState(prevState=>({
      display:search.length >0 ? this.search(search, prevState.initialEmp)
      : prevState.initialEmp
    }))
  }

  search=(search,data) =>{
    return data.filter(employee=>{
      const firstName = employee.name.first;
      const lastName=employee.name.last;
      const fullName=firstName.toLowerCase() + " " + lastName.toLowerCase();
      return fullName.includes(search.toLowerCase());
    })
  }

//Stack overflow
//   users.sort(function(a, b){
//     if(a.firstname < b.firstname) { return -1; }
//     if(a.firstname > b.firstname) { return 1; }
//     return 0;
// })
  sortAscending=()=>{
    console.log("clicked z-a");
    //the concat should make the json object of employees go into the array
    const sorted=[].concat(this.state.initialEmp).sort((a,b)=> a.name.first < b.name.first ? 1 : -1);
    return this.setState({
      //this passes the state object itself
      ...this.state,
      display:sorted
    })
  }

  sortDescending=()=>{
    console.log("clicked a-z");
    //the concat should make the json object of employees go into the array
    const sorted=[].concat(this.state.initialEmp).sort((a,b)=> a.name.first > b.name.first ? 1 : -1);
    return this.setState({
      //this passes the state object itself
      ...this.state,
      display:sorted
    })
  }
  onChange = event=>{
    const value = event.target.checked;
    console.log(value);
    if(value){
      this.sortAscending();
    }
    else{
      this.sortDescending();
    }
  }

  render(){
    return (
      <div className="App">
        <Navbar
          handleInputChange={this.handleInputChange}
          searchEmp = {this.searchEmp}
        />
        <Sort
            onChange={this.onChange}
          />
        <Container>
          <Row>
            {this.state.display.map(employee=>
              <Card 
                image={employee.picture.large}
                key={employee.id.name}
                firstName={employee.name.first}
                lastName={employee.name.last}
                username={employee.login.username}
                email={employee.email}
                phone={employee.cell}
                country={employee.location.country}
              />
            )}
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
