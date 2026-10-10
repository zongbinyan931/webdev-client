export default function Corners() {
  return (
    <div id="wd-css-corners">
      <h2>Rounded corners</h2>
      <p className="wd-rounded-corners-top wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Rounded corners on the top
      </p>
      <p className="wd-rounded-corners-bottom wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Rounded corners at the bottom
      </p>
      <p className="wd-rounded-corners-all-around wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Rounded corners all around
      </p>
      <p className="wd-rounded-corners-inline wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Different rounded corners
      </p>
<p className="wd-rounded-corners-top wd-border-thin wd-border-solid wd-border-red wd-padding-fat">Only top corners.</p><p id="wd-ai-corners" className="wd-ai-rounded-left wd-border-thin wd-border-solid wd-border-blue wd-padding-fat">Only left corners.</p>
    </div>
  );
}
