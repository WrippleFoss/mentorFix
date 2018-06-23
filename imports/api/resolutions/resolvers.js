import Resolutions from './resolutions';



export default {
    Query: {
        users() {
            return Resolutions.find({}).fetch();
        },
        mentors() {
            return [{
                _id: "afeqfqeg",
                name: "Mentor 1"
            }]
        }
    },
    Mutation: {
        createUser(){
            // const resID=Resolutions.insert({
            //     name: 'Staryu'
            // })
        }
    }
};