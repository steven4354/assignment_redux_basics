import {combineReducers} from "redux";

import {
  WITHDRAW,
  DEPOSIT,
  TRANSFER,
  SHOW_ALL,
  SHOW_ONE,
  FILTER
} from "./actions";

const initialState = {
  accounts: [
    {
      id: 1,
      accountName: "capital one",
      amount: 99,
      transactions: []
    },
    {
      id: 2,
      accountName: "bank of america",
      amount: 99,
      transactions: []
    }
  ],
  recentAccountsView: [],
  recentTransactionsView: []
};

export function bankAccountReducer(state = initialState, action) {
  switch (action.type) {
    case WITHDRAW:
      return {
        ...state,
        accounts: state.accounts.map(account => {
          if (account.id === action.data.id) {
            let newAccount = Object.assign({}, account);
            newAccount.amount = newAccount.amount - action.data.amount;
            newAccount.transactions.push({
              date: new Date(),
              amount: action.data.amount * -1,
              type: "WITHDRAW"
            });
            return newAccount;
          }
          return account;
        })
      };

    case DEPOSIT:
      return {
        ...state,
        accounts: state.accounts.map(account => {
          if (account.id === action.data.id) {
            let newAccount = Object.assign({}, account);
            newAccount.amount = newAccount.amount + action.data.amount;
            newAccount.transactions.push({
              date: new Date(),
              amount: action.data.amount,
              type: "DEPOSIT"
            });
            return newAccount;
          }
          return account;
        })
      };

    case TRANSFER:
      //action object
      //{transferFrom: id, transferTo: id, amount}

      //transaction object
      //{date, amount, type}
      return {
        ...state,
        accounts: state.accounts.map(account => {
          if (account.id === action.data.transferFrom) {
            let newAccount = Object.assign({}, account);
            newAccount.amount = newAccount.amount - action.data.amount;
            newAccount.transactions.push({
              date: new Date(),
              amount: action.data.amount * -1,
              type: "TRANSFER"
            });
            return newAccount;
          }

          if (account.id === action.data.transferTo) {
            let newAccount = Object.assign({}, account);
            newAccount.amount = newAccount.amount + action.data.amount;
            newAccount.transactions.push({
              date: new Date(),
              amount: action.data.amount,
              type: "TRANSFER"
            });
            return newAccount;
          }

          return account;
        })
      };

    case SHOW_ALL:
      return {
        ...state,
        recentAccountsView: state.accounts.map(obj => obj)
      };

    case SHOW_ONE:
      return {
        ...state,
        recentAccountsView: state.accounts
          .map(obj => {
            return obj;
          })
          .filter(account => {
            if (account.id === action.data.id) {
              return true;
            }
            return false;
          })
      };

    case FILTER:
      let correctAccount = state.accounts.map(obj => obj).filter(account => {
        if (account.id === action.data.id) {
          return true;
        }
        return false;
      });

      return {
        ...state,
        recentTransactionsView: correctAccount[0].transactions.filter(
          transaction => {
            if (
              transaction.date <= action.data.endDate &&
              transaction.date >= action.data.startDate
            ) {
              return true;
            }
            return false;
          }
        )
      };
    default:
      return state;
  }
}

export const bankApp = combineReducers({
  bankAccountReducer
});
