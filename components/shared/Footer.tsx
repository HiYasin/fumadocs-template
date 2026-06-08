import { Boxes } from 'lucide-react'

export const Footer = () => {
    return (
        <footer className="mx-auto flex justify-between items-center gap-3 px-6 py-8 text-sm text-muted-foreground lg:px-10  bg-white dark:bg-black">
            <div className="flex items-center gap-2 text-foreground">
                <div className="flex size-8 items-center justify-center rounded-full border border-border bg-card">
                    <Boxes className="size-4" />
                </div>
                <span className="font-medium">BlockCraft UI</span>
            </div>
            <p>A project by <span className="font-medium">Faisal</span></p>
        </footer>
    )
}
