import Link from "next/link";
export default function TOC() {
  return (
    <nav aria-label="Labs table of contents" id="wd-labs-toc">
      <p>Zongbin Yan</p>
      <ul>
        <li>
          <Link href="/labs" id="wd-home-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>
        <li>
          <Link href="/labs/lab4">Lab 4</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
        <li>
          <Link href="/">Kambaz</Link>
        </li>
        <li>
          <a id="wd-toc-book-link" href="https://kambaz.dev/book/ch1">
            Chapter 1
          </a>
        </li>
      </ul>
    </nav>
  );
}
