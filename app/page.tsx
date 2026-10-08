export default function Page() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6 py-12 text-slate-950">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(#bbf7d0_1px,transparent_1px)] [background-size:24px_24px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-green-200/40 blur-3xl" />

      <section className="relative w-full max-w-2xl" aria-labelledby="profile-name">
        <div className="overflow-hidden rounded-[2rem] border border-green-100 bg-white shadow-[0_24px_80px_-32px_rgba(22,101,52,0.45)]">
          <div className="h-2 bg-green-600" />
          <div className="p-8 sm:p-12">
            <div className="mb-16 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.24em] text-green-600">
              <span>SC</span>
              <span>Software Engineer</span>
            </div>

            <div className="max-w-xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Personal calling card</p>
              <h1 id="profile-name" className="text-balance text-5xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-7xl">
                SDE Saurabh Chandra
              </h1>
              <div className="mt-8 h-px w-20 bg-green-600" />
              <p className="mt-8 max-w-md text-xl leading-9 text-slate-600 sm:text-2xl sm:leading-10">
                Build reliable, robust, and Simple Software Application.
              </p>
            </div>

            <div className="mt-20 flex items-end justify-between gap-6 border-t border-slate-100 pt-5">
              <p className="text-sm text-slate-500">Software Engineer</p>
              <span className="size-3 rounded-full bg-green-600 ring-8 ring-green-50" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
