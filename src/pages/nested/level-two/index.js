import Button from "@/components/Button";

export default function LevelTwo() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center gap-4 p-24'>
            <h1 className="text-3xl font-bold">Level Two</h1>
            <div>
                <Button href={'/nested/level-two/level-three'}>Level Three</Button>
            </div>
        </main>
    )
}