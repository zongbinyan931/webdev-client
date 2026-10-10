import Link from "next/link";
import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <p>
        <Link href="/labs/lab2/tailwind">Open Tailwind CSS lab →</Link>
      </p>

      <h3>Styling with the STYLE attribute</h3>
      <p style={{ backgroundColor: "blue", color: "white" }}>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different look
          and feel
        </p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an element&apos;s
          CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .wd-selector-1 .wd-selector-3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
          </div>
        </div>
      </div>

      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
<section><h3>Additional selector experiments</h3>
<p style={{backgroundColor:"green",color:"yellow"}}>Inline colors: yellow text on green.</p>
<p id="wd-ai-style-attr" style={{backgroundColor:"purple",color:"white"}}>A purple inline example.</p>
<p id="wd-id-selector-3">An orange ID selector.</p><p id="wd-ai-id-selector">A teal ID selector.</p>
<p className="wd-your-class">A shared lavender class.</p><h4 className="wd-your-class">The same class on a heading</h4>
<p className="wd-ai-class-selector">Another shared class.</p><h4 className="wd-ai-class-selector">A matching heading</h4>
<div className="wd-selector-1"><div className="wd-selector-3"><span className="wd-extra-child">A direct child</span><span className="wd-ai-selector-5">A descendant span</span></div></div>
<div className="wd-cascade-scope"><p id="wd-cascade" className="wd-cascade">ID specificity wins: purple.</p><p id="wd-ai-cascade" className="wd-ai-cascade">ID specificity wins: red.</p></div></section>
    </div>
  );
}
