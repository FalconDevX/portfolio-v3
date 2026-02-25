"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function DarkWhiteToggle() {
    const { theme, setTheme } = useTheme()
    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="fixed top-4 right-4 cursor-pointer">
            {theme === "dark" ? <Moon /> : <Sun />}
        </button>
    )
}