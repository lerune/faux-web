import React from 'react'

const StageContext = React.createContext({})

export const StageProvider = StageContext.Provider
export const StageConsumer = StageContext.Consumer
export default StageContext