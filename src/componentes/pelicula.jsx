import React from "react";

export default function Pelicula(props) {
  let pelicula = props.pelicula;
  return (
    <tr>
      <th scope="row">props.indice</th>
      <td>props.pelicula.name</td>
      <td>props.pelicula.directedBy</td>
      <td>props.pelicula.country</td>
    </tr>
  );
}
