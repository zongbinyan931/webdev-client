export default function Zindex() {
  return (
    <div id="wd-z-index">
      <h2>Z index</h2>
      <div className="wd-pos-relative" style={{ height: 230 }}>
        <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
          Portrait
        </div>
        <div className="wd-zindex-bring-to-front wd-pos-absolute-50-50 wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
          Square
        </div><div className="wd-extra-z wd-dimension-square wd-bg-color-red">Layer 15</div><div id="wd-ai-zindex" className="wd-ai-zindex-top wd-dimension-square wd-bg-color-blue">Layer 20</div>
      </div>
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}
