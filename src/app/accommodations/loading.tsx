export default function AccommodationsLoading() {
  return (
    <div className="min-h-screen">
      <div className="relative py-16 px-4 bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <div className="h-10 w-72 bg-foreground/5 rounded-lg animate-pulse mb-2" />
          <div className="h-5 w-48 bg-foreground/5 rounded-lg animate-pulse mb-8" />
          <div className="h-12 max-w-xl bg-foreground/5 rounded-xl animate-pulse" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-[4/3] bg-foreground/5 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
