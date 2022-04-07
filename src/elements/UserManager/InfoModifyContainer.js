import CustomElement from '../../abstracts/CustomElement';

class InfoModifyContainer extends CustomElement {
  template() {
    return `
      <h1>회원 정보 수정</h1>
        <form class="info-form">
          <label for="info-email-input">이메일</label>
          <input type="email" id="info-email-input" class="long-input" placeholder="이메일 주소를 입력해주세요" disabled>

          <label for="info-name-input">이름</label>
          <input type="text" id="info-name-input" class="long-input" placeholder="이름을 입력해주세요" minlength="2" maxLength="6" required>
          
          <label for="info-password-input">비밀번호</label>
          <input type="password" id="info-password-input" class="long-input" placeholder="비밀번호를 입력해주세요" required>

          <label for="password-confirm-input">비밀번호 확인</label>
          <input type="password" id="info-password-confirm-input" class="long-input" placeholder="비밀번호를 한번 더 입력해주세요" required>

          <button class="info-confirm-button button">확인</button>
        </form>
    `;
  }
}

customElements.define('info-modify-container', InfoModifyContainer);
