/** Star mark plus the two line wordmark in the top left of the navbar. */
export function Logo() {
  return (
    <a href="#" className="flex shrink-0 items-center gap-2 text-white">
      <svg viewBox="0 0 48 48" className="h-8 w-8 drop-shadow-[0_0_10px_rgba(230,34,77,0.55)] sm:h-9 sm:w-9">
        <path
          d="M24 4c3 8 8 13 16 16-8 3-13 8-16 16-3-8-8-13-16-16 8-3 13-8 16-16z"
          fill="url(#logoGradient)"
          stroke="white"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff5c7f" />
            <stop offset="100%" stopColor="#34E0A1" />
          </linearGradient>
        </defs>
      </svg>

    </a>
  );
}
