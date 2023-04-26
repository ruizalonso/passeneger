import React from 'react'
import EntryList from './entry/EntryList'
import { NextPage } from 'next'
import { Entry } from '@/interfaces'
interface EntryProps {
  entries: Entry[]
}
const Entries: NextPage<EntryProps> = ({ entries }) => {
  return <EntryList entries={entries} />
}

export default Entries