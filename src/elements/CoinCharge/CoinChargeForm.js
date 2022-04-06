import CoinStoreInstance from '../../domains/stores/CoinStore';
import { COIN_ACTION } from '../../domains/actions';

import CustomElement from '../../abstracts/CustomElement';
import { $ } from '../../utils/dom';
import { checkCoinValidation } from '../../validators';
import { SNACKBAR } from '../../constants';
import showSnackbar from '../../utils/showSnackbar';

class CoinChargeForm extends CustomElement {
  template() {
    return `
      <form class="coin-charge-form">
        <label class="coin-charge-label" for="coin-input">자판기가 보유할 금액을 입력해주세요.</label>
        <input type="number" id="coin-input" placeholder="금액" required>
        <button class="coin-charge-button button">충전</button>
      </form>
    `;
  }

  setEvent() {
    $('.coin-charge-form').addEventListener('submit', this.handleCoinChargeFormSubmit);
  }

  handleCoinChargeFormSubmit = (event) => {
    event.preventDefault();

    const $coinInput = $('#coin-input');
    const coinInputValue = $coinInput.valueAsNumber;
    try {
      checkCoinValidation(coinInputValue);
    } catch (error) {
      alert(error.message);
      return;
    }
    showSnackbar(SNACKBAR.COIN_CHARGE_SUCCESS);
    this.initCoinInput($coinInput);
    CoinStoreInstance.dispatchAction(COIN_ACTION.COIN_CHARGE, coinInputValue);
  };

  initCoinInput($coinInput) {
    $coinInput.value = '';

    $coinInput.focus();
  }
}

customElements.define('coin-charge-form', CoinChargeForm);

export default CoinChargeForm;
