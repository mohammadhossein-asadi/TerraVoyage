export default function DestinationLoading() {
  return (
    <div className="min-h-screen">
      <div className="relative py-20 px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="h-10 w-64 mx-auto bg-foreground/5 rounded-lg animate-pulse mb-4" />
          <div className="h-6 w-96 mx-auto bg-foreground/5 rounded-lg animate-pulse mb-8" />
          <div className="h-12 max-w-xl mx-auto bg-foreground/5 rounded-xl animate-pulse" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-20">
        <div className="flex gap-2 mb-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-9 w-20 bg-foreground/5 rounded-full animate-pulse" />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-[3/4] bg-foreground/5 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
