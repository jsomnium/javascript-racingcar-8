import { Random } from "@woowacourse/mission-utils";

class Race {
  #cars;

  constructor(cars) { 
    this.#cars = cars;
  }

  #canMove() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber >= 4;
  }

  playRound() {
    this.#cars.forEach(car => {
      if (this.#canMove()) {
        car.move();
      }
    });
  }

  getRoundResult() {
    return this.#cars.map(car => ({
      name: car.getName(),
      position: car.getPosition(),
    }));
  }
}

export default Race;