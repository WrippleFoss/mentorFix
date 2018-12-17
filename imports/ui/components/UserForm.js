import React,{ Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import { connect } from 'react-redux';

const createUser = gql`
    mutation createUser{
        createUser{
            _id
        }
    }
`;

class UserForm extends Component{
    submitForm = ()=>{
        console.log(this.name.value);
    }
    render(){
        return(
            <div>
                <input ref={input => (this.name=input)}/>
                <button onClick={this.submitForm}>Submit</button>
            </div>
        )
    }
}
const mapStateToProps= (state) =>{
    console.log("initState",state);
    return {
        initState : state
    }
}
const reduxUserForm = connect(mapStateToProps)(UserForm);
export default graphql(createUser,{
    name: 'createUser'
})(reduxUserForm);