import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addFriend} from '../actions';

class AddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addFriend(this.state)
        this.setState({
            name: '',
            age: '',
            email: '',
        })
    }

    render(){
        return(
            <form onSubmit={this.submitHandler} >
                <input name='name' placeholder='Name' onChange={this.inputHandler} value={this.state.name} />
                <input name='age' placeholder='Age' onChange={this.inputHandler} value={this.state.age}/>
                <input name='email' placeholder='Email' onChange={this.inputHandler} value={this.state.email}/>
                <button type='submit'>Add Friend</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    friends: state.friends,
    error: state.error,
    loading: state.loading,
    }
  };

export default connect(mapStateToProps, { addFriend })(AddForm);