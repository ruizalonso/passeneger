import { Fragment, ReactNode } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

interface ModalType {
  children?: ReactNode
  isOpen: boolean,
  title: string,
  description?: string,
  toggle: () => void
}

export default function Modal({ isOpen, children, title, description }: ModalType) {
  return (
    <>
      {isOpen && (
        <>
          <input type="checkbox" id="customModal" className="modal-toggle" />
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-box relative">
              <label
                htmlFor="customModal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="py-4">{description}</p>
              {children}
            </div>
          </div>
        </>
      )}
    </>
  )
}
