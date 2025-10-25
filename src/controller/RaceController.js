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
  }

  async startRace() {
    try {
      await this.#setupRace();
      this.#runRace();
      this.#showWinners();
    } catch (error) {
      this.#outputView.printError(error.message);
      throw error;
    }
  }

  async #setupRace() {
    // 사용자에게 자동차 이름 입력 받기
    const inputName = await this.#inputView.inputName();
    const splitNames = inputName.split(',');
    Validator.validateCarNames(splitNames);
    const cars = splitNames.map(name => new Car(name));

    // 사용자에게 경주 횟수 입력 받기
    const inputRoundString = await this.#inputView.inputRound();
    const inputRound = Number(inputRoundString);
    Validator.validateRound(inputRound);

    this.#race = new Race(cars, inputRound);
  }

  #runRace() {
    // 경주 시작
    this.#outputView.printResultMessage();
    for (let round = 0; round < this.#race.getRound(); round++) {
      this.#race.playRound();
      const roundResult = this.#race.getCars();
      this.#outputView.printRound(roundResult);
    }
  }

  #showWinners() {
    // 우승자 발표
    const winners = this.#race.getWinners();
    const winnerNames = winners.join(', ');
    this.#outputView.printWinners(winnerNames);
  }
}

export default RaceController;