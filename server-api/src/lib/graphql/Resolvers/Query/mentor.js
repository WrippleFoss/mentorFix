/* eslint-disable no-unreachable */

const mentor = async (parent, args) => {
  try {
    return {
      name: 'Palash',
      links: 'links',
    };
  } catch (error) {
    return {
      statusCode: 500,
      error: 'Server Error',
    };
  }
};

export default mentor;
