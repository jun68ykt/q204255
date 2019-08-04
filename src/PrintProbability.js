import React from 'react'

class PrintProbability extends React.Component {
  render() {

    const { probability, roletype } = this.props

    if (isNaN(probability))
      return  <div>未入力です。</div>

    return  <div>{roletype}確率 :<br/> 1/{(probability).toFixed(1)}<hr/></div>
  }
}

export default PrintProbability
