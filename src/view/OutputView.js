import { Console } from '@woowacourse/mission-utils';
import { Message } from '../constant/index.js';

class OutputView {
  printRound(roundResult) {
    Console.print(roundResult);
  }

  printResult() {
    Console.print(Message.RESULT_PROMPT);
  }
}

export default OutputView;