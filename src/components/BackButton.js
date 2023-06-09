import { Link } from 'react-router-dom'

export default function BackButton() {
  return (
    <section>
      <Link to='../..'>
        <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-300 dark:focus:ring-neutral-900">
          <svg aria-hidden="true" class="mr-2 -ml-1 w-4 h-4 -scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          Back        
        </a>
      </Link>
    </section>
  )
}