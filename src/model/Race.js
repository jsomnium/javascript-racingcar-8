import { Random } from "@woowacourse/mission-utils";

class Race {
  #cars;
  #rounds;

  constructor(cars, rounds) { 
    this.#cars = cars;
    this.#rounds = rounds;
  }

  playRace() {
    const playRounds = this.#rounds;

    for (let round = 0; round < playRounds; round++) {
      this.#playRounds();
    }
  }

  #canMove() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber >= 4;
  }

  #playRounds() {
    this.#cars.forEach(car => {
      if (this.#canMove()) {
        car.move();
      }
    });
  }
}

export default Race;