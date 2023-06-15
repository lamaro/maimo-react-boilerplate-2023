import React, {useEffect} from 'react'

const Loading = () => {
  useEffect(() => console.log('CARGÓ LOADING'), []);
  return (
    <div>Loading...</div>
  )
}

export default Loading