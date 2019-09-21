import React, { useContext } from 'react'
import ContentDisplayView from './content-display-view'
import StageContext from '../../context/stage-context'


const ContentDisplay = () => {
    const { stage } = useContext(StageContext) 
    const isBlur = (stage >= 1 && stage <= 2) || (stage >= 4 && stage <= 5) ? true : false

return <ContentDisplayView isBlur={isBlur} isGradient={true} />
}

export default ContentDisplay