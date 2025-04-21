import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image 
        src="/images/logo.png"
        alt="Logo"
        width={32}
        height={32}
        className="h-10 w-10 rounded-full object-cover"
        priority
      />
    </Link>
  );
}
