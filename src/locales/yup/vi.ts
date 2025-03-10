export default {
  mixed: {
    required: '${path} không được để trống!'
  },
  string: {
    email: '${path} không hợp lệ!',
    min: '${path} phải lớn hơn ${min} ký tự'
  },
  number: {
    min: '${path} phải lớn hơn hoặc bằng ${min}!',
    max: '${path} phải nhỏ hơn hoặc bằng ${max}!'
  }
};
