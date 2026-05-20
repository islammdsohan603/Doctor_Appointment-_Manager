const DashboardLoading = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="h-9 w-80 animate-pulse rounded-md bg-slate-200" />
            <div className="mt-3 h-5 w-72 animate-pulse rounded-md bg-slate-100" />
          </div>

          <div className="h-10 w-40 animate-pulse rounded-full bg-blue-100" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="h-10 w-10 animate-pulse rounded-full bg-blue-100" />
                <div className="flex-1">
                  <div className="h-5 w-40 animate-pulse rounded-md bg-slate-200" />
                  <div className="mt-2 h-3 w-20 animate-pulse rounded-md bg-slate-100" />
                </div>
              </div>

              <div className="mb-6 rounded-lg border border-gray-100 bg-gray-50 p-3">
                <div className="h-5 w-56 animate-pulse rounded-md bg-slate-200" />
              </div>

              <div className="mb-6 space-y-3">
                <div className="h-4 animate-pulse rounded-md bg-slate-100" />
                <div className="h-4 animate-pulse rounded-md bg-slate-100" />
                <div className="h-4 animate-pulse rounded-md bg-slate-100" />
              </div>

              <div className="flex gap-3 border-t border-gray-100 pt-4">
                <div className="h-10 flex-1 animate-pulse rounded-lg bg-blue-100" />
                <div className="h-10 flex-1 animate-pulse rounded-lg bg-red-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardLoading;
