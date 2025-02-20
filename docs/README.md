# 자판기

자바스크립트로 구현 하는 자판기 어플리케이션

- 페어: 티거 X 위니

## 🖥 데모 페이지

[클릭해서 이동하기 🏃🏻‍♀️](https://rladpwl0512.github.io/javascript-vendingmachine/)

## 🎯 기능 구현 목록 (step1)

### 1. 상품 관리 탭

- 초기 화면

  - [x] 상품 관리 탭이 클릭된다. (UI)
  - [x] 상품 정보를 입력하는 폼을 렌더링 한다. (UI)
  - [x] 상품 현황을 렌더링 한다. (UI)
    - [x] 최초 상품 목록은 비워진 상태이다. (UI, 도메인)

- 상품 추가

  - [x] 상품명, 가격, 수량이 입력된다. (UI)
    - [x] [예외 - 상품명] 상품명이 공백인 경우
    - [x] [예외 - 상품명] 상품명이 공백으로만 이루어진 경우
    - [x] [예외 - 상품명] 상품명이 10글자를 초과하는 경우
    - [x] [예외 - 상품명] 상품명이 이미 존재하는 경우
    - [x] [예외 - 가격] 가격이 공백인 경우
    - [x] [예외 - 가격] 가격이 정수가 아닌 경우
    - [x] [예외 - 가격] 가격이 100원 미만인 경우
    - [x] [예외 - 가격] 가격이 10,000원을 초과하는 경우
    - [x] [예외 - 가격] 가격이 10원으로 나누어떨어지지 않는 경우
    - [x] [예외 - 수량] 수량이 공백인 경우
    - [x] [예외 - 수량] 수량이 정수가 아닌 경우
    - [x] [예외 - 수량] 수량이 1 미만인 경우
    - [x] [예외 - 수량] 수량이 20개를 초과하는 경우
  - [x] 추가 버튼이 클릭된다. (UI)
  - [x] 상품을 추가한다. (도메인)
  - [x] 상품 현황을 리렌더링 한다. (UI)

- 상품 수정

  - [x] 수정 버튼이 클릭된다. (UI)
  - [x] 수정 시 상품명, 가격, 수량 정보 영역 자체를 인풋 영역으로 변경한다. (UI)
  - [x] 수정 후, 확인 버튼이 클릭된다. (UI)
  - [x] 상품 정보를 수정한다. (도메인)
  - [x] 상품 현황을 리렌더링 한다. (UI)

- 상품 삭제

  - [x] 삭제 버튼이 클릭된다. (UI)
  - [x] 삭제 시 confirm을 활용하여 사용자에게 다시 한번 확인한다. (UI)
  - [x] 상품을 삭제한다. (도메인)
  - [x] 상품 현황을 리렌더링 한다. (UI)

### 2. 잔돈 충전 탭

- 초기 화면

  - [x] 잔돈 충전 탭이 클릭된다. (UI)
  - [x] 보유할 금액을 입력하는 폼을 렌더링 한다. (UI)
  - [x] 현재 보유 금액을 렌더링 한다. (UI)
    - [x] 최초 자판기가 보유한 금액은 0원이다. (UI, 도메인)
  - [x] 자판기가 보유한 동전을 렌더링 한다. (UI)
    - [x] 최초 각 동전의 개수는 0개이다. (UI, 도메인)

- 잔돈 충전

  - [x] 보유할 금액이 입력된다. (UI)
    - [x] [예외] 잔돈이 10원으로 나누어 떨어지지 않는 경우
    - [x] [예외] 입력된 금액이 더해지면서, 현재 보유 금액이 100,000원을 초과하는 경우
  - [x] 충전 버튼이 클릭된다. (UI)
  - [x] 현재 보유 금액을 충전한다. (도메인)
  - [x] 현재 보유 금액을 리렌더링 한다. (UI)
  - [x] 자판기 보유 금액만큼의 동전을 무작위로 생성한다. (도메인)
  - [x] 자판기가 보유한 동전을 리렌더링 한다. (UI)

### 💯 테스트 케이스

- 상품 관리

  - [x] 최초 상품 목록은 비워진 상태이다.
  - [x] 상품을 추가한다.
  - [x] 상품 정보를 수정한다.
  - [x] 상품을 삭제한다.

- 잔돈 충전

  - [x] 최초 자판기가 보유한 금액은 0원이다.
  - [x] 최초 각 동전의 개수는 0개이다.
  - [x] 현재 보유 금액을 충전한다.

---

## 🎯 기능 구현 목록 (step2)

### 1. 상품 구매 탭

- 금액 투입

  - [x] 상품 구매 탭이 클릭된다.
  - [x] 상품 구매 메뉴에 해당하는 화면을 렌더링 한다.
  - [x] 상품 구매폼에 금액이 입력된다.
    - [x] [예외 - 금액] 가격이 공백인 경우
    - [x] [예외 - 금액] 가격이 정수가 아닌 경우
    - [x] [예외 - 금액] 가격이 100원 미만인 경우
    - [x] [예외 - 금액] 가격이 100,000원을 초과하는 경우
    - [x] [예외 - 금액] 가격이 10원으로 나누어떨어지지 않는 경우
  - [x] 투입 버튼이 클릭된다.
  - [x] 투입한 금액을 이전 투입 금액에 누적하여 렌더링한다.
    - 최초 충전 금액은 0원이다.
    - 금액은 누적으로 투입될 수 있다.

- 상품 구매

  - [x] 구매 가능 상품 현황을 렌더링한다. (상품 관리에서 추가, 수정, 삭제될 때 함께 렌더링한다.)
  - [x] 상품 구매 버튼이 클릭된다.
    - [x] [예외 - 구매] 투입한 금액보다 상품의 가격이 비싼 경우
  - [x] 구매 후, 투입한 금액에서 상품의 가격만큼을 빼고 렌더링한다.
  - [x] 구매 후, 구매한 상품의 수량을 업데이트하고 렌더링한다. (상품 수량에서 -1만큼을 해준다.)
  - [x] 구매 후, 수량이 0개가 되었을 때, 해당 상품이 삭제된다.

- 잔돈 반환

  - [x] 반환 버튼이 클릭된다.
  - [x] 잔돈 계산에 대해 아래의 규칙을 적용한다.
    - [x] 최초로 반환하는 각 동전의 개수는 0개이다.
    - [x] 잔돈을 돌려줄 때는 현재 보유한 최소 개수의 동전으로 잔돈을 돌려준다.
    - [x] 지폐를 잔돈으로 반환하는 경우는 없다고 가정한다.
    - [x] 잔돈을 반환할 수 없는 경우 잔돈으로 반환할 수 있는 금액만 반환한다.
    - [x] 사용자가 버튼을 클릭했을 때 해당 행위가 정상적으로 동작하거나, 실패하였음을 snackbar를 통해 보여준다.

### 2. 관리자 회원 기능

- [x] 관리자의 회원 가입을 위한 기능은 json-server-auth를 이용한다.

- 비로그인 유저의 화면

  - [x] 초기에는 상품 구매 메뉴에 대한 화면 및 로그인 버튼만 렌더링한다.
  - [x] 로그인 버튼이 클릭 된다.
  - [x] 로그인을 할 수 있는 화면을 렌더링한다.

    - [x] 이메일과 비밀번호가 입력된다.
      - [x] [예외 - 이메일] 이메일이 공백으로만 이루어진 경우
      - [x] [예외 - 이메일] 이메일 형식으로 입력되지 않은 경우
      - [x] [예외 - 이메일] 이메일 정보가 없는 경우
      - [x] [예외 - 비밀번호] 공백으로 이루어진 경우
      - [x] [예외 - 비밀번호] 비밀번호가 잘못된 경우
      - [x] [예외 - 비밀번호] 비밀번호가 너무 짧은 경우
    - [x] 확인 버튼이 클릭된다.
    - [x] 회원 가입 버튼이 클릭된다.

  - [x] 회원가입을 할 수 있는 화면을 렌더링한다.
    - [x] 이메일, 이름, 비밀번호, 비밀번호 확인 폼이 입력된다.
      - [x] [예외 - 이메일] 공백인 경우
      - [x] [예외 - 이메일] 이메일 형식을 지키지 않은 경우
      - [x] [예외 - 이메일] 이미 가입되어있는 이메일인 경우
      - [x] [예외 - 이름] 공백인 경우
      - [x] [예외 - 이름] 2~6글자 기준을 지키지 않은 경우
      - [x] [예외 - 비밀번호] 공백인 경우
      - [x] [예외 - 비밀번호] 최소 10자리 이상이며, 영어 대문자, 소문자, 숫자 중 2종류 조합해야한다.
      - [x] [예외 - 비밀번호 확인] 위에 입력한 비밀번호와 일치하지 않는 경우
    - [x] 확인 버튼이 클릭된다.

- 로그인 유저의 화면

  - [x] 관리자 화면을 렌더링 한다.
  - [x] 로그인한 유저의 썸네일이 클릭된다.
    - [x] 로그인한 유저의 이름중 첫번째 글자를 썸네일처럼 만든다.
    - [x] select box로 회원 정보 수정과 로그아웃 메뉴를 만든다.
  - [x] 회원 정보 수정 버튼이 클릭된다.
    - [x] 이름, 비밀번호, 비밀번호 확인 폼이 입력된다. (예외는 회원가입 폼과 동일하다.)
  - [x] 로그아웃 버튼이 클릭된다.
    - [x] 로그아웃시, 비로그인 유저의 화면을 렌더링한다.

- [x] heroku 서버 배포

### 💯 테스트 케이스

- [x] 사용자 입장에 대한 테스트를 Cypress로 작성한다.

---

## ✅ 요구 사항

1. 공통

- [x] 도메인 영역을 타입스크립트를 이용하여 구현한다.
  - [x] Interface 또는 type을 이용하여, 주요 도메인 객체의 타입을 정의하고 설계한다.

2. 라우팅 기능

- [x] Browser History Api를 이용하여 SPA처럼 라우팅을 적용한다.
  - [x] 매번 페이지를 로드 하는 것이 아닌, 히스토리를 관리하고, 페이지를 url에 따라 동적으로 렌더링한다.
- [x] 상품 관리, 잔돈 충전, 상품 구매 페이지는 모두 동적으로 렌더링해야 한다.

3. 테스트

- [x] 비즈니스 로직에 대한 단위 테스트를 Jest로 작성한다.

4. UI

- [x] figma 시안을 기준으로 구현한다.
