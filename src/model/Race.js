import { Random } from "@woowacourse/mission-utils";

class Race {
  #cars;

  addCars(cars) {
    this.#cars = cars;
  }

  #canMove() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber >= 4;
  }

  playRound() {
    this.#cars.map(car => {
      if (this.#canMove()) {
        car.move();
      }
    });
  }

  getCars() {
    return this.#cars;
  }
}

export default Race;