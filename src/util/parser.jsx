import { useEffect, useState } from 'react'
import Papa from 'papaparse'

export function useCsvData(url) {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    Papa.parse(url, {
      download: true,        
      header: true,          
      dynamicTyping: true,   
      skipEmptyLines: true,
      complete: (results) => {
        setRows(results.data)
        setLoading(false)
      },
      error: (err) => {
        setError(err)
        setLoading(false)
      },
    })
  }, [url])

  return { rows, loading, error }
}