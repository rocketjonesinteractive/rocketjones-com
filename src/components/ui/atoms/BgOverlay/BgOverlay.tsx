export const BgOverlay = ({ opacity = 60 }: { opacity?: number }) => {
  return (
    <div className="absolute z-[1] inset-0 h-full w-full bg-black" style={{ opacity: opacity / 100 }} />
  );
};
