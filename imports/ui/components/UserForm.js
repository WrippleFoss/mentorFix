import React,{ Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

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

export default graphql(createUser,{
    name: 'createUser'
})(UserForm);