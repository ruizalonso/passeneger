/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import EntryItem from './EntryItem'
import { PlusIcon } from '@heroicons/react/24/outline'
import { NextPage } from 'next'
import ButtonIcon from '@common/Button'
import { Entry } from '@/interfaces'
interface EntryProps {
  entries: Entry[]
}
const EntryList: NextPage<EntryProps> = ({ entries }) => {

  const lisItems = entries.map(
    ({ user, entryName, entryDescription, entryValue, _id }, item) => (
      <EntryItem
        key={item}
        _id={_id}
        user={user}
        entryName={entryName}
        entryDescription={entryDescription}
        entryValue={entryValue}
        encriptionKey={''}
      />
    )
  )
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-center mb-4">
        <ButtonIcon
          buttonType="link"
          type="btn"
          isCircle={true}
          hfref="/entry/new"
        >
          <PlusIcon className="h-5 w-5" aria-hidden="true" />
        </ButtonIcon>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>🆔</th>
            <th>Name</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{lisItems}</tbody>
      </table>
    </div>
  )
}

export default EntryList
