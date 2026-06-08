export const PreviewSkeleton = ({ name }: { name: string }) => {
    if (name === "Checkout") {
        return (
            <div className="space-y-3">
                <div className="h-4 w-24 rounded-full bg-muted" />
                <div className="grid gap-2">
                    <div className="h-9 rounded-lg bg-muted/80" />
                    <div className="h-9 rounded-lg bg-muted/80" />
                    <div className="h-16 rounded-xl border border-dashed border-border bg-background/60" />
                </div>
            </div>
        )
    }

    if (name === "Cart") {
        return (
            <div className="space-y-3">
                {[0, 1, 2].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-border/70 p-2.5">
                        <div className="size-10 rounded-lg bg-muted" />
                        <div className="flex-1 space-y-2">
                            <div className="h-3 w-3/4 rounded-full bg-muted" />
                            <div className="h-3 w-1/2 rounded-full bg-muted/70" />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    if (name === "Reviews") {
        return (
            <div className="space-y-3">
                <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((item) => (
                        <div key={item} className="size-4 rounded-full bg-muted" />
                    ))}
                </div>
                <div className="h-3 w-full rounded-full bg-muted" />
                <div className="h-3 w-5/6 rounded-full bg-muted/80" />
                <div className="flex items-center gap-3 pt-2">
                    <div className="size-8 rounded-full bg-muted" />
                    <div className="space-y-2">
                        <div className="h-3 w-20 rounded-full bg-muted" />
                        <div className="h-3 w-14 rounded-full bg-muted/70" />
                    </div>
                </div>
            </div>
        )
    }

    if (name === "Orders") {
        return (
            <div className="space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-border/70 p-3">
                    <div className="space-y-2">
                        <div className="h-3 w-18 rounded-full bg-muted" />
                        <div className="h-3 w-12 rounded-full bg-muted/70" />
                    </div>
                    <div className="h-6 w-16 rounded-full bg-muted" />
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 rounded-full bg-muted" />
                    <div className="h-2 flex-1 rounded-full bg-muted" />
                    <div className="h-2 flex-1 rounded-full bg-muted/40" />
                </div>
            </div>
        )
    }

    if (name === "Buttons") {
        return (
            <div className="flex flex-wrap gap-2">
                <div className="h-9 w-24 rounded-lg bg-primary/90" />
                <div className="h-9 w-20 rounded-lg border border-border bg-background" />
                <div className="h-9 w-9 rounded-lg bg-muted" />
                <div className="h-9 w-28 rounded-lg bg-muted" />
            </div>
        )
    }

    return (
        <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
                <div className="h-18 rounded-2xl border border-border/70 bg-muted/70" />
                <div className="h-18 rounded-2xl border border-border/70 bg-muted/70" />
            </div>
            <div className="h-12 rounded-2xl border border-dashed border-border bg-background/60" />
            <div className="h-3 w-2/3 rounded-full bg-muted" />
        </div>
    )
}
