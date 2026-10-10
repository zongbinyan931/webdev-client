export default function Padding() {
  return (
    <div id="wd-css-paddings">
      <h2>Padding</h2>
      <div className="wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
        Padded top left
      </div>
      <div className="wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
        Padded bottom right
      </div>
      <div className="wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
        Padded all around
      </div>
<p className="wd-extra-padding wd-border-fat wd-border-solid wd-border-red">Different padding on each side.</p><p id="wd-ai-padded" className="wd-ai-padding-top wd-border-fat wd-border-solid wd-border-red wd-bg-color-yellow">Top-only padding.</p>
    </div>
  );
}
