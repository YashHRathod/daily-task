'use-client'
import Image from "next/image";

export default function Profile() {
  return (
    <Image
      src="/image.png"
      width={200}
      height={200}
      alt="Profile image"
    />
  );
}
