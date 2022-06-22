class FormValidation {
  validateText = (data) => {
    const text_regex = /^[A-Za-z]+$/;
    if (text_regex.test(data))
      return "OK";
    else return false;
  };
  validateDate = (data) => {
    const date_regex = /^\d{2,4}-\d{2,4}-\d{2,4}$/;

    if (date_regex.test(data))
      return "OK";
    else return false;
  };
}

export default FormValidation;
