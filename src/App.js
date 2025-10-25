import RaceController from "./controller/RaceController.js";

class App {
  async run() {
    const raceController = new RaceController();
    await raceController.startRace();
  }
}

export default App;
