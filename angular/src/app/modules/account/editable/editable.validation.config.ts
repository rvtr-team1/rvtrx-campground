interface PatternMessage {
  pattern: RegExp;
  ErrorMessage: string;
}
const ValidationConfig: { [key: string]: PatternMessage } = {};

ValidationConfig.creditCard = {
  pattern: /\d{4}-?\d{4}-?\d{4}-?\d{4}/,
  ErrorMessage: 'Please enter a valid credit card number ex: 1234-1234-1234-1234',
};
ValidationConfig.name = {
  pattern: /^[a-zA-Z]+(([',.-][a-zA-Z])?[a-zA-Z]*)*$/,
  ErrorMessage: 'Names cannot contain punctuation, spaces or numbers',
};

ValidationConfig.city = {
  pattern: /^[A-Za-z ]+$/,
  ErrorMessage: 'Please enter a valid city ex. New York',
};
ValidationConfig.date = {
  pattern: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
  ErrorMessage: 'Please enter a valid date in the format dd/mm/yyyy',
};
ValidationConfig.state = {
  pattern: /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/,
  ErrorMessage: 'Please enter a valid US state ex. NY',
};
ValidationConfig.street = {
  pattern: /^[#.0-9a-zA-Z\s,-]+$/,
  ErrorMessage: 'Please enter a valid street address',
};
ValidationConfig.postal = {
  pattern: /^[0-9]{5}$/,
  ErrorMessage: 'Please enter a valid zip code ex. 12345',
};

export default ValidationConfig;
