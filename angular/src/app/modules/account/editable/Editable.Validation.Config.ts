interface PatternMessage {
  pattern: RegExp;
  ErrorMessage: string;
}
var ValidationConfig: { [key: string]: PatternMessage } = {};

ValidationConfig['credit-card'] = {
  pattern: /\d{4}-?\d{4}-?\d{4}-?\d{4}/,
  ErrorMessage: 'Please enter a valid credit card number ex: 1234-1234-1234-1234',
};
ValidationConfig['name'] = {
  pattern: /^[a-zA-Z]+(([',.-][a-zA-Z])?[a-zA-Z]*)*$/,
  ErrorMessage: 'Names cannout contain punctuation, spaces or numbers',
};
ValidationConfig['email'] = {
  pattern: /^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
  ErrorMessage: 'email must be: user@example.com',
};
ValidationConfig['city'] = {
  pattern: /(([0-9]{2}|0{1}((x|[0-9]){2}[0-9]{2})))s*[0-9]{3,4}[- ]*[0-9]{4}/,
  ErrorMessage: 'email must be: user@example.com',
};
export default ValidationConfig;
