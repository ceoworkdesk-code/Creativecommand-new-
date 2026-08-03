export default function Stamp({ children }) {
  return (
    <span className="inline-block text-[10px] font-bold tracking-[0.15em] px-2 py-1 border border-oliveBright text-oliveBright rotate-[-2deg] font-mono">
      {children}
    </span>
  );
}
