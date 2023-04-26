import { EntryProps } from '@/index'
import EntryForm from '@components/home/entry/EditEntryForm'
import { getEntryById } from '@lib/entries'
import { GetServerSideProps, NextPage } from 'next'
import React from 'react'

const EditEntry: NextPage<EntryProps> = ({ entry }) => {
  return <EntryForm entry={entry} edit={true} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?._id
  const entry = await getEntryById(id as string)
  
  return { props: { entry } }
}

export default EditEntry
