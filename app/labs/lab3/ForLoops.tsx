export default function ForLoops() {
  const stringArray1 = ["string1", "string3"];
  const stringArray2: string[] = [];
  for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    stringArray2.push(string1.toUpperCase());
  }
  const lowercase: string[] = [];
  const stringLengths: number[] = [];
  for (const text of stringArray2) {
    lowercase.push(text.toLowerCase());
    stringLengths.push(text.length);
  }
  return (
    <div id="wd-for-loops">
      <h4>Looping through arrays</h4>
      stringArray2 = {stringArray2}
      <br />
      lowercase = {JSON.stringify(lowercase)} <br />
      stringLengths = {JSON.stringify(stringLengths)}
      <hr />
    </div>
  );
}
