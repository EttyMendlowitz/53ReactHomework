import React from 'react';
import PersonForm from './PersonForm';
import PeopleTable from './PeopleTable';
import 'bootstrap/dist/css/bootstrap.min.css';

class People extends React.Component {

    state = {
        people: [],
        currentFirstName: '',
        currentLastName: '',
        currentAge: ''
    }

    onFirstNameChange = (e) => {
        this.setState({ currentFirstName: e.target.value });
    }

    onLastNameChange = (e) => {
        this.setState({ currentLastName: e.target.value });
    }

    onAgeChange = (e) => {
        this.setState({ currentAge: e.target.value });
    }

    onClearClick = () => {
        this.setState({ currentFirstName: '', currentLastName: '', currentAge: '' });
    }

    onAddClick = () => {
        const copy = [...this.state.people];
        const person = {
            firstName: this.state.currentFirstName,
            lastName: this.state.currentLastName,
            age: parseInt(this.state.currentAge)
        }
        copy.push(person);
        this.setState({ people: copy, currentAge: '', currentFirstName: '', currentLastName: '' });
    }

    render() {
        return (
            <div className='container mt-5'>
                <PersonForm currentFirstName={this.state.currentFirstName}
                    currentLastName={this.state.currentLastName}
                    currentAge={this.state.currentAge}
                    onClearClick={this.onClearClick}
                    onFirstNameChange={this.onFirstNameChange}
                    onLastNameChange={this.onLastNameChange}
                    onAgeChange={this.onAgeChange}
                    onAddClick={this.onAddClick}
                />

                < PeopleTable people={this.state.people} />
            </div>
        )
    }
}

export default People;