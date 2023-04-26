import React from 'react'
import Footer from '@/src/components/shared/Footer'
import Header from '@/src/components/shared/Header'

const Main: React.FC<Props> = ({ children }) => {
  return (
    <div data-theme="night">
      <Header />
      <main className="container max-w-screen-lg mx-auto px-5 py-10">
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default Main
