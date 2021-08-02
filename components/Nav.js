import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/signup">Signup</Link>
      <Link href="/login">Login</Link>
      <Link href="/home">Home</Link>
      <Link href="/leaderboards">Leaderboards</Link>
      <Link href="/settings">Settings</Link>
      <Link href="/logout">Logout</Link>
    </nav>
  )
}

