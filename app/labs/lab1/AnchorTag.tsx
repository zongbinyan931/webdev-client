export default function AnchorTag() {
  return (
    <div id="wd-anchor-tag">
      <h4>Anchor tag</h4>Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text.
      <br />
      <a id="wd-github" href="https://github.com/zongbinyan931/webdev-client">
        GitHub repository
      </a>
      <br />
      <a id="wd-your-link" href="https://www.northeastern.edu/">
        Northeastern University
      </a>
      <br />
      <a id="wd-your-github" href="https://github.com/zongbinyan931">
        My GitHub profile
      </a>
      <br />
      <a
        id="wd-ai-link"
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
      >
        MDN: the table element
      </a>
    </div>
  );
}
