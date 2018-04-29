import { FETCH_WEATHER } from "../actions/index";

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER:
            // return state.push(action.payload.data)    avoids state manuplation or update
           // return state.concat([action.payload.data]);  avoids state manuplation or update
            return [action.payload.data, ...state];
    }

    return state;

}