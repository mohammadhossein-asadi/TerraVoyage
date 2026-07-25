export default function AccommodationDetailLoading() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2 sm:p-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`bg-foreground/5 rounded-xl animate-pulse ${i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto" : "aspect-[4/3]"}`} />
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-4">
              <div className="h-8 w-64 bg-foreground/5 rounded-lg animate-pulse" />
              <div className="h-4 w-48 bg-foreground/5 rounded-lg animate-pulse" />
            </div>
            <div className="h-40 bg-foreground/5 rounded-2xl animate-pulse" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-12 bg-foreground/5 rounded-xl animate-pulse" />
              ))}
            </div>
          </div>
          <div className="h-80 bg-foreground/5 rounded-2xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}
