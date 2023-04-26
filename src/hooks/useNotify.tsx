import { useState, useEffect, ReactNode } from 'react'
import { toast, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type NotifyProps = {
  variant?: 'success' | 'error' | 'warning' | 'info' | 'default'
  message: ReactNode
}

type UseNotification = [NotifyProps, (message: NotifyProps) => void]

function useNotification(): UseNotification {
  const [notification, setNotification] = useState<NotifyProps>(Object)
  const options: ToastOptions = {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'dark',
  }
  useEffect(() => {
    setNotification(Object)
  }, [notification])

  function showNotification(notify: NotifyProps) {
    switch (notify.variant) {
      case 'success':
        toast.success(notify.message, options)
        break
      case 'error':
        toast.error(notify.message, options)
        break
      case 'warning':
        toast.warning(notify.message, options)
        break
      case 'info':
        toast.info(notify.message, options)
        break
      default:
        toast(notify.message, options)
        break
    }
    setNotification(notify)
  }

  return [notification, showNotification]
}

export default useNotification
