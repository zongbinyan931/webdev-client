/* eslint-disable @next/next/no-img-element */
const STARSHIP =
  "/images/reactjs.jpg";
const LOREM =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic reprehenderit doloremque adipisci iste deserunt. Inventore, hic. Esse nihil unde aut, dignissimos eos consequatur veniam distinctio?";

export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <img className="wd-float-right" src={STARSHIP} alt="React logo" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={STARSHIP} alt="React logo" />
        {LOREM} {LOREM}
        <img className="wd-float-right" src={STARSHIP} alt="React logo" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={STARSHIP} alt="React logo" />
        {LOREM} {LOREM}
        <div className="wd-float-done" />
      </div>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <img className="wd-float-right" src={STARSHIP} alt="React logo" />
        <div className="wd-float-done" />
      </div>
<div><div className="wd-float-left wd-dimension-square wd-bg-color-yellow">Left float</div><p>Text wraps around the left box. A clear ends this row.</p><div className="wd-float-done"/></div><div><div id="wd-ai-float" className="wd-float-right wd-dimension-square wd-bg-color-green">Right float</div><p>Text wraps around this right-hand box until the clear.</p><div className="wd-float-done"/></div>
    </div>
  );
}
