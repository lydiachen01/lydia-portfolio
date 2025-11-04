export default function StarSequence({ starWidth, starHeight }: { starWidth: number; starHeight: number }) {
  const starsPerRow = Math.ceil(typeof window !== 'undefined' ? window.innerWidth / starWidth : 0);

  return (
    <div className="flex w-screen overflow-hidden">
      {Array.from({ length: starsPerRow }).map((_, i) => (
        <img key={i} src="star.svg" alt="star" style={{ width: starWidth, height: starHeight }} />
      ))}
    </div>
  );
}