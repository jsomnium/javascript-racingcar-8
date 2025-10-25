import { Console } from '@woowacourse/mission-utils';
import { Message } from '../constant/index.js';

class InputView {
  async inputName() {
    const inputString = await Console.readLineAsync(Message.NAME_PROMPT);
    return inputString;
  }

  async inputRound() {
    const roundsString = await Console.readLineAsync(Message.ROUNDS_PROMPT);
    return roundsString;
  }
}

export default InputView;