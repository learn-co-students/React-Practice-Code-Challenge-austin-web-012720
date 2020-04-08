import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => {
            return <Sushi 
            key={sushi.id} 
            sushiData={sushi} 
            eat={props.eat} 
            eatenSushi={props.eatenSushi}
            />
          })
        }
        <MoreButton more={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer