import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section class="bg-center bg-no-repeat bg-background-image bg-neutral-700 bg-blend-multiply">
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Soundfield Recording Studios</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Soundfield Recording Studios has been in operation since 2002.  Our facility is located on six beautiful acres of township land isolated from noisy cities and traffic, overlooking the scenic village of New Concord, Ohio.</p>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">The comfortable facility is a 50' x 30' x 12'+ building with 6 isolation rooms, control room, main office, restroom, and storage. SRS was built with versatility and natural sound in mind. One feature of the studios are non-parallel walls with little sound absorption to avoid flutter echos, with custom RT60 reverberation times for each room.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link to='/contact'>
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-300 dark:focus:ring-neutral-900">
              Contact Us
              <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </Link>
          <Link to='/'>
            <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Learn more
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}