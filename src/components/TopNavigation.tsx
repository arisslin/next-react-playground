import Link from 'next/link';

export default function TopNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/next'}>Next</Link>
        </li>
        <li>
          <Link href={'/react'}>React</Link>
        </li>
      </ul>
    </nav>
  );
}
