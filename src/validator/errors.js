const errors = {
  ERR_FIELDS_INVALID: 'Fields is invalid',
  ERR_IS_REQUIRED(field) {
    return {
      code: 'ERR_IS_REQUIRED',
      message: `${field} is required`
    };
  },
  ERR_IS_INVALID(field) {
    return {
      code: 'ERR_IS_INVALID',
      message: `${field} is invalid`
    };
  },
  ERR_NOT_FOUND(field) {
    return {
      code: 'ERR_NOT_FOUND',
      message: `${field} not found`
    };
  },
  ERR_IS_DUPLICATED(field) {
    return {
      code: 'ERR_IS_DUPLICATED',
      message: `${field} is duplicated`
    };
  },
};

const codes = Object.keys(errors);
for (const code of codes) {
  if (typeof errors[code] !== 'function') {
    errors[`${code}_MSG`] = errors[code];
    errors[code] = code;
  }
}

module.exports = errors;