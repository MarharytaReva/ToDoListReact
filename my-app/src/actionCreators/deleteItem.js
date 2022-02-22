
import { DELETE } from "../actions/actionsTypes";
export function deleteItem(id){
    return{
        type: DELETE,
        id: id
    }
}