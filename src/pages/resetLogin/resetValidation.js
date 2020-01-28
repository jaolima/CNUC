import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateReset(data) {
  const errors = {};

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Este campo é obrigatório';
  } else if (!Validator.equals(data.username, '00')) {
    errors.wrongUsername = true;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
