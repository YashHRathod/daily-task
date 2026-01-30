"use client";

import { useRouter } from "next/navigation";

export default function Routertest() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/routertest")}>
      😒
    </button>
  );
}

