import '../App.css'
export default function Header() {
    return (
        <header class="bg-red-400 py-3 flex justify-center items-center">
            <img src="/globe.png" class="h-8 w-8 mx-2" alt='globe icon'></img>
            <h1 class="font-inter text-md text-white font-bold">my travel journal.</h1>
        </header>
    );
}