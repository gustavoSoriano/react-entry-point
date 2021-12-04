
import React, {useState} from 'react'

const DropZone = ({children, hasView, over, leave}) => {
    const [ondrop, setOndrop] = useState(false)

    const dropHandler = e => {
        e.preventDefault()
        if ( e.dataTransfer.items && e.dataTransfer.items.length > 0 ) 
        {
            leave( Array.from(e.dataTransfer.items).map( f => f.getAsFile() ) )
        }
        setOndrop(false)
    }

    const dragOverHandler = e => {
        e.preventDefault()
        setOndrop(true)
        over(e)
    }

    const dragEnd = e => {
        e.preventDefault()
        setOndrop(false)
    }

    return  (
        <div style={{border: ondrop ? '5px solid rgba(0, 145, 140, 0.3)' : 'none'}} onDragEnd={ dragEnd } onDrop={ dropHandler } onDragOver={ dragOverHandler } >
            {children}
        </div>
    )
}
export default DropZone