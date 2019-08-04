import React from 'react'

class PrintProbability extends React.Component {
  render(){
    return(
      {(()=>{
        if(!isNaN(this.props.probability)){
          <div>{this.props.roletype}確率 :<br/> 1/{(this.props.probability).toFixed(1)}<hr/></div>
        }else{
          <div>未入力です。</div>
        }
      })()}
  )
  }
}

export default PrintProbability
