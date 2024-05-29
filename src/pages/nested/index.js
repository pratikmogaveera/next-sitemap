import Button from "@/components/Button";

export default function Nested() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center gap-4 p-24'>
            <h1 className="text-3xl font-bold">Nested</h1>
            <div className="flex gap-4">
                <Button href={"/nested/level-one"}>
                    Level One
                </Button>
                <Button href={"/nested/level-one-two"}>
                    Level One 2
                </Button>
            </div>
        </main>
    )
}