import React from 'react'
import StoreItem from '../common/StoreItem'
import { fakeData } from '../data/fake-data'

 

function AppStore() {

  const getUrl = (item)=>{
    return `/images/${item}`
  } 

  let data = fakeData.map(item=>({...item,src:getUrl(item.src)}))


// var src=<img src="E:\Users\Store project\react-demo-store\public\images"/>
  return (
    <div id='app-store'>

      {/* {

        imgData.map(item=>{
          return`${src} ${item}`
        })
      } */}
      {
         data.map(item=> <StoreItem {...item} />)
         
      }
    </div>
  )
}

export default AppStore