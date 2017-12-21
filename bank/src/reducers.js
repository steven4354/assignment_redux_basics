import {combineReducers} from "redux";

import {WITHDRAW, DEPOSIT, TRANSFER} from "./actions";

const initialState = {
  accounts: [
    {
      id: 1,
      accountName: "capital one",
      amount: "99",
      transactions: []
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
              amount: action.data.amount * -1,
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

        case TRANSFER:
        //action object
        //{transferFrom: id, transferTo: id, amount}


        //transaction object
        //{date, amount, type}
        return {...state,
          accounts: state.accounts.map(account => {
            if (account.id === action.data.transferFrom) {
              let newAccount = Object.assign({}, account);
              newAccount.amount = newAccount.amount - action.data.amount;
              newAccount.transaction.push({
                date: new Date(),
                amount: action.data.amount * -1,
                type: "TRANSFER"
              });
              return newAccount;
            }

            if (account.id === action.data.transferTo) {
              let newAccount = Object.assign({}, account);
              newAccount.amount = newAccount.amount + action.data.amount;
              newAccount.transaction.push({
                date: new Date(),
                amount: action.data.amount,
                type: "TRANSFER"
              });
              return newAccount;
            }
            return account;
          });
        }

    default:
      return state;
  }



export const bankApp = combineReducers({
  bankAccountReducer,
});
