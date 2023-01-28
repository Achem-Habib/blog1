export default function section1() {
  return (
    <div class="flex flex-col items-center my-6 xl:flex-row gap-x-12 xl:mb-12">
      <div class="pt-6">
        <h1 class="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Welcome to our blockchain technology blog!
        </h1>
        <h2 class="text-lg prose text-gray-600 dark:text-gray-400">
          Here, we aim to provide you with the latest news and insights on theme
          ever-evolving world of blockchain and cryprocurrency. Join us on our
          journey to discover the potential of blockchain and stay up-to-date
          with the latest trends and advancements in this exciting field
        </h2>
      </div>
      <div class="flex items-center justify-center mx-2 my-12 w-96">
        <div class="flex items-center justify-center">
          <div class="p-6 bg-gray-100 dark:bg-gray-800 sm:px-14 sm:py-8">
            <div>
              <div class="pb-1 text-lg font-semibold text-gray-800 w-72 dark:text-gray-100">
                Stay updated, receive the latest post straight to your mailbox
              </div>
              <form class="flex flex-col">
                <div>
                  <label class="sr-only" for="email-input">
                    Email address
                  </label>
                  <input
                    autoComplete="email"
                    class="px-4 rounded-md w-72 dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary-600"
                    id="email-input"
                    name="email"
                    placeholder="Enter your email"
                    required=""
                    type="email"
                  />
                </div>
                <div class="mt-2 rounded-md shadow-sm">
                  <button
                    class="py-2 w-72 bg-primary-500 px-4 rounded-md font-medium text-white hover:bg-primary-700 dark:hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 dark:ring-offset-black"
                    type="submit"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
