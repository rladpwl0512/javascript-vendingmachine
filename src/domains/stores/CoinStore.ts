import { Action, CoinsCount, CustomElement } from '../../abstracts/types';
import { COIN, MONEY } from '../../constants';
import pickNumberInList from '../../utils/random';
import { COIN_ACTION, createAction } from '../actions';

class CoinStore {
  #coinsCount: CoinsCount = {
    500: COIN.DEFAULT_COUNT,
    100: COIN.DEFAULT_COUNT,
    50: COIN.DEFAULT_COUNT,
    10: COIN.DEFAULT_COUNT,
    sum: MONEY.DEFAULT,
    money_input: MONEY.DEFAULT,
  };

  #subscribers: CustomElement[] = [];

  subscribe(element: CustomElement) {
    this.#subscribers.push(element);
  }

  dispatchAction(actionType: string, detail: number) {
    const action: Action = createAction(actionType, detail);
    switch (actionType) {
      case COIN_ACTION.COIN_CHARGE: {
        this.updateCoinsCount(action);
        break;
      }
      case COIN_ACTION.PURCHASE_MONEY_INPUT: {
        this.updatePurchaseMoneyInput(action);
        break;
      }
      case COIN_ACTION.UPDATE_MONEY_INPUT: {
        this.updatePurchaseMoneyInput(action);
        break;
      }
      case COIN_ACTION.RETURN_CHANGE: {
        this.returnChange();
        break;
      }
    }
    this.notifySubscribers(action);
  }

  returnChange() {
    const coinKind = [500, 100, 50, 10];
    const coinCurrentSituation = [
      this.#coinsCount[500],
      this.#coinsCount[100],
      this.#coinsCount[50],
      this.#coinsCount[10],
    ];
    let moneyInput = this.#coinsCount.money_input;
    let holdingMoneySum = this.#coinsCount.sum;

    coinKind.forEach((coin, idx) => {
      const needCount = Math.floor(moneyInput / coin);
      if (needCount > coinCurrentSituation[idx]) {
        moneyInput -= coin * coinCurrentSituation[idx];
        holdingMoneySum -= coin * coinCurrentSituation[idx];
        coinCurrentSituation[idx] = 0;
      } else if (needCount <= coinCurrentSituation[idx]) {
        moneyInput -= coin * needCount;
        holdingMoneySum -= coin * needCount;
        coinCurrentSituation[idx] -= needCount;
      }
    });

    this.updateCoinsCountAfterReturnChange(coinCurrentSituation, holdingMoneySum, moneyInput);
  }

  updateCoinsCountAfterReturnChange(coinCurrentSituation, holdingMoneySum, moneyInput) {
    this.#coinsCount = {
      500: coinCurrentSituation[0],
      100: coinCurrentSituation[1],
      50: coinCurrentSituation[2],
      10: coinCurrentSituation[3],
      sum: holdingMoneySum,
      money_input: moneyInput,
    };
  }

  updatePurchaseMoneyInput(action) {
    const { type, detail } = action;
    if (type === COIN_ACTION.PURCHASE_MONEY_INPUT) {
      this.#coinsCount.money_input += detail;
    }
    if (type === COIN_ACTION.UPDATE_MONEY_INPUT) {
      this.#coinsCount.money_input -= detail;
    }
  }

  updateCoinsCount(action: Action) {
    const { detail } = action;
    this.#coinsCount = this.generateRandomCoins(this.#coinsCount, detail as number);
  }

  generateRandomCoins(oldCoinsCount: CoinsCount, detail: number) {
    const newCoinsCount = oldCoinsCount;
    let coinList = [500, 100, 50, 10];
    let money = detail;

    while (money) {
      const randomCoin = pickNumberInList(coinList);

      if (money < randomCoin) {
        coinList = this.generateNewCoinList(coinList, money);
        continue;
      }

      newCoinsCount[randomCoin] += 1;
      newCoinsCount.sum += randomCoin;
      money -= randomCoin;
    }

    return newCoinsCount;
  }

  generateNewCoinList(coinList: number[], money: number) {
    return coinList.filter((coin) => coin <= money);
  }

  notifySubscribers(action) {
    this.#subscribers.forEach((subscriber) => {
      subscriber.rerender(this.#coinsCount, action);
    });
  }

  get coinsCount() {
    return this.#coinsCount;
  }
}

const CoinStoreInstance = new CoinStore();
export default CoinStoreInstance;
