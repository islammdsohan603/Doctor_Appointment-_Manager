const DoctorsLoading = () => {
  return (
    <section className="mx-auto w-10/12 py-16">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-xl">
          <div className="h-9 w-72 animate-pulse rounded-md bg-slate-200 md:h-11" />
          <div className="mt-3 h-5 w-full max-w-lg animate-pulse rounded-md bg-slate-100" />
          <div className="mt-2 h-5 w-3/4 animate-pulse rounded-md bg-slate-100" />
        </div>

        <div className="h-6 w-36 animate-pulse rounded-md bg-blue-100" />
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm"
          >
            <div className="mb-6 h-72 animate-pulse rounded-2xl bg-slate-200" />
            <div className="h-6 w-3/4 animate-pulse rounded-md bg-slate-200" />
            <div className="mt-3 h-4 w-1/2 animate-pulse rounded-md bg-blue-100" />
            <div className="mt-6 h-12 animate-pulse rounded-xl bg-slate-100" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorsLoading;
