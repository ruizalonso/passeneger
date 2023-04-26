import Link from 'next/link'

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
          Protect your secrets
        </h1>
        <p className="mt-6 text-lg leading-8">
          Protect your passwords and keep your secrets safe! Our application
          allows you to generate and store secure passwords, thus avoiding the
          vulnerability of your personal data online. Register now and get the
          peace of mind you need to surf the Internet without worries!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button className="btn px-3.5 py-2.5 text-sm font-semibold shadow-sm">
            Get started
          </button>
          <Link href="/login" className="text-sm font-semibold leading-6">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
