



import { TO_ARCHIVE } from "../actions/actionsTypes";

export function toArchive(id) {
    return {
        type: TO_ARCHIVE,
        id: id
    }
}