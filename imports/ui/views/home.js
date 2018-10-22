import React, {Component} from 'react';
import Nav from '../components/nav';
import UserForm from '../components/UserForm';

class Home extends Component {
  render() {
    const {data} = this.props;
    return (
      <React.Fragment>
        <Nav things={data.hi} openSignup={this.toggleSignup}/>
        <h1>Mentor fix is an open source platform where users can become mentors and find other users who can benifit from their mentoring.</h1>
        <UserForm/>
      </React.Fragment>
    );
  }
}

export default Home;
