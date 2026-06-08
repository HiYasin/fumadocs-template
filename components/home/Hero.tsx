import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

export const Hero = () => {
    return (
        <section className="px-4 md:px-8 lg:px-12 mx-auto md:mx-8 lg:mx-32 border-x-0 md:border-x-2 max-w-full min-h-[80vh] md:min-h-[90vh] flex flex-col justify-center items-center bg-white dark:bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,120,120,0.12),transparent_40%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

            <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
                <div className="relative z-10 flex flex-col justify-center">
                    <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                        <span className="size-2 rounded-full bg-foreground" />
                        Component block library
                    </div>

                    <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                        Shadcn UI blocks for React.js/Nextjs Web app
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                        Ship your website fast with prebuilt UI blocks. Built with
                        React, Tailwind CSS, Framer Motion and shadcn/ui for rapid
                        prototyping.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Button asChild size="lg" className="px-5">
                            <Link href="#components">
                                Browse blocks
                                <ArrowRight />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="px-5">
                            <Link href="#cta">Get started</Link>
                        </Button>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
                        <div>
                            <div className="text-2xl font-semibold text-foreground">40+</div>
                            <p>Composable starter blocks</p>
                        </div>
                        <div>
                            <div className="text-2xl font-semibold text-foreground">100%</div>
                            <p>Tailwind-first styling</p>
                        </div>
                        <div>
                            <div className="text-2xl font-semibold text-foreground">Fast</div>
                            <p>Built for rapid iteration</p>
                        </div>
                    </div>
                </div>

                <div className="relative z-10">
                    <div className="rounded-[2rem] border border-border bg-card/80 p-4 shadow-sm backdrop-blur">
                        <div className="rounded-[1.5rem] border border-border/70 bg-background p-5">
                            <div className="flex items-center justify-between border-b border-border/70 pb-4">
                                <div>
                                    <p className="text-sm font-medium">Starter preview</p>
                                    <p className="text-sm text-muted-foreground">
                                        Landing-ready block composition
                                    </p>
                                </div>
                                <div className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                                    Minimal theme
                                </div>
                            </div>

                            <div className="mt-5 space-y-4">
                                <div className="rounded-2xl border border-border bg-muted/40 p-4">
                                    <div className="mb-3 h-3 w-24 rounded-full bg-muted-foreground/20" />
                                    <div className="h-10 rounded-xl bg-background shadow-sm" />
                                    <div className="mt-3 grid grid-cols-2 gap-3">
                                        <div className="h-24 rounded-xl border border-border/70 bg-background" />
                                        <div className="h-24 rounded-xl border border-border/70 bg-background" />
                                    </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-border p-4">
                                        <p className="text-sm font-medium">Blocks</p>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            Hero, feature, CTA, footer, cards
                                        </p>
                                    </div>
                                    <div className="rounded-2xl border border-border p-4">
                                        <p className="text-sm font-medium">Stack</p>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            React, Next.js, Tailwind, shadcn/ui
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
