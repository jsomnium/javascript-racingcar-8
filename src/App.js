import RaceController from './Controller/RaceController.js';

class App {
  // 입력받은 이름 기반으로 자동차 클래스들 생성
  // 클래스 보유 속성 : 이름, 현재 위치, 이동 함수
  // 이동 함수 : 이동 가능할 경우 위치 1 증가

  // 공통 이동 여부 판단 함수 : API 호출 (0~9 사이 랜덤 숫자 생성, 4 이상일 경우에만 이동)
  // 공통 이동 여부 판단 함수 결과가 true이면 각 자동차의 이동 함수 실행

  // 모든 자동차의 이동이 끝나면 최종 위치를 기반으로 우승자 발표
  async run() {
    const raceController = new RaceController();
    await raceController.start();
  }
}

export default App;
