import React from 'react'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import Button from '@common/Button'
import { Entry } from '@/interfaces'
import { useRouter } from 'next/router'

function EntryItem({ _id, entryName, entryDescription }: Entry) {
  const router = useRouter()
  const contentType = 'application/json'

  const deleteEntry = async (_id: string) => {   
    try {
      await fetch(`/api/entry/${_id}`, {
        method: 'DELETE',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
      })
      router.push('/entry')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <tr className="hover">
      <th>🔵</th>
      <td>{entryName}</td>
      <td>{entryDescription ? entryDescription : 'None'}</td>
      <td>
        <Button
          buttonType="link"
          type="ghost"
          hfref={`/entry/${_id}`}
          isOutline={true}
          size="sm"
        >
          <PencilSquareIcon className="h-5 w-5" aria-hidden="true" />
        </Button>
        <Button
          buttonType="button"
          type="accent"
          hfref=""
          isOutline={true}
          size="sm"
          onClick={() => deleteEntry(_id)}
        >
          <TrashIcon className="h-5 w-5" aria-hidden="true" />
        </Button>
      </td>
    </tr>
  )
}

export default EntryItem
