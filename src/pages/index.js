import Button from "@/components/Button";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-center gap-4 p-24 ${inter.className}`}    >
            <h1 className="text-3xl font-bold">Home</h1>
            <div className="flex gap-4">
                <Button href={"/about"} >About</Button>
                <Button href={"/about2"} >About2</Button>
                <Button href={"/contact"} >Contact</Button>
                <Button href={"/nested"} >Nested</Button>
                <Button href={"/product"} >Product</Button>
            </div>
        </main>
    );
}
