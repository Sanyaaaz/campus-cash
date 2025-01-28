import type React from "react"

const Button = ({
    title,
    handleClick,
    otherClasses,
}: {
    title: string
    handleClick?: () => void
    otherClasses?: string
}) => {
    return (
        <button className="relative inline-flex h-12 overflow-hidden rounded-3xl p-[1px] focus:outline-none md:mt-2">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] p-4 bg-[conic-gradient(from_90deg_at_50%_50%,#c1ff72_0%,#93c658_50%,#c1ff72_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center px-7 hover:text-white rounded-3xl text-sm font-medium bg-[#c1ff72] group-hover:bg-slate-950 backdrop-blur-3xl gap-2 ${otherClasses}`}>
                {title}
            </span>
        </button>
    )
}

export default Button