import {combineReducers} from "redux";

import {WITHDRAW, DEPOSIT} from "./actions";

const initialState = {
  accounts: [
    {
      id: 1,
      accountName: "capital one",
      amount: "99",
      transactions: [{}]
    }
  ]
};

export function bankAccountReducer(state = initialState, action) {
  switch (action.type) {
    
    case WITHDRAW:
      return {...state,
        accounts: state.accounts.map(account => {
          if (account.id === action.data.id) {
            let newAccount = Object.assign({}, account);
            newAccount.amount = newAccount.amount - action.data.amount;
            newAccount.transaction.push({
              date: new Date(),
              amount: action.data.amount,
              type: "WITHDRAW"
            });
            return newAccount;
          }
          return account;
        });
      }

      case DEPOSIT:
        return {...state,
          accounts: state.accounts.map(account => {
            if (account.id === action.data.id) {
              let newAccount = Object.assign({}, account);
              newAccount.amount = newAccount.amount + action.data.amount;
              newAccount.transaction.push({
                date: new Date(),
                amount: action.data.amount,
                type: "DEPOSIT"
              });
              return newAccount;
            }
            return account;
          });
        }

    default:
      return state;
  }
}
