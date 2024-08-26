"use client";

import { $api } from "@/libs/api";

export default function ExampleApisPage() {
  // const data = await fetchClient.GET("/breeds");

  // return (
  //   <div>
  //     <h1>Example API</h1>
  //     <pre>{JSON.stringify(data, null, 2)}</pre>
  //   </div>
  // );

  const { data, error, isLoading } = $api.useQuery("get", "/breeds");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  return (
    <div>
      <h1>Example API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
