


import React from 'react';
import ToDoItem from "./ChildComponents/ToDoItem"
import { connect } from 'react-redux';
import { toArchive } from '../actionCreators/toArchive'


class Main extends React.Component{

    constructor(props){
        super(props)
        this.changeDoState = this.changeDoState.bind(this)
    }
    changeDoState(id){
        this.props.toArchive(id) 
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
        list: state.list
    }
}
function mapDispatchToProps(dispatch) {
    return {
        toArchive: id => dispatch(toArchive(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)