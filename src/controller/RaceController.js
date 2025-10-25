import InputView from "../view/InputView";
import Race from "../model/Race";

class RaceController {
    #inputView;
    #splitNames;
    #race;
    
  constructor() {
      this.#inputView = new InputView();
      this.#race = new Race();
  }

  async start() {
    try {
      // 사용자에게 자동차 이름 입력 받기
      const inputName = await this.#inputView.inputName();
        
      // 사용자에게 경주 횟수 입력 받기
      const inputrounds = await this.#inputView.inputRounds();
    
      // 입력받은 자동차 이름을 분리하여 Race 모델에 전달
      this.#splitNames = inputName.split(',');
      splitCarNames.map(name => name.trim());
      const cars = trimmedNames.map(name => new Car(name));
      this.#race(cars, inputrounds);
    
    } catch (error) {
      // 에러 처리
    }
  }
}

export default RaceController;