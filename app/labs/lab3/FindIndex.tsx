export default function FindIndex() {
  const numberArray1 = [1, 2, 4, 5, 6];
  const stringArray1 = ["string1", "string3"];
  const fourIndex = numberArray1.findIndex((a) => a === 4);
  const string3Index = stringArray1.findIndex((a) => a === "string3");
  const missingIndex = numberArray1.findIndex((n) => n === 3);
  const sixIndex = numberArray1.findIndex((n) => n === 6);
  return (
    <div id="wd-find-index">
      <h4>Find Index Function</h4>
      fourIndex = {fourIndex} <br />
      string3Index = {string3Index}
      <br />
      findIndex(3) = {missingIndex} <br />
      sixIndex = {sixIndex}
      <hr />
    </div>
  );
}
