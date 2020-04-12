// import React from 'react'

// export default function Knight() {
//   return <span  style={{fontSize: '3em', }}>♘</span>
// }


import React from 'react'
import { ItemTypes } from '../../Drag/drag.js'
import { useDrag } from 'react-dnd'

function Knight() {
  const [{isDragging}, drag] = useDrag({
    item: { type: ItemTypes.KNIGHT },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
  })

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: '3em',
        marginTop:'0.10em',
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      ♘
    </div>
  )
}

export default Knight