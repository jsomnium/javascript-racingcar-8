export const Message = {
    NAME_PROMPT: '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n',
    ROUNDS_PROMPT: '시도할 횟수는 몇 회인가요?\n',
    RESULT_PROMPT: '\n실행 결과',
    WINNER_PREFIX: '최종 우승자 : ',
    ERROR_PREFIX: '[ERROR] ',
    NOT_ALLOW_SPACE: '자동차 이름에 공백이 포함될 수 없습니다.',
    NOT_ALLOW_NAME_LENGTH: '자동차 이름은 5자를 초과할 수 없습니다.',
    NOT_ALLOW_TYPE: '시도 횟수는 숫자여야 합니다.',
    NOT_ALLOW_NEGATIVE: '시도 횟수는 1 이상이어야 합니다.',
    NOT_ALLOW_RATIONAL: '시도 횟수는 정수여야 합니다.',
};

export const NUMBER_RANGE = {
    MIN: 0,
    MAX: 9,
};

export const MOVE_THRESHOLD = 4;