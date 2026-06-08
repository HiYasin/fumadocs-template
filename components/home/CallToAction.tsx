import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export const CallToAction = () => {
    return (
        <section id="cta" className="border border-y-2 bg-white dark:bg-black">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-16 text-center items-center lg:px-10">
                <div className="max-w-2xl">
                    <p className="text-sm font-medium text-muted-foreground">
                        Launch faster with your own design system foundation with everything you need to ship.
                        Detailed attention to developer experience, accessibility, and performance.
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Ready to ship your next project?
                    </h2>
                </div>

                <Button asChild size="lg" className="px-5 mx-auto">
                    <Link href="#top">
                        Get Started
                        <ArrowRight />
                    </Link>
                </Button>
            </div>
        </section>
    )
}
