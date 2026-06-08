
const techStack = [
    {
        name: "Vercel",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 76 65" fill="currentColor">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
            </svg>
        ),
    },
    {
        name: "React",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="2.5" />
                <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    transform="rotate(60 12 12)"
                />
                <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    transform="rotate(120 12 12)"
                />
            </svg>
        ),
    },
    {
        name: "Tailwind",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
            </svg>
        ),
    },
    {
        name: "Next.js",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 256 256" fill="currentColor">
                <path d="M121.451 28.054c-.43.039-1.799.176-3.031.273c-28.406 2.561-55.014 17.889-71.867 41.447C37.17 82.873 31.167 97.731 28.9 113.47c-.801 5.494-.899 7.117-.899 14.565c0 7.449.098 9.072.9 14.565c5.434 37.556 32.16 69.111 68.406 80.802c6.491 2.092 13.333 3.519 21.114 4.379c3.031.332 16.129.332 19.16 0c13.431-1.486 24.809-4.809 36.031-10.538c1.72-.879 2.053-1.114 1.818-1.309c-.156-.118-7.488-9.952-16.285-21.838l-15.992-21.603l-20.04-29.658c-11.026-16.305-20.097-29.639-20.176-29.639c-.078-.019-.156 13.158-.195 29.248c-.059 28.172-.078 29.306-.43 29.97c-.508.958-.899 1.349-1.721 1.78c-.625.312-1.173.371-4.125.371h-3.382l-.9-.567a3.65 3.65 0 0 1-1.31-1.427l-.41-.88l.04-39.198l.058-39.218l.606-.763c.313-.41.978-.938 1.447-1.192c.801-.391 1.114-.43 4.496-.43c3.989 0 4.653.156 5.69 1.29c.293.313 11.143 16.657 24.125 36.344a89122 89122 0 0 0 39.452 59.765l15.836 23.989l.802-.528c7.096-4.614 14.604-11.183 20.547-18.026c12.649-14.526 20.802-32.238 23.539-51.124c.801-5.493.899-7.116.899-14.565s-.098-9.071-.899-14.565c-5.435-37.556-32.161-69.11-68.407-80.801c-6.393-2.073-13.196-3.5-20.821-4.36c-1.877-.196-14.8-.41-16.422-.254m40.938 60.489c.938.469 1.701 1.368 1.975 2.306c.156.509.195 11.379.156 35.875l-.059 35.152l-6.197-9.502l-6.217-9.501v-25.552c0-16.52.078-25.807.195-26.257c.313-1.094.997-1.954 1.936-2.463c.801-.41 1.095-.45 4.164-.45c2.894 0 3.402.04 4.047.392" />
            </svg>
        ),
    },
    { name: "Stripe", icon: null },
    {
        name: "Radix UI",
        icon: (
            <svg
                className="w-5 h-5"
                viewBox="0 0 25 25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <path d="M12.5 2L22 7.5V17.5L12.5 23L3 17.5V7.5L12.5 2Z" />
                <path d="M12.5 12L22 7.5M12.5 12L3 7.5M12.5 12V23" />
            </svg>
        ),
    },
    {
        name: "shadcn/ui",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 256 256" fill="none">
                <line
                    x1="208"
                    y1="128"
                    x2="128"
                    y2="208"
                    stroke="currentColor"
                    strokeWidth="20"
                    strokeLinecap="round"
                />
                <line
                    x1="192"
                    y1="40"
                    x2="40"
                    y2="192"
                    stroke="currentColor"
                    strokeWidth="20"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
];

export const Marquee = () => {
    const marqueeItems = [...techStack, ...techStack, ...techStack];
    
    return (
        <section className="border border-y-2 py-4 md:py-8 lg:py-12 bg-white dark:bg-black">
            <div className="mx-auto w-full overflow-hidden px-6 lg:px-10 ticker-wrap">
                <div className="marquee-track flex min-w-max items-center gap-4 ticker">
                    {marqueeItems.map((item, index) => (
                        <div
                            key={`${item.name}-${index}`}
                            className="flex items-center gap-3  px-4  text-muted-foreground text-sm md:text-lg font-bold"
                        >
                            <span className="flex items-center gap-2 md:gap-2.5 shrink-0">
                                {item.icon}
                            </span>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
