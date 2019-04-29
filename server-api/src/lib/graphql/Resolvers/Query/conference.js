/* eslint-disable no-unreachable */

const conference = async (parent, args) => {
  try {
    return 'conference';
  } catch (error) {
    return {
      statusCode: 500,
      error: 'Server Error',
    };
  }
};

export default conference;
