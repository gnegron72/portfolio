import Link from 'next/link'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Contact</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">Let&apos;s collaborate</h2>
            <p className="mt-4 text-lg text-slate-700">
              Whether you are shaping a new product vision, modernizing a platform, or experimenting with AI-assisted delivery, I&apos;d love to connect.
            </p>

            <div className="mt-8 space-y-4 text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Email:</span>{' '}
                <Link href="mailto:hello@example.com" className="text-blue-600 hover:text-blue-500">
                  hello@example.com
                </Link>
              </p>
              <p>
                <span className="font-semibold text-slate-900">LinkedIn:</span>{' '}
                <Link
                  href="https://www.linkedin.com/in/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500"
                >
                  linkedin.com/in/example
                </Link>
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <form className="space-y-6" action="#" method="post">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  How can I help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Share your project goals, timeline, or challenges."
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-4 py-3 text-white font-semibold shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Send message
              </button>
              <p className="text-xs text-slate-500">
                This placeholder form does not submit yet—connect via email or LinkedIn while workflows are finalized.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
