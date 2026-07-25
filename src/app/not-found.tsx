import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-bold text-foreground/10 mb-4">404</div>
        <h1 className="text-3xl font-bold mb-2">Page not found</h1>
        <p className="text-foreground/50 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
