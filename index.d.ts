// import { TextareaHTMLAttributes } from "react"
import { Entry } from '@/interfaces'

interface Props {
  children: React.ReactNode
}

interface EntryProps {
  entry: Entry
  edit?: boolean
}

interface UseFetchParams {
  url: string
  method: string
  routeReturn: string
}

interface InputComponentProperties {
  label: string
  id: string
  type: string
  name: string
  autoComplete: string
  required: boolean
  placeholder?: string
  importanValue?: boolean
  value?: InputHTMLAttributes
}