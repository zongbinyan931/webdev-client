import Link from "next/link";
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2>Zongbin Yan</h2>
      <p>CS5610 Web Development</p>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link id="wd-lab4-link" href="/labs/lab4">
            Lab 4
          </Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
        <li>
          <Link id="wd-kambaz-link" href="/">
            Kambaz
          </Link>
        </li>
        <li>
          <a
            id="wd-github"
            href="https://github.com/zongbinyan931/webdev-client"
            target="_blank"
            rel="noreferrer"
          >
            GitHub repository
          </a>
        </li>
      </ul>
    </div>
  );
}
