﻿import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class PersonRow extends React.Component {
    render() {

        return (<tr className={this.props.person.age > 65 ? 'table-danger' : ''}>
            <td>{this.props.person.firstName}</td>
            <td>{this.props.person.lastName}</td>
            <td>{this.props.person.age}</td>
        </tr>)
    }
}

export default PersonRow;