import React from "react";

class Client extends React.Component {
  render() {
    // const details = this.props.details;
    // const onDelete = this.props.onDelete;
    const { details, onDelete } = this.props; // destructuration
    return (
      <li key={details.id}>
        {details.nom} <button onClick={() => onDelete(details.id)}>X</button>
      </li>
    );
  }
}

export default Client;
