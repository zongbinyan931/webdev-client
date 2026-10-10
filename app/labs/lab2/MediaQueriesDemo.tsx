import "./MediaQueriesDemo.css";

export default function MediaQueriesDemo() {
  return (
    <div className="wd-media-queries-demo">
      <h2>Media Query Demo</h2>
      <p>
        This demo uses CSS media queries to change colors based on screen width:
      </p>
      <ul>
        <li className="wd-mq-rule-default">
          Default is White text on Green background
        </li>
        <li className="wd-mq-rule-750">
          750px to 1000px: Black text on Yellow background
        </li>
        <li className="wd-mq-rule-1000">
          1000px to 1250px: White text on Blue background
        </li>
        <li className="wd-mq-rule-1250">
          Above 1250px: White text on Red background
        </li>
      <li className="wd-mq-extra">At least 1500px: orange border</li><li className="wd-mq-rule-ai">Below 750px: purple background, white text</li></ul>
    </div>
  );
}
