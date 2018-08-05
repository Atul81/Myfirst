import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080\n' +
            '/staticdata/getUserCollection')
            .then(res => {
                console.log(res);
                this.setState({contacts: res.data.responseBody});
            });
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            CONTACTS LIST
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign"
                                                     aria-hidden="true"></span> Add Contact</Link></h4>
                        <table className="table table-stripe">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.contacts.map(c =>
                                <tr>
                                    <td><Link to={`/show/${c.id}`}>{c.name}</Link></td>
                                    <td>{c.location}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;