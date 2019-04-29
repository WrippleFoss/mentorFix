/* eslint-disable no-underscore-dangle */
import Mentor from '../../../database/mongodb/model/mentor';

/**
 * @async
 * @function
 * @description
 *
 * @todo Make seprate db functions
 */
const mentor = async (parent, args) => {
  try {
    const res = await Mentor.create({
      name: args.name,
      email: args.email,
      verified: false,
    });

    return {
      statusCode: 201,
      message: 'Success',
      payload: {
        id: res._id,
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      error: 'Server Error',
    };
  }
};

export default mentor;
