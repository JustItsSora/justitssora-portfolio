import Image from "next/image";
import { assets } from "@/config/site";

/** Fixed full screen artwork with the colour wash that sits over it. */
export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image src={assets.background} alt="" fill priority className="object-cover" />

      {/* Vertical tint so light text stays readable over any part of the photo. */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E1A]/75 via-[#0B0E1A]/55 to-[#07090F]/90" />

      {/* Soft glow behind the page heading. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_18%,rgba(230,34,77,0.22),transparent_62%)]" />
    </div>
  );
}
