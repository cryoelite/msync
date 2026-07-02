import { siteConfig } from "@/src/config/site";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div id="logo">
        <div id="logo__image">
          <Image
            src="/logo.svg"
            loading="eager"
            width={48}
            height={48}
            alt="MSync Logo"
          />
        </div>
        <div id="logo__name">
          <div id="logo__name__text">{siteConfig.name}</div>
        </div>
      </div>
    </Link>
  );
}
