// import { useState, useEffect } from 'react'

// type UseFetchResponse<T> = {
//   data: T | null
//   error: Error | null
//   isLoading: boolean
// }

// const useFetch = <T extends any>(url: string): UseFetchResponse<T> => {
//   const [data, setData] = useState<T | null>(null)
//   const [error, setError] = useState<Error | null>(null)
//   const [isLoading, setIsLoading] = useState<boolean>(false)

//   useEffect(() => {
//     const fetchData = async (): Promise<void> => {
//       setIsLoading(true)
//       try {
//         const response = await fetch(url)
//         if (!response.ok) {
//           throw new Error(response.statusText)
//         }
//         const data = await response.json()
//         setData(data)
//         setError(null)
//       } catch (error) {
//         setError(error)
//         setData(null)
//       } finally {
//         setIsLoading(false)
//       }
//     }
//     fetchData()
//   }, [url])

//   return {
//     data,
//     error,
//     isLoading,
//   }
// }

// export default useFetch

import useSWR from 'swr'

const useFetch = <Data = unknown>(url: string) => {
  const { data, error } = useSWR<Data>(url, async (url) => {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Ha ocurrido un error')
    }
    return response.json()
  })

  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

export default useFetch
