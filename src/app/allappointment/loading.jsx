const AllAppointmentLoading = () => {
  return (
    <div className="mx-auto w-10/12 py-10">
      <div className="mb-8">
        <div className="h-8 w-56 animate-pulse rounded-md bg-slate-200" />
        <div className="mt-3 h-5 w-80 max-w-full animate-pulse rounded-md bg-slate-100" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="rounded-[2rem] border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="mb-6 h-64 animate-pulse rounded-2xl bg-slate-200" />
            <div className="h-6 w-3/4 animate-pulse rounded-md bg-slate-200" />
            <div className="mt-3 h-4 w-1/2 animate-pulse rounded-md bg-blue-100" />
            <div className="mt-6 h-12 animate-pulse rounded-xl bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointmentLoading;
