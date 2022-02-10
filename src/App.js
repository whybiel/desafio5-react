import React, {Component} from "react";

export default class List extends Component{
  state = {
    name:[
      {nome:"Gabriel", idade:17},
      {nome:"Jojo Toddynho", idade:48},
      {nome:"Mariana", idade:70},
      {nome:"Graciane Barbosa", idade:15},
      {nome:"Andreia", idade:43},
      {nome:"Anita", idade:106}
    ]
  }
  render(){
    return(
      <div>
        {this.state.name.map((item) => (
          <div>
            <h2>Olá, {item.nome} você tem {item.idade} anos!</h2>
          </div>
        ))}
      </div>
    )
  }
}