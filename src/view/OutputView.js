import { Console } from '@woowacourse/mission-utils';
import { Message } from '../constant/index.js';

class OutputView {
  printRound(roundResult) {
    Console.print(roundResult);
  }

  printResult() {
    Console.print(Message.RESULT_PROMPT);
  }

  printWinners(winners) {
    Console.print(Message.WINNER_PREFIX + winners);
  }

  printError(errorMessage) {
    Console.print(errorMessage);
  }
}

export default OutputView;