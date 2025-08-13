import { NavLink } from "react-router";

export function Header() {
    return (
        <header className="sticky top-0 bg-white shadow-md z-50 w-full h-20 opacity-50 p-4">

            <nav className="flex justify-between items-center h-full">
                {routes.map((content) => (
                    <NavLink key={content.to} to={content.to}>
                        {
                            ({ isActive }) => (
                                <span className={isActive ? "text-blue-500 underline" : "text-gray-500"}>
                                    {content.label}
                                </span>
                            )
                        }
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}

const routes = [
    {
        to: "/",
        label: "Home"
    },
    {
        to: "/lista-presentes",
        label: "Lista de Presentes"
    },
    {
        to: "/informacoes",
        label: "Informações"
    },
    {
        to: "/rsvp",
        label: "RSVP"
    }
]
