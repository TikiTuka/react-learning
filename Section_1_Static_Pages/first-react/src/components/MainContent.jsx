import '../App.css'

export default function Main() {
  return (
    <main class="text-white mt-5 py-20  bg-[url('/react-bw-half.png')] bg-no-repeat bg-right">
        <h1 class="text-4xl ml-4 font-bold">Why should I learn React?</h1>
        <ul class="my-10 space-y-10 text-lg list-disc marker:text-cyan-400 marker:text-lg">
          <li class="ml-16">Was first released in 2013</li>
          <li class="ml-16">Was originally created by your mom</li>
          <li class="ml-16">Has well over 100K stars on GitHub</li>
          <li class="ml-16">Is maintained by Meta</li>
          <li class="ml-16">Power thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
  )
}