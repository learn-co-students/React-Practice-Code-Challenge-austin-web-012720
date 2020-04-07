import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'



const SushiContainer = ({sushis, callback, eaten, more}) => {


  return (
    <Fragment>
      <div className="belt">
        {sushis.map(sushi => {
          return <Sushi key={sushi.id} sushi={sushi} callback={callback} taken={eaten.includes(sushi)}/>
        })}
        <MoreButton more={more}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer