import { APP_IS_READY, APP_IS_NOT_READY } from "../constant/app";

export const AppIsReady = payload => ({
    type: APP_IS_READY,
    payload
});

export const AppIsNotReady = payload => ({
    type: APP_IS_NOT_READY,
    payload
});
