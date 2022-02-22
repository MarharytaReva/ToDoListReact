
import { EDIT } from "../actions/actionsTypes";

export function edit(obj){
    return{
        type: EDIT,
        obj: obj
    }
}