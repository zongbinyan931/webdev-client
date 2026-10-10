/* eslint-disable @next/next/no-img-element */
export default function TailwindFilters() {
  // reactjs.jpg is used here so the lab runs out of the box.
  const src = "/images/reactjs.jpg";
  return (
    <div>
      <h2 className="text-2xl font-bold">Blurs</h2>
      <div className="flex">
        <img className="blur-none w-1/4" src={src} alt="blur none" />
        <img className="blur-sm w-1/4" src={src} alt="blur sm" />
        <img className="blur-lg w-1/4" src={src} alt="blur lg" />
        <img className="blur-2xl w-1/4" src={src} alt="blur 2xl" />
      </div>
<h3 className="text-lg font-bold">Contrast</h3><div className="flex">{["contrast-50","contrast-100","contrast-150","contrast-200"].map(f=><img key={f} className={`${f} w-1/4`} src={src} alt={f}/>)}</div><h3 className="text-lg font-bold">Grayscale and brightness</h3><div id="wd-ai-filters" className="flex">{["grayscale","grayscale-0","brightness-50","brightness-150"].map(f=><img key={f} className={`${f} w-1/4`} src={src} alt={f}/>)}</div>
    </div>
  );
}
