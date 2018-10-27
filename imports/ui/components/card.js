import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
const createUser = gql`
    mutation createUser{
        createUser{
            _id
        }
    }
`;
class CardExampleExpandable extends Component {
    render() {
        return (
            <Card>
                <CardHeader
                    title="Abhishek Prasad"
                    subtitle="Tech Geek"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                   Abhishek is a tech-savvy and loves to code.
    </CardText>
            </Card>
        );
    }
}
export default CardExampleExpandable;
