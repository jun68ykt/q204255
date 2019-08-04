import React from 'react'

class PrintProbability extends React.Component {
  render() {

    const { probability, roletype } = this.props

    return !isNaN(probability)
             ? <div>{roletype}確率 :<br/> 1/{(probability).toFixed(1)}<hr/></div>
             : <div>未入力です。</div>

  }
}

export default PrintProbability
