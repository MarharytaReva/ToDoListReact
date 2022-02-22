
import React from 'react'
import { Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { add } from '../actionCreators/add'

class AddComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        
    }
    componentDidMount(){
        let id = this.props.match.params.id
        console.log('id', id)
        if(id != 0){
            let index = this.props.list.findIndex(x => x.id == id)
            let item = this.props.list[index]
            console.log('list', this.props.list)
            console.log('item', item)
            this.setState({
                text: item.text
            })
        }
    }
    changeEvent(e){
        let text = e.target.value
        this.setState({
            text: text
        })
    }
    clickEvent() {
        this.props.add({
            id: this.props.match.params.id,
            completed: false,
            text: this.state.text
        })
        this.props.history.push('/')
    }
    render() {
        return (
            <div style={{ marginTop: '5rem', marginLeft: '40%', maxWidth: '20rem' }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Text</Form.Label>
                    <Form.Control value={this.state.text} onChange={(e) => this.changeEvent(e)} type="text" placeholder="Enter to do action" />
                </Form.Group>
                <Button variant="primary" onClick={() => this.clickEvent()}>
                    Submit
                </Button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        list: state.list
    }
}
function mapDispatchToProps(dispatch){
    return {
        add: obj => dispatch(add(obj))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddComp)