import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'

class App extends React.Component {

    constructor(){
        super()
            this.state = {
                isLoggedIn: true,
            }
            this.Logging = this.Logging.bind(this)
    }



    Logging(){
        this.setState((prevState) => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
            
        })
    }

    
    render() {
        let word
        if (this.state.isLoggedIn === true) {
            word = 'Just'
        } else {
            word = 'Clicker'
        }
        
            return (
                <div> 
                    
                <div className='ok'>
                    <button onClick={this.Logging} >
                        <h1>{word}</h1>
                    </button>
                </div>

                    <Header />
                    <Main />

                </div>
            )};
        }
export default App;
