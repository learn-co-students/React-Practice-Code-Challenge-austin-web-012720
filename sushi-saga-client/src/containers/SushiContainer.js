import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';


const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => <Sushi 
        key={sushi.id} sushi={{...sushi}} 
        subtractAmount={props.subtractAmount}
        amount={props.amount}/>)}
        <MoreButton addMoreSushi={props.addMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer