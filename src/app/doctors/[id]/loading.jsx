const DoctorDetailsLoading = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-slate-50 via-cyan-50 to-blue-50 py-10 lg:py-20">
      <div className="mx-auto w-11/12 lg:w-10/12">
        <div className="overflow-hidden rounded-[2.5rem] border border-white bg-white/70 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.08)] sm:p-8 lg:p-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="h-[500px] min-h-[500px] animate-pulse rounded-[2rem] bg-slate-200" />

            <div className="flex flex-col justify-center">
              <div className="h-4 w-48 animate-pulse rounded-md bg-cyan-100" />
              <div className="mt-5 h-14 w-4/5 animate-pulse rounded-md bg-slate-200" />
              <div className="mt-4 h-7 w-56 animate-pulse rounded-md bg-cyan-100" />

              <div className="mt-8 space-y-3">
                <div className="h-5 animate-pulse rounded-md bg-slate-100" />
                <div className="h-5 animate-pulse rounded-md bg-slate-100" />
                <div className="h-5 w-3/4 animate-pulse rounded-md bg-slate-100" />
              </div>

              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-white bg-white/80 p-6 shadow-md"
                  >
                    <div className="h-14 w-14 animate-pulse rounded-2xl bg-cyan-100" />
                    <div className="mt-4 h-6 w-32 animate-pulse rounded-md bg-slate-200" />
                    <div className="mt-3 h-4 w-40 animate-pulse rounded-md bg-slate-100" />
                  </div>
                ))}
              </div>

              <div className="mt-10 h-14 w-56 animate-pulse rounded-2xl bg-blue-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetailsLoading;
