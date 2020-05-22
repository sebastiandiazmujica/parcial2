import React, { Component } from "react";
import Pelicula from "./pelicula";

class peliculas extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    let url =
      this.props.locale == "es"
        ? "https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json "
        : "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json";

    const data = fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({data:myJson})
      });
  }

  render() {
    return (
        <div className="container">
             <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Directed By</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
         {this.state.data && this.state.data.map( (item , i)  =>{
             return <Pelicula key={i} pelicula= {item}/>
         })}
        </tbody>
      </table>
        </div>
    );
  }
}

export default peliculas;
