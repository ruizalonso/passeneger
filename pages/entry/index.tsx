// import Entries from '@/src/components/home'
import Entries from '@/src/components/home'
import React from 'react'
import { getEntresByUserId } from '@lib/entries'
import { GetServerSideProps, NextPage } from 'next'
import { Entry } from '@/interfaces'
interface EntryProps {
  entries: Entry[]
}
const Index: NextPage<EntryProps> = ({ entries }) => {
  return <Entries entries={entries} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const entries = await getEntresByUserId('642f30f025fe35d37e0c6225')
  return { props: { entries } }
}

// export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
//   async getServerSideProps() {
//     const entries = await getEntresByUserId('642f30f025fe35d37e0c6225')
//     return { props: { entries } }
//   },
// })
export default Index
