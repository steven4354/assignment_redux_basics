export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";
export const transfer = "TRANSFER";

export function deposit(data) {
  //data will be {accountId, amount}
  return {
    type: DEPOSIT,
    data: data
  };
}

export function withdraw(data) {
  //data will be {accountId, amount}
  return {
    type: WITHDRAW,
    data: data
  };
}

export function transfer(data) {
  //data will be {accountId, amount}
  return {
    type: TRANSFER,
    data: data
  };
}
