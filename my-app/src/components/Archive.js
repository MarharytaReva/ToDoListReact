



import React from 'react';
import ToDoItem from "./ChildComponents/ToDoItem"
import { connect } from 'react-redux';
import { fromArchive } from '../actionCreators/fromArchive'


class Archive extends React.Component{

    constructor(props){
        super(props)
        this.changeDoState = this.changeDoState.bind(this)
    }
    changeDoState(id){
        this.props.fromArchive(id) 
    }
    render(){
        let displayedList = this.props.list.map(point => {
           
            return <ToDoItem key={point.id} point={point} appFunc={this.changeDoState}></ToDoItem>
        })
        return(
            <div className="mainDiv container">
                <div className="row">
                    <div className="col">
                        <h1 style={{textAlign: 'center', margin: '3rem'}}>To do List</h1>
                    {displayedList}
                    </div>
                    
                </div>
               
            </div>
        )
    }
   
}


function mapStateToProps(state){
    return{
        list: state.archive
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fromArchive: id => dispatch(fromArchive(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Archive)
