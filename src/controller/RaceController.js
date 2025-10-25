import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Race from "../model/Race.js";

class RaceController {
  #inputView;
  #outputView;
  #splitNames;
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
        
      // 사용자에게 경주 횟수 입력 받기
      const inputRound = await this.#inputView.inputRound();
    
      // 입력받은 자동차 이름을 분리하여 Race 모델에 전달
      this.#splitNames = inputName.split(',');
      splitCarNames.map(name => name.trim());
      const cars = trimmedNames.map(name => new Car(name));
      this.#race(cars);
    
      // 경주 시작
      for (let round = 0; round < inputRound; round++) {
        this.#race.playRound();
        const roundResult = this.#race.getRoundResult(); // 각 자동차의 현재 위치, 이름을 받아옴
        // position: 1 -> '-' 변환 로직 추가하기

        outputView.printRound(roundResult); // 출력
      }

      // 우승자 발표
    } catch (error) {
      // 에러 처리
    }
  }
}

export default RaceController;