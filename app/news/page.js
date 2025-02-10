import { Fragment } from "react";
import Link from "next/link";

export default function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-a-great-framework'>Nextjs is really cool😎</Link>
        </li>
        <li>
          Something else
        </li>
      </ul>
    </Fragment>
  );
}
