import Link from "next/link";
import React from "react";

export default function AdminAsideLeft() {
  return (
    <aside className="AsideLeftOfDashboard">
      <ul>
        <li>
          <Link href={`/admin/dashboard`}>Overview</Link>
        </li>
        <li>
          <Link href={`/admin/dashboard`}>Orders</Link>
        </li>
        <li>
          <Link href={`/admin/dashboard`}>Transactions</Link>
        </li>
        <li>
          <Link href={`/admin/dashboard`}>Categories Management</Link>
        </li>
        <li>
          <Link href={`/admin/dashboard`}>Notification Management</Link>
        </li>
        <li>
          <Link href={`/admin/dashboard`}>Performance</Link>
        </li>
        <li>
          <Link href={`/admin/dashboard`}>Issues</Link>
        </li>
      </ul>
    </aside>
  );
}
