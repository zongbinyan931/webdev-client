import Link from "next/link";
export default function PathParameters() {
  const pairs = [[1, 2], [3, 4], [10, 15], [5, 6]];
  return <section id="wd-path-parameters"><h2>Path Parameters</h2>
    <ul>{pairs.map(([a, b]) => <li key={`${a}-${b}`}>
      <Link href={`/labs/lab3/add/${a}/${b}`}>{a} + {b}</Link>
    </li>)}</ul><hr />
  </section>;
}
