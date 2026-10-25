export default function VariablesAndConstants() {
  // eslint-disable-next-line no-var -- This example compares var, let, and const.
  var functionScoped = 2;
  let blockScoped = 4;
  blockScoped += 1;
  const constant1 = functionScoped - blockScoped;
  let studentName = "Zongbin";
  studentName += " Yan";
  const greeting = `Hello, ${studentName}`;
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped}       <br />
      constant1 = {constant1}
      <br />
      studentName = {studentName} <br />
      greeting = {greeting} <br />
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}
