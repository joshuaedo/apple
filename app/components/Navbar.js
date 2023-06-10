import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-[#fbfbfd] opacity-80 flex text-sm text-clip h-11 space-x-5">
      <Link href="https://apple.com/">Home</Link>
      <Link href="https://apple.com/">Store</Link>
      <Link href="https://apple.com/">Mac</Link>
      <Link href="https://apple.com/">iPad</Link>
      <Link href="https://apple.com/">iPhone</Link>
      <Link href="https://apple.com/">Watch</Link>
      <Link href="https://apple.com/">Vision</Link>
      <Link href="https://apple.com/">Airpods</Link>
      <Link href="https://apple.com/">TV & Home</Link>
      <Link href="https://apple.com/">Entertainment</Link>
      <Link href="https://apple.com/">Accessories</Link>
      <Link href="https://apple.com/">Support</Link>
      <Link href="https://apple.com/">Search</Link>
      <Link href="https://apple.com/">Bag</Link>
    </div>
  );
}
