import Link from "next/link";

export default function Button({ href, children }) {
    return (
        <Link href={href}>{children}</Link>
    )
}