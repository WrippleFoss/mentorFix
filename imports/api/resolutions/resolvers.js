import Resolutions from './resolutions';



export default {
    Query: {
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