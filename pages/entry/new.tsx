import React from 'react'
import EditEntryForm from '@components/home/entry/EditEntryForm'
import { NextPage } from 'next/types'
import { EntryProps } from '@/index'
// import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const NewEntry: NextPage<EntryProps> = () => {
  const entry = {
    _id: '',
    user: '642f30f025fe35d37e0c6225',
    entryName: '',
    entryDescription: '',
    entryValue: '',
  }
  return <EditEntryForm entry={entry} edit={false} />
}

// export const getServerSideProps = withPageAuthRequired()
export default NewEntry
