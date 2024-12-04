export const config = {
    api: 'https://api.nektaro.com/api/v1',
    login: '/auth/login',
    signup: '/auth/signup',
    getAddress: '/users/1/address',
    addAddress: '/users/1/address'
}

export enum API_CONSTANTS {
    LOGIN = 'login',
    SIGNUP = 'signup',
    GETADDRESS = 'getAddress',
    ADDADDRESS = 'addAddress',
}

export function getAPIURL(value: API_CONSTANTS) {
    return `${config.api}${config[value]}`;
}