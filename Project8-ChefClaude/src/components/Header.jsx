import header_image from '../assets/chef-claude-icon.png'

export function Header() {
    return (
        <header className="flex flex-row justify-center items-center p-4 bg-white shadow-sm">
            <img src={header_image} alt="header-image" className="w-12 h-auto mr-2" />
            <h2 className="text-2xl font-bold">Chef Claude</h2>
        </header>
    )
}




