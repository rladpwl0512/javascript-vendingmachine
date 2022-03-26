export const COIN = {
  DEFAULT_COUNT: 0,
};

export const MONEY = {
  DEFAULT: 0,
  MAX: 100000,
};

export const CONFIRM_MESSAGE = {
  DELETE: '선택한 상품을 정말 삭제하시겠습니까? 한번 삭제한 상품은 복구할 수 없습니다.',
};

export const ERROR_MESSAGE = {
  IS_BLANK_PRODUCT_NAME: '공백으로만 이루어진 상품명이 입력되었습니다! 상품명을 입력해 주세요!',
  IS_ALREADY_EXIST_PRODUCT: '이미 존재하는 상품입니다! 가격 또는 수량을 수정하고 싶으시다면 수정 버튼을 클릭해 주세요!',
  PRICE_CANNOT_DIVIDED_BY_TEN: '가격에 1원 단위가 입력되었습니다! 10원 단위로 입력해 주세요!',
  MONEY_CANNOT_DIVIDED_BY_TEN: '금액에 1원 단위가 입력되었습니다! 10원 단위로 입력해 주세요!',
  IS_OVER_MAX_MONEY: `현재 보유 금액이 최대 보유 가능 금액인 '10만원'을 초과하였습니다! 현재 보유 금액을 확인한 후 입력해 주세요!`,
};
