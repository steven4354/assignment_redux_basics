export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";

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
