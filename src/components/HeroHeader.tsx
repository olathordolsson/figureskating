interface Props {
  image: string;
  title: string;
  subtitle: string;
}

export function HeroHeader({ image, title, subtitle }: Props) {
  return (
    <div
      className="relative flex flex-col justify-end px-5 pb-6"
      style={{ height: 'calc(50vh + env(safe-area-inset-top, 0px))' }}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(20,20,20,0.1) 0%, rgba(20,20,20,0.5) 50%, #141414 100%)',
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="text-4xl font-bold text-white tracking-tight">{title}</h1>
        <p className="text-sm mt-1" style={{ color: '#aaa' }}>{subtitle}</p>
      </div>
    </div>
  );
}
