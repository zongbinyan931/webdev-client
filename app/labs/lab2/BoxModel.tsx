export default function BoxModel() {
  return (
    <div id="wd-css-box-model">
      <h2>Box model</h2>
      <div className="wd-box-model-parent">
        <div>parent background (shows through the margin)</div>
        <div className="wd-box-model-box">
          <span className="wd-box-model-border-label">border (the red ring)</span>
          <span className="wd-box-model-padding-label">padding</span>
          <div className="wd-box-model-content">content</div>
          <span className="wd-box-model-margin-label">
            margin: the 20px gray gap (transparent)
          </span>
        </div>
      </div>
      <h3>box-sizing</h3>
      <div className="wd-box-sizing-demo">
        <div className="wd-box-sizing-content">
          content-box: width 200px plus padding and border
        </div>
        <div className="wd-box-sizing-border">
          border-box: width 200px includes padding and border
        </div>
      </div>
<div style={{display:"flex",gap:20,flexWrap:"wrap"}}><div style={{boxSizing:"content-box",width:220,padding:20,border:"10px solid teal"}}>220px content + 60px padding/border = 280px total.</div>{/* border-box includes padding and border in the declared width. */}<div id="wd-ai-box-model" style={{boxSizing:"border-box",width:200,height:180,padding:20,border:"10px solid teal"}}>Border-box stays 200px wide.</div></div>
    </div>
  );
}
