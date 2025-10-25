import { Message } from "../constant/index.js";

class Validator {
  static validateCarNames(names) {
    names.forEach(name => {
      if (name.includes(' ')) {
        throw new Error(Message.ERROR_PREFIX + Message.NOT_ALLOW_SPACE);
      }
      if (name.length > 5) {
        throw new Error(Message.ERROR_PREFIX + Message.NOT_ALLOW_NAME_LENGTH);
      }
    });
  }
}

export default Validator;