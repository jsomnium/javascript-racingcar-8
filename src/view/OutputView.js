import { Console } from '@woowacourse/mission-utils';
import { Message } from '../constant/index.js';

class OutputView {
  printRound(cars) {
    const roundOutput = cars.map(car => {
      return `${car.getName()} : ${'-'.repeat(car.getPosition())}`;
    }).join('\n');
    
    Console.print(roundOutput + '\n');
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