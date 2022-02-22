


import { Route, BrowserRouter as Router } from 'react-router-dom'
import Header from "./Header";
import Main from "./Main";
import Archive from './Archive';
import AddComp from './AddComp';


function App(){
   

    return(
        <div>
            
            <Router>
            <Header></Header>
                    <Route exact path='/' component={Main}></Route>
                    <Route path='/archive' component={Archive}></Route>
                    <Route path="/add/:id" component={AddComp}></Route>
               
            </Router>
        </div>
    )
}
export default App