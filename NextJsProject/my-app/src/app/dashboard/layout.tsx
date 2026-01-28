import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "200px", background: "#eee", padding: "10px" }}>
        <p>📚 Menu</p>
        <p>Profile</p>
        <p>Courses</p>
      </aside>

      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </div>
  );
}