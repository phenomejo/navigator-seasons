import { useState, useEffect } from 'react'

const useLocation = () => {
  const [lat, setLat] = useState(null)
  const [errMsg, setErrMsg] = useState(null)

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude } = pos.coords
        setLat(latitude)
      },
      (err) => {
        setErrMsg(err.message)
      }
    )
  }, [])

  return [lat, errMsg]
}

export default useLocation