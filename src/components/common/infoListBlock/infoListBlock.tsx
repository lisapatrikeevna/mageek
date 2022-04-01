import React from 'react';
import cl from './infoListBlock.module.css'

type itemType={
    id:string
    index:string
    title?: string
    description: string
}
type propsType={
    arr:Array<itemType>
}
const InfoListBlock = ({arr}:propsType) => {
// debugger
  const items=arr.map((i)=>{
     return <div className={cl.wrapItem} key={i.id}>
          <h3 className={cl.bottomTitleItem}>{i.index}</h3>
          {i.title &&<h6>{i.title}</h6>}
          <p className={cl.deskItem}>{i.description}</p>
      </div>
      });

  return <div className={cl.infoListBlockWrap}>{items}</div>
};

export default InfoListBlock;