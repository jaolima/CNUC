import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validatePassword(data) {
  const errors = {};

  if (Validator.isEmpty(data.password1) && Validator.isEmpty(data.password2)) {
    errors.password = 'Este campo é obrigatório';
  } else if (data.password1 !== data.password2) {
    errors.password = 'Senhas não correspondem';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
