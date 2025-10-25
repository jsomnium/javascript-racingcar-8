import InputView from "../view/InputView";

class RaceController {
  #inputView;
    
  constructor() {
    this.#inputView = new InputView();
  }

  async start() {
    try {
      const inputString = await this.#inputView.input();
    } catch (error) {
      // 에러 처리
    }
  }
}

export default RaceController;