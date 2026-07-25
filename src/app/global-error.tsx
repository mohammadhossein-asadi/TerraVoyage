"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Something went wrong</h2>
            <p style={{ color: "#666", marginBottom: "1.5rem" }}>A critical error occurred.</p>
            <button
              onClick={reset}
              style={{ padding: "0.75rem 1.5rem", borderRadius: "0.75rem", background: "#2563eb", color: "white", border: "none", cursor: "pointer", fontWeight: 500 }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
