/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href={`/`}>
        {" "}
        <img
          className="w-auto h-16 lg:h-20 "
          src="/images/wheat-bakery-logo.png"
          alt="wheat bakery logo"
        />
      </Link>
    </div>
  );
}
