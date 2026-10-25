function add(a: number, b: number) {
  return a + b;
}

export default function LegacyFunctions() {
  const twoPlusFour = add(2, 4);
  console.log(twoPlusFour);
  function subtract(a: number, b: number) { return a - b; }
  function multiply(a: number, b: number) { return a * b; }
  console.log(multiply(3, 7));
  return (
    <div id="wd-legacy-functions">
      <h4>Functions</h4>
      <h5>Legacy ES5 functions</h5>
      twoPlusFour = {twoPlusFour} <br />
      add(2, 4) = {add(2, 4)}
      <br />
      subtract(8, 3) = {subtract(8, 3)} <br />
      multiply(3, 7) = {multiply(3, 7)}
      <hr />
    </div>
  );
}
