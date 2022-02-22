import React from "react";
import { useRouter } from "next/router";
export default function ServiceDetailPage() {
  const router = useRouter();
  console.log("Router in service detail = ", router);
  return <div>Service Detail Page for {router.query.serviceID}</div>;
}
