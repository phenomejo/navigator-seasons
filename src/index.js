import React from 'react'
import ReactDOM from 'react-dom'

import useLocation from './useLocation'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

const App = () => {
  const [lat, errMsg] = useLocation()
  let content;
  if (errMsg) {
    content = <div>Error: {errMsg}</div>
  } else if (lat) {
    content = <SeasonDisplay lat={lat} /> 
  } else {
    content = <Spinner message="Please allow location request" />
  }

  return <div className="border red">{content}</div>
}

// class App extends React.Component {
//   state = { lat: null, errMsg: '' }

//   componentDidMount () {
//     window.navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         const { latitude } = pos.coords
//         this.setState({
//           lat: latitude
//         })
//       },
//       (err) => {
//         this.setState({ errMsg: err.message })
//       }
//     )
//   }

//   componentDidUpdate () {
//     console.log('...this componentDidUpdate')
//   }

//   renderContent () {
//     if (this.state.errMsg) {
//       return <div>Error: { this.state.errMsg }</div>
//     } else if (!this.state.errMsg && this.state.lat) {
//       return <SeasonDisplay lat={this.state.lat} />
//     }

//     return <Spinner message="Please allow location request" />
//   }

//   render () {
//     return (
//       <div className="border red">
//         {this.renderContent()}
//       </div>
//     )
//   }
// }

ReactDOM.render(<App />, document.querySelector('#root'))