import Resolutions from './resolutions';

// Resolutions.insert({
//     name: 'Staryu'
// })

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
    }
};