



import { FROM_ARCHIVE } from "../actions/actionsTypes";

export function fromArchive(id) {
    return {
        type: FROM_ARCHIVE,
        id: id
    }
}