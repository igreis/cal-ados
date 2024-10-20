import logo from '../../assets/image-removebg-preview.png'

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-20 h-16 flex items-center bg-[#f4ff2b]">
            <a className="flex items-center justify-center" href="#">
                <img
                    src={logo}
                    alt="Calçados Logo"
                    className="h-14"
                />
            </a>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <a className="text-dm font-medium hover:underline underline-offset-4 text-[black]" href="#">
                    Home
                </a>
                <a className="text-dm font-medium hover:underline underline-offset-4 text-[black]" href="#novidades">
                    Novidades
                </a>
                <a className="text-dm font-medium hover:underline underline-offset-4 text-[black]" href="#adulto">
                    Adulto
                </a>
                <a className="text-dm font-medium hover:underline underline-offset-4 text-[black]" href="#infantil">
                    Infantil
                </a>
            </nav>
        </header>
    )
}

