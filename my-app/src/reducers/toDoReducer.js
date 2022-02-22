


import { TO_ARCHIVE, ADD, EDIT, DELETE, FROM_ARCHIVE } from "../actions/actionsTypes"



function toArchiveCase(state, action){
    let index = state.list.findIndex(x => x.id == action.id)
    let obj = {...state.list[index]}
    obj.completed = true
    let updatedList = [...state.list]
    updatedList.splice(index, 1)
    let updatedArchive = [...state.archive]
    updatedArchive.push(obj)
    return {
        list: updatedList,
        archive: updatedArchive
    }
}
function fromArchiveCase(state, action){
    let index = state.archive.findIndex(x => x.id == action.id)
    let obj = {...state.archive[index]}
    obj.completed = false
    let updatedList = [...state.list]
    updatedList.push(obj)
    let updatedArchive = [...state.archive]
    updatedArchive.splice(index, 1)
    return {
        list: updatedList,
        archive: updatedArchive
    }
}
function deleteCase(state, action){
    let index = state.list.findIndex(x => x.id == action.id)
    let updatedList = [...state.list]
    updatedList.splice(index, 1)
    return{
        list: updatedList,
        archive: state.archive
    }
}
function editCase(state, action){
    let index = state.list.findIndex(x => x.id == action.id)
    let updatedList = [...state.list]
    updatedList[index] = action.obj
    return{
        list: updatedList,
        archive: state.archive
    }
}
function addCase(state, action){
    let newId = state.list.length + state.list.length + 1
    action.obj.id = newId
    let updatedList = [...state.list]
    updatedList.push(action.obj)
    return{
        list: updatedList,
        archive: state.archive
    }
}

function toDoReducer(state, action){
   

    switch(action.type){
        case TO_ARCHIVE:
            return toArchiveCase(state, action)
        case FROM_ARCHIVE:
            return fromArchiveCase(state, action)
        case DELETE:
            return deleteCase(state, action)
        case ADD:
            return addCase(state, action)
        case EDIT:
            return editCase(state, action)
        default:
            return state
    }
   
}
export default toDoReducer