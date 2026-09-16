import { cn } from "@/lib/cn";

export type IconName =
  | "shield"
  | "wallet"
  | "team"
  | "handshake"
  | "loop"
  | "sparkles"
  | "store"
  | "card"
  | "truck"
  | "chart"
  | "target"
  | "check";

const paths: Record<IconName, React.JSX.Element> = {
  shield: (
    <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Zm-1.2 12.2L8 12.4l1.4-1.4 1.4 1.4L14 9.2l1.4 1.4-4.6 4.6Z" />
  ),
  wallet: (
    <path d="M4 7a2 2 0 0 1 2-2h11a1 1 0 0 1 1 1v1h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Zm14 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  ),
  team: (
    <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-8 2c-3 0-6 1.5-6 4v2h8v-2c0-1.1.5-2.1 1.3-3-.9-.6-2-1-3.3-1Zm8 0c-1 0-1.9.2-2.7.6C14.4 14.5 15 15.7 15 17v2h7v-2c0-2.5-3-4-6-4Z" />
  ),
  handshake: (
    <path d="M12 5 9 7.5 5.5 6 3 8.5l4 4 1.5-1.5 2 2c.6.6 1.5.6 2 0l.5-.5.7.7c.6.6 1.5.6 2 0 .5-.5.6-1.2.2-1.8.7.2 1.4 0 1.9-.5.7-.7.7-1.8 0-2.5L15 5.5 12 5Zm9 3.5L18.5 6 16 8l3.5 3.5L21 10V8.5Z" />
  ),
  loop: (
    <path d="M12 4a8 8 0 0 1 7 4l-2 .5A6 6 0 0 0 6.7 8.5L9 9 4 11 3 5l2 1.2A8 8 0 0 1 12 4Zm0 16a8 8 0 0 1-7-4l2-.5A6 6 0 0 0 17.3 15.5L15 15l5-2 1 6-2-1.2A8 8 0 0 1 12 20Z" />
  ),
  sparkles: (
    <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Zm6 9 .9 2.1L21 15l-2.1.9L18 18l-.9-2.1L15 15l2.1-.9L18 12ZM6 13l.7 1.6L8.5 15l-1.8.7L6 17.5l-.7-1.8L3.5 15l1.8-.4L6 13Z" />
  ),
  store: (
    <path d="M4 4h16l1 5a2.5 2.5 0 0 1-4.5 1.5A2.5 2.5 0 0 1 12 10a2.5 2.5 0 0 1-4.5.5A2.5 2.5 0 0 1 3 9l1-5Zm1 8.8V20h6v-4h2v4h6v-7.2a4 4 0 0 1-4-.7 4 4 0 0 1-5 0 4 4 0 0 1-5 0 4 4 0 0 1-1 .7Z" />
  ),
  card: (
    <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Zm2 2v2h14V8H5Zm0 5v3h6v-3H5Z" />
  ),
  truck: (
    <path d="M3 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2h3l3 3.5V16a1 1 0 0 1-1 1h-1a2.5 2.5 0 0 1-5 0H10a2.5 2.5 0 0 1-5 0H4a1 1 0 0 1-1-1V6Zm11 4h4l-2-2h-2v2ZM7.5 17.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  ),
  chart: (
    <path d="M4 4h2v14h14v2H4V4Zm4 9h2v4H8v-4Zm4-5h2v9h-2V8Zm4 3h2v6h-2v-6Z" />
  ),
  target: (
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
  ),
  check: (
    <path d="M9.2 16.6 4.6 12l1.4-1.4 3.2 3.2 8.2-8.2L18.8 7l-9.6 9.6Z" />
  ),
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-6 w-6", className)}
      fill="currentColor"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
