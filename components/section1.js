import Newsletter from "./_child/newsletter";

export default function section1() {
  return (
    <div className="flex flex-col items-center my-6 xl:flex-row gap-x-12 xl:mb-12">
      <div className="pt-6">
        <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Welcome to our blockchain technology blog!
        </h1>
        <h2 className="text-lg prose text-gray-600 dark:text-gray-400">
          Here, we aim to provide you with the latest news and insights on theme
          ever-evolving world of blockchain and cryprocurrency. Join us on our
          journey to discover the potential of blockchain and stay up-to-date
          with the latest trends and advancements in this exciting field
        </h2>
      </div>
      <Newsletter></Newsletter>
    </div>
  );
}
