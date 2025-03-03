export default function Header() {
    return (
        <header id='header' className="flex h-25 space-x-2 bg-white shadow-md items-center justify-center">
            <img id="logo-image" src='/chef.png' alt='chef-claude-logo' className="w-20"></img>
            <h1 id='brand-name' className="text-3xl font-inter">Chef Claude</h1>
        </header>
    )
}