class Validator {
  static validateCarNames(names) {
    names.forEach(name => {
      if (name.includes(' ')) {
        throw new Error('[ERROR] 자동차 이름에 공백이 포함될 수 없습니다. 쉼표(,)로 구분하여 입력해주세요.');
      }
      if (name.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.');
      }
    });
  }
}

export default Validator;