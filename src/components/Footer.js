export default function Footer() {
    return (
        <footer class="bg-white dark:bg-neutral-900">
            <div class="px-4 py-6 bg-neutral-100 dark:bg-neutral-800 md:flex md:items-center md:justify-between">
                <span class="text-sm text-neutral-500 dark:text-neutral-300 sm:text-center">© 2023 <a href="#">Soundfield Recording™</a>. All Rights Reserved.
                </span>
                <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                    <a href="https://www.facebook.com/soundfield1/" target="_blank" class="text-neutral-400 hover:text-neutral-900 dark:hover:text-white grid-cols-2">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                        <span class="sr-only">Facebook page</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}