import React from "react";
import AdminAsideLeft from "../../../components/admin/AdminAsideLeft";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-3">
        <AdminAsideLeft />
      </div>
      <main>
        <div className="col-span-9"></div>
      </main>
    </div>
  );
}
