import React from "react";
import Client from "./Client";
import ClientForm from "./ClientForm";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Lior Chamla" },
      { id: 2, nom: "Magali Pernin" },
      { id: 3, nom: "Joseph Durand" },
    ],
  };

  handleDelete = (id) => {
    const clients = [...this.state.clients];
    const index = clients.findIndex((client) => client.id === id);

    clients.splice(index, 1);

    this.setState({ clients });
  };

  handleAdd = (client) => {
    const clients = [...this.state.clients];
    clients.push(client);

    this.setState({ clients });
  };

  render() {
    const title = "Liste des clients";

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map((client) => (
            <Client
              key={client.id}
              details={client}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
