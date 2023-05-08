import React from 'react';
import PersonRow from './PersonRow'
import 'bootstrap/dist/css/bootstrap.min.css';

class PeopleTable extends React.Component {
    render() {

        if (!this.props.people[0]) {
            return (<h1>No People! Add a person!</h1>)
        }
        else {

            return (<div className="row header">
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.people.map(p => <PersonRow person={p}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
            )

        }

    }
}
export default PeopleTable;