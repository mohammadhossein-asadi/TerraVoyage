"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl mb-4">!</div>
        <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
        <p className="text-foreground/50 mb-6 max-w-md">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
