"use client";

import NextError from "next/error";

export default function GlobalError({
  error,
  params: { locale },
}: {
  error: Error & { digest?: string };
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <NextError
          statusCode={500}
          title={error.message || "An unexpected error occurred"}
        />
      </body>
    </html>
  );
}
