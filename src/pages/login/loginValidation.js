import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  const errors = {};

  if (Validator.isEmpty(data.username) && Validator.isEmpty(data.password)) {
    errors.username = 'Este campo é obrigatório';
    errors.password = 'Este campo é obrigatório';
  } else if (Validator.isEmpty(data.username) && !Validator.isEmpty(data.password)) {
    errors.username = 'Este campo é obrigatório';
  } else if (!Validator.isEmpty(data.username) && Validator.isEmpty(data.password)) {
    errors.password = 'Este campo é obrigatório';
  } else if (!Validator.equals(data.username, '00') && Validator.equals(data.password, '00')) {
    errors.wrongUsername = true;
  } else if (!Validator.equals(data.username, '00') && !Validator.equals(data.password, '00')) {
    errors.wrongUserAndPassword = true;
  } else if (Validator.equals(data.username, '00') && !Validator.equals(data.password, '00')) {
    errors.wrongPassword = true;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
