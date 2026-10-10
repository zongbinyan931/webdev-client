export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <h3>Three columns</h3>
      <div className="wd-flex-row-container"><div className="wd-bg-color-yellow">Column 1</div><div className="wd-bg-color-blue wd-fg-color-white">Column 2</div><div className="wd-bg-color-red wd-fg-color-white">Column 3</div></div>
      <h3>Growing last column</h3>
      <div className="wd-flex-row-container"><div className="wd-bg-color-yellow">Column 1</div><div className="wd-bg-color-blue wd-fg-color-white">Column 2</div><div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">Column 3</div></div>
      <h3>Fixed first column</h3>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
<h3>Extra flex layouts</h3><div className="wd-flex-row-container"><div className="wd-width-110px wd-bg-color-yellow">Fixed</div><div className="wd-flex-grow-1 wd-bg-color-green">Grows</div></div><div id="wd-ai-flex" className="wd-flex-row-container"><div className="wd-width-110px wd-bg-color-yellow">Fixed</div><div className="wd-bg-color-red">Middle</div><div className="wd-flex-grow-1 wd-bg-color-blue">Grows</div></div>
    </div>
  );
}
