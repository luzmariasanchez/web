
export function validate(item, schema, options) {
  const validation = {
    $hasError: false,
    $errors: []
  };
  Object.keys(schema).forEach(fieldKey => {
    const field = schema[fieldKey];
    validation[fieldKey] = {
      $hasError: false,
      $errors: []
    };
    Object.keys(field).forEach(validatorKey => {
      const validationResult = field[validatorKey](item[fieldKey], item, fieldKey, options);
      validation[fieldKey][validatorKey] = validationResult;
      if (validation[fieldKey][validatorKey] !== true) {
        validation[fieldKey].$hasError = true;
        validation[fieldKey].$errors.push(validationResult);
        validation.$hasError = true;
        validation.$errors.push(validationResult);
      }
    })
  })
  return validation;
}