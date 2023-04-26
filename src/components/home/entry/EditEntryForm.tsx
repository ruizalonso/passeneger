/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import ButtonIcon from '@common/Button'
import { NextPage } from 'next'
import { Entry } from '@/interfaces'
import { mutate } from 'swr'
import { EntryProps } from '@/index'
import useNotification from '@hooks/useNotify'

const EditEntryForm: NextPage<EntryProps> = ({ entry, edit }) => {
  const [notification, showNotification] = useNotification()

  const router = useRouter()
  const { _id } = router.query
  const contentType = 'application/json'

  const [form, setForm] = useState({
    _id: _id as string,
    user: entry.user,
    entryName: entry.entryName,
    entryDescription: entry.entryDescription,
    entryValue: entry.entryValue,
  })

  const postData = async (formData: Entry) => {
    try {
      const res = await fetch(`/api/entry`, {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(formData),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        showNotification({
          variant: 'error',
          message: 'res.status',
        })
        // throw new Error(res.status as unknown as string)
      }
      // const { data } = await res.json()
      router.push('/entry')
    } catch (error: any) {
      showNotification({
        variant: 'error',
        message: 'error.message',
      })
      // setMessage('Failed to update pet')
      console.log('error', error)
    }
  }

  const putData = async (formData: Entry) => {
    try {
      const res = await fetch(`/api/entry/${_id}`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(formData),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        console.log('entra ok')

        // showNotification({
        //   variant: 'error',
        //   message: 'error.message',
        // })
        throw new Error('paila')
      }

      const { data } = await res.json()

      mutate(`/api/entry/${_id}`, data, false) // Update the local data without a revalidation
      router.push('/entry')
    } catch (error) {
      showNotification({
        variant: 'error',
        message: 'error message',
      })
      // setMessage('Failed to update pet')
      // console.log('error hjfghjgfhjgfjhfgjh', error)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target
    const value = target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (edit) {
      putData(form)
    } else {
      postData(form)
    }
  }

  const nameProps = {
    className: 'input input-bordered w-full max-w-xs',
    id: 'name',
    type: 'text',
    name: 'entryName',
    autoComplete: 'off',
    required: true,
    placeholder: 'Entry name',
    value: form.entryName,
    onChange: handleChange,
  }
  const valueProps = {
    className: 'input input-bordered input-primary w-full max-w-xs',
    id: 'value',
    type: 'text',
    name: 'entryValue',
    autoComplete: 'off',
    required: true,
    placeholder: 'Entry value',
    onChange: handleChange,
  }
  const descriptionProps = {
    className: 'textarea textarea-bordered w-full max-w-xs',
    id: 'description',
    name: 'entryDescription',
    autoComplete: 'off',
    required: true,
    placeholder: 'Entry description',
    value: form.entryDescription,
    onChange: handleChange,
  }
  return (
    <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="form-control my-2">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input {...nameProps} />
        </div>
        <div className="form-control my-2">
          <label htmlFor="value" className="label">
            Value
          </label>
          <input {...valueProps} />
        </div>
        <div className="form-control my-2">
          <label htmlFor="description" className="label">
            Description
          </label>
          <textarea {...descriptionProps} />
        </div>
      </div>
      <div className="mt-10">
        <ButtonIcon buttonType="button" type="primary" hfref="" isLarge={true}>
          {edit ? 'Update' : 'Save'}
        </ButtonIcon>
      </div>
    </form>
  )
}

export default EditEntryForm
