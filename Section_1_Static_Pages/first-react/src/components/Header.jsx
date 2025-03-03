import '../App.css'
import reactLogo from '../assets/react.svg'

export default function Header() {
  return (
    <header class="mb-4 pl-5 bg-slate-900 flex h-24">
        <nav class=" text-white flex h-full">
          <img src={reactLogo} width='60px' alt='React Logo' class="mx-4"></img>
          <span class="flex text-4xl align-middle text-cyan-400 font-bold items-center">ReactFacts</span>

        </nav>
    </header>
  )
}
