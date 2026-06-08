import {
  ArrowRight,
  Boxes,
  CreditCard,
  ShoppingCart,
  Star,
  Truck,
  WalletCards,
} from "lucide-react"
import { PreviewSkeleton } from "./PreviewSkeleton"

const categories = [
    {
        name: "Checkout",
        description: "Conversion-focused payment and shipping layouts.",
        icon: CreditCard,
    },
    {
        name: "Cart",
        description: "Cart drawers, line items, and order summaries.",
        icon: ShoppingCart,
    },
    {
        name: "Reviews",
        description: "Testimonials, ratings, and trust-building blocks.",
        icon: Star,
    },
    {
        name: "Orders",
        description: "Tracking states, receipts, and customer history.",
        icon: Truck,
    },
    {
        name: "Buttons",
        description: "Actions, icon buttons, and polished interaction states.",
        icon: WalletCards,
    },
    {
        name: "Layouts",
        description: "Reusable structure blocks for fast-first prototypes.",
        icon: Boxes,
    },
]


export const Categories = () => {
    return (
        <section id="components" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                    <Boxes className="size-3.5" />
                    Pre-built component categories
                </div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Build from polished blocks, not blank screens. 
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                    A personal library of production-friendly sections for product
                    teams, agencies, and indie makers building with React and Next.js.
                    Detailed attention to developer experience, accessibility, and performance.
                </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {categories.map((category) => {
                    const Icon = category.icon

                    return (
                        <article
                            key={category.name}
                            className="group rounded-[1.75rem] border border-border bg-card p-5 transition-colors hover:bg-card/80"
                        >
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                                    <Icon className="size-3.5" />
                                    {category.name}
                                </div>
                                <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                            </div>

                            <div className="mt-5 rounded-[1.5rem] border border-border/70 bg-background p-4">
                                <PreviewSkeleton name={category.name} />
                            </div>

                            <p className="mt-5 text-sm leading-6 text-muted-foreground">
                                {category.description}
                            </p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
