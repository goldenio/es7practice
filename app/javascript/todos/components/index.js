import React, { Component } from 'react'

class Todos extends Component {
  componentWillMount() {
    const testAwaitFunc = async data => (
      new Promise(resolve => (
        setTimeout(() => resolve(data), 1000)
      ))
    )

    const testAsyncFunc = async () => {
      const res = await testAwaitFunc('test')
      console.log(res)
    }
    testAsyncFunc()
    console.log('start')
  }

  render() {
    return (
      <div>This is the New React Component using async syntax of ES7.</div>
    )
  }
}

export default Todos
