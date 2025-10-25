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
      const inputString = await this.#inputView.input();
    
      // 입력받은 자동차 이름을 분리하여 Race 모델에 전달
      this.#splitNames = inputString.split(',');
      splitCarNames.map(name => name.trim());
      const cars = trimmedNames.map(name => new Car(name));
      this.#race(cars);
    
    } catch (error) {
      // 에러 처리
    }
  }
}

export default RaceController;