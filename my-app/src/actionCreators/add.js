
import { ADD } from "../actions/actionsTypes";
export function add(obj){
    return{
        type: ADD,
        obj: obj
    }
}