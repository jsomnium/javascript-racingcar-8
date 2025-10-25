import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Race from "../model/Race.js";
import Car from "../model/Car.js";
import Validator from "../utils/Validator.js";

class RaceController {
  #inputView;
  #outputView;
  #race;
    
  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#race = new Race();
  }

  async start() {
    try {
      // 사용자에게 자동차 이름 입력 받기
      const inputName = await this.#inputView.inputName();
      const splitNames = inputName.split(',');
      Validator.validateCarNames(splitNames);
        
      // 사용자에게 경주 횟수 입력 받기
      const inputRound = await this.#inputView.inputRound();
    
      // 입력받은 자동차 이름을 분리하여 Race 모델에 전달
      const cars = splitNames.map(name => new Car(name));
      this.#race.addCars(cars);
    
      // 경주 시작
      for (let round = 0; round < inputRound; round++) {
        this.#race.playRound();
        const roundResult = this.#race.getCars(); // 각 자동차의 현재 위치, 이름을 받아옴

        const formattedResult = roundResult.map(car => {
          return {
            name: car.getName(),
            position: '-'.repeat(car.getPosition()),
          };
        });

        if (round == 0) {
          this.#outputView.printResult();
        }

        const roundOutput = formattedResult.map(car => `${car.name} : ${car.position}`).join('\n');
        this.#outputView.printRound(roundOutput + '\n'); // 출력
      }

      // 우승자 발표
      const winners = this.#race.getWinners();
      const winnerNames = winners.join(', ');
      this.#outputView.printWinners(winnerNames);
    } catch (error) {
      this.#outputView.printError(error.message);
      throw error;
    }
  }
}

export default RaceController;