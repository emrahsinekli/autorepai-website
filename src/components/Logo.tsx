import { Link } from "@/i18n/routing";
import Image from "next/image";

export function Logo({ withText = true }: { withText?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 grid place-items-center shadow-md shadow-brand-500/30 group-hover:shadow-brand-500/50 transition">
        <Image
          src="/logo.png"
          alt="Auto RepAI"
          width={28}
          height={28}
          priority
          className="drop-shadow-sm"
        />
      </div>
      {withText && (
        <div className="flex flex-col leading-none">
          <span className="font-display font-bold text-lg tracking-tight">Auto RepAI</span>
          <span className="text-[10px] font-medium text-ink-400 uppercase tracking-wider">
            AI for WordPress
          </span>
        </div>
      )}
    </Link>
  );
}
