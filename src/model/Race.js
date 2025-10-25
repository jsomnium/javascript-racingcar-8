import { Random } from "@woowacourse/mission-utils";
import { MOVE_THRESHOLD } from "../constant/index.js";
import { NUMBER_RANGE } from "../constant/index.js";

class Race {
  #cars;
  #round;

  constructor(cars = []) {
    this.#cars = cars;
    this.#round = 0;
  }

  #canMove() {
    const randomNumber = Random.pickNumberInRange(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
    return randomNumber >= MOVE_THRESHOLD;
  }

  playRound() {
    this.#cars.forEach(car => {
      if (this.#canMove()) {
        car.move();
      }
    });
  }

  getCars() {
    return this.#cars;
  }

  getRound() {
    return this.#round;
  }

  getWinners() {
    const maxPosition = Math.max(...this.#cars.map(car => car.getPosition()));
    const winners = this.#cars
      .filter(car => car.getPosition() === maxPosition)
      .map(car => car.getName());
    return winners;
  }
}

export default Race;