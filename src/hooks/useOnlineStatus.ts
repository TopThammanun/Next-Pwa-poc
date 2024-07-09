import axios from 'axios'
import { useEffect, useState } from 'react'

const useOnlineStatus = () => {
  const [status, setStatus] = useState<boolean | null>(navigator.onLine)

  const testConnect = async () => {
    try {
      const res = await axios.get('https://top-backend.vercel.app', {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          Pragma: 'no-cache',
          Expires: '0'
        }
      })
      setStatus(true)
    } catch (e) {
      setStatus(false)
    }
  }

  useEffect(() => {
    const handleOnline = () => {
      setStatus(true)
    }
    const handleOffline = () => {
      setStatus(false)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    testConnect()

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const isOnline = () => {
    return status
  }

  return {
    isOnline
  }
}

export default useOnlineStatus
