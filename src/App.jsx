import React  from 'react'
import '@/assets/Home.css'
import Home from '@/Pages/Home'
import 'boxicons';

class App extends React.Component {
  // const [count, setCount] = useState(0)
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //     change:true
  //   }
  
  //   this.handleEvent = this.handleEvent.bind(this)
  // }
  
  render() {
      return (
      <>
        <Home/>
      </>
    )
  }
}

export default App
