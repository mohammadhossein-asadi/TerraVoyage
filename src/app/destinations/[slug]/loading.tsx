export default function DestinationDetailLoading() {
  return (
    <div className="min-h-screen">
      <div className="h-[60vh] sm:h-[70vh] bg-foreground/5 animate-pulse" />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <div className="h-8 w-48 bg-foreground/5 rounded-lg animate-pulse" />
              <div className="h-4 w-full bg-foreground/5 rounded-lg animate-pulse" />
              <div className="h-4 w-3/4 bg-foreground/5 rounded-lg animate-pulse" />
            </div>
            <div className="space-y-4">
              <div className="h-8 w-32 bg-foreground/5 rounded-lg animate-pulse" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-[2/1] bg-foreground/5 rounded-xl animate-pulse" />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="h-48 bg-foreground/5 rounded-2xl animate-pulse" />
            <div className="h-64 bg-foreground/5 rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
