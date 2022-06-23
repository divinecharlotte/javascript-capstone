class FormValidation {
  validateText = (data) => {
    const textRegex = /^[A-Za-z]+$/;
    if (textRegex.test(data)) return 'OK';
    return false;
  };

  validateDate = (data) => {
    const dateRegex = /^\d{2,4}-\d{2,4}-\d{2,4}$/;

    if (dateRegex.test(data)) return 'OK';
    return false;
  };
}

export default FormValidation;
