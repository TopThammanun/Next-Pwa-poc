import { useEffect, useState } from 'react'

const useOnlineStatus = () => {
  const [status, setStatus] = useState<boolean | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setStatus(navigator.onLine)

      const handleOnline = () => {
        setStatus(true)
      }
      const handleOffline = () => {
        setStatus(false)
      }
      window.addEventListener('online', handleOnline)
      window.addEventListener('offline', handleOffline)
      return () => {
        window.removeEventListener('online', handleOnline)
        window.removeEventListener('offline', handleOffline)
      }
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
