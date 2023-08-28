import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../redux/ActionCreators/StoreActions'
import { isCartContainsSubItem, isgetNumberOfItemsOfSubItem } from '../Utils/util'

function StoreItem(props) {

  
const handleaddclick = ()=>{
 
  props.dispatch(actions.addItem(props.id))
}  

const handleremoveclick = ()=>{
  props.dispatch(actions.removeItem(props.id))
}

const handleremoveallclick = ()=>{
  props.dispatch(actions.removeAllSubItems(props.id))
}


const itemStatus = isCartContainsSubItem(props.id,props.items)

const numberOfItems = isgetNumberOfItemsOfSubItem(props.id,props.items)
 
  return (
    <div className='store-item'>
      <div>
        <img src={props.src} />
      </div> 

      <div>
        {props.name}
      </div>

      <div>
        {props.price}
      </div>

      <div className='actions'>
        {
          itemStatus ?
        <div className='remove'>
        <div>
        <button className='btn btn-primary' onClick={handleaddclick}> + </button>
        <span> {numberOfItems}</span>
        <button className='btn btn-primary' onClick={handleremoveclick}> -</button>
        </div>
        <div>
          <button className='btn-btn-danger' onClick={handleremoveallclick}>Remove</button>
        </div>
        </div>

        :
        <div className='add'>
        <button className='btn btn-primary' onClick={handleaddclick}>
          + Add to Cart
        </button>
        </div>

        }
        
        
      </div>
     
      </div>  
   
  )
}

const mapStateToProps = state=>{
  return{
    items:state.items
  }
}

export default connect(mapStateToProps)(StoreItem)

