import React from 'react';

class PeopleTable extends React.Component {
    render() {

        return (<div class="row header">
            <div class="table-responsive">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.people.map(p => <tr>
                            <td>{p.firstName}</td>
                            <td>{p.lastName}</td>
                            <td>{p.age}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
        )

    }
}
export default PeopleTable;