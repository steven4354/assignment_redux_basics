export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";
export const TRANSFER = "TRANSFER";
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_ONE = "SHOW_ONE";
export const FILTER = "FILTER";

export function deposit(data) {
  //data will be {id, amount}
  return {
    type: DEPOSIT,
    data: data
  };
}

export function withdraw(data) {
  //data will be {id, amount}
  return {
    type: WITHDRAW,
    data: data
  };
}

export function transfer(data) {
  //data will be {id, id, amount}
  return {
    type: TRANSFER,
    data: data
  };
}

export function showAll(data) {
  //data will be {}
  //displays all acccounts
  return {
    type: SHOW_ALL,
    data: data
  };
}

export function showOne(data) {
  //data will be {id}
  //displays 1 account
  return {
    type: SHOW_ONE,
    data: data
  };
}

export function filter(data) {
  //data will be {id, startDate, endDate}
  return {
    type: FILTER,
    data: data
  };
}
