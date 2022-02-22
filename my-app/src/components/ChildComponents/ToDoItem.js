
import { Button} from 'react-bootstrap'
import { deleteItem } from '../../actionCreators/deleteItem';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class ToDoItem extends React.Component{

    constructor(props){
        console.log(props)
        super(props)
        this.appFunc = props.appFunc
    }
   
   changeDoState(){
       this.appFunc(this.props.point.id)
   }
   render(){
    return(
        <div className="point">
            <input className="mark" onChange={() => this.changeDoState()} type="checkbox" checked={this.props.point.completed}/>
            
            <span className="content">{this.props.point.text}</span>
            <Button variant="warning"
            style={{display: 'inline', marginLeft: '15px'}}
             as={Link} 
             to={`/add/${this.props.point.id}`}
             >Edit</Button>
            <Button variant="danger"
            style={{display: 'inline', marginLeft: '15px'}}
             onClick={() => this.props.deleteItem(this.props.point.id)}
             >Delete</Button>
        </div>
    )
}
}



function mapDispatchToProps(dispatch){
    return{
        deleteItem: id => dispatch(deleteItem(id))
    }
}

export default connect(null, mapDispatchToProps)(ToDoItem)