function validate_password(password, password_confirm, min_length) {
  let numerals = '0123456789';
  let alphabet = 'abcdefghijklmnopqstuvwxyz';

  let invalid_msg = `password length must be greater than or equeal to ${min_length} and it must contain both letters and numbers. It is too weak, my friend`;

  let password_not_same_msg = 'passwords did\'t match'

  if (password !== password_confirm) {
    return {error: password_not_same_msg};
  }

  if (password.length < min_length) {
    return {error: invalid_msg};
  }

  let deducted_numerals = numerals;
  for (let i in password) {
    deducted_numerals = deducted_numerals.replace(password[i], '');
  }


  if (deducted_numerals === numerals) {
    return {error: invalid_msg};
  }

  let deducted_alphabet = alphabet;
  for (let i in password) {
    deducted_alphabet = deducted_alphabet.replace(password[i], '');
  }


  if (deducted_alphabet === alphabet) {
    return {error: invalid_msg};
  }

  return true

}


export default validate_password;