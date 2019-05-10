import { APP_IS_READY, APP_IS_NOT_READY } from "../constant/app";

export default function reducer(state = false, action) {
    switch (action.type) {
    case APP_IS_READY: {
        return true;
    }
    case APP_IS_NOT_READY: {
        return false;
    }
    default:
        return state;
    }
}
