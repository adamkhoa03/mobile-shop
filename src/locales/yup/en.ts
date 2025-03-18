export default {
  mixed: {
    required: '${path} cannot be empty!'
  },
  string: {
    email: '${path} is not valid!',
    min: '${path} must be greater than ${min} characters',
    required: '${path} cannot be empty!'
  },
  number: {
    min: '${path} must be greater than or equal to ${min}!',
    max: '${path} must be less than or equal to ${max}!'
  }
};
