export default function LandingPage() {
  return (
    <>
      <nav className="bg-grey-950	 text-white py-3 px-4 flex items-center justify-between sticky top-0 z-50 bg-stone-800 shadow-md">
        <a className="font-bold text-xl tracking-tight" href="#Home">
          <img
            src="Artboard1-Cropped.png"
            alt="Cool Image"
            className=" h-12 object-cover rounded-lg shadow-md"
          />
        </a>
        <div className="flex items-center">
          <a
            className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700 font-bold font-raleway"
            href="#Home"
          >
            Home
          </a>

          <a
            className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700  font-bold font-raleway"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700 font-bold font-raleway"
            href="#courses"
          >
            Courses
          </a>
          <a
            className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700 font-bold"
            href="#reviews"
          >
            Testimonials
          </a>
        </div>
      </nav>

      <section
        className="bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat bg-white dark:bg-neutral-900"
        id="Home"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-zinc-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-900	"
            role="alert"
          >
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
              MOTTO
            </span>{" "}
            <span className="text-sm font-medium">IGNITION OF PASSION</span>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Design. Code. Dominate.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            At Birclix, we blend AI, artistry, and strategy to craft
            groundbreaking solutions—ranging from stunning designs to
            intelligent software systems. Let your vision spark a revolution.
          </p>

          <br />
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Learn more
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@Birclix1"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-red-600 dark:focus:ring-gray-800"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Visit Youtube
            </a>
          </div>
          <br></br>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 ">
              Socially we are here
            </span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
              <a
                href="https://www.instagram.com/birclix/"
                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <svg
                  className="h-11 w-auto text-current"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a
                href="linkedin/in/birclix"
                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="h-11"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.09 107 0 82.94 0 53.64 0 24.36 24.09.3 53.84.3S107.7 24.36 107.7 53.64c0 29.3-24.08 53.36-53.86 53.36zM447.9 448h-92.4V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.6V448h-92.4V148.9h88.8v40.8h1.3c12.4-23.5 42.6-48.3 87.7-48.3 93.8 0 111.1 61.7 111.1 141.9V448z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@Birclix1"
                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <svg
                  className="h-11"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.7 124.1c-6.3-23.8-25-42.5-48.8-48.8C456.5 64 288 64 288 64s-168.5 0-212.9 11.3c-23.8 6.3-42.5 25-48.8 48.8C16 168.5 16 256 16 256s0 87.5 11.3 131.9c6.3 23.8 25 42.5 48.8 48.8C119.5 448 288 448 288 448s168.5 0 212.9-11.3c23.8-6.3 42.5-25 48.8-48.8C560 343.5 560 256 560 256s0-87.5-10.3-131.9zM232 338.5v-165l142 82.5-142 82.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16" id="courses">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl text-center py-8 px-4">
          Our Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          <div className="rounded overflow-hidden shadow-lg">
            <div className="relative">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6QqQ6FJRoqzW4DN9R2AwIvS1oPDJuR9SNH5yrxcC2SKTJIw/viewform?usp=header">
                <img
                  className="w-full h-60 object-cover object-center"
                  src="ai.webp"
                  alt="Artificial Intelligence"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <div className="absolute bottom-0 left-0 bg-amber-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                2 Months
              </div>
            </div>
            <div className="px-6 py-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe6QqQ6FJRoqzW4DN9R2AwIvS1oPDJuR9SNH5yrxcC2SKTJIw/viewform?usp=header"
                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                AI Engineer Bootcamp
              </a>
              <p className="text-gray-500 text-sm">
                Python to Production-Ready AI Systems (Python, Machine Learning,
                NLP, Neural Networks & More)
              </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-slate-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6QqQ6FJRoqzW4DN9R2AwIvS1oPDJuR9SNH5yrxcC2SKTJIw/viewform?usp=header">
                  Explore
                </a>
              </button>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-lg">
            <div className="relative">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnDZTnt8Jgn2BXWWPMsXFe-H7U6psZpE9OpDAOrcDfsAKLxw/viewform?usp=header">
                <img
                  className="w-full h-60 object-cover object-center"
                  src="garphic.webp"
                  alt="Graphic design"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <div className="absolute bottom-0 left-0 bg-amber-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                1.5 Months
              </div>
            </div>
            <div className="px-6 py-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfnDZTnt8Jgn2BXWWPMsXFe-H7U6psZpE9OpDAOrcDfsAKLxw/viewform?usp=header"
                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                Visual Design Bootcamp
              </a>
              <p className="text-gray-500 text-sm">
                Unlock Your Creative Potential with Photoshop, Illustrator,
                Canva & InDesign
              </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-slate-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnDZTnt8Jgn2BXWWPMsXFe-H7U6psZpE9OpDAOrcDfsAKLxw/viewform?usp=header">
                  Explore
                </a>
              </button>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <div className="relative">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScfUb8ze--pnknzeTZ4SbqC2YUV_9AxCZV-3T7BTxMJSo0UUw/viewform?usp=header">
                <img
                  className="w-full h-60 object-cover object-center"
                  src="uiux.webp"
                  alt="uiux"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <div className="absolute bottom-0 left-0 bg-amber-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                1 Months
              </div>
            </div>
            <div className="px-6 py-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScfUb8ze--pnknzeTZ4SbqC2YUV_9AxCZV-3T7BTxMJSo0UUw/viewform?usp=header"
                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                UI/UX Design Mastery
              </a>
              <p className="text-gray-500 text-sm">
                Figma for Web & App Design + Design Theory, Wireframing &
                Prototyping
              </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-slate-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScfUb8ze--pnknzeTZ4SbqC2YUV_9AxCZV-3T7BTxMJSo0UUw/viewform?usp=header">
                  Explore
                </a>
              </button>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <div className="relative">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnDZTnt8Jgn2BXWWPMsXFe-H7U6psZpE9OpDAOrcDfsAKLxw/viewform?usp=header">
                <img
                  className="w-full h-60 object-cover object-center"
                  src="photoshop.jpg"
                  alt="Artificial Intelligence"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <div className="absolute bottom-0 left-0 bg-amber-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                0.5 Months
              </div>
            </div>
            <div className="px-6 py-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfnDZTnt8Jgn2BXWWPMsXFe-H7U6psZpE9OpDAOrcDfsAKLxw/viewform?usp=header"
                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                Adobe Photoshop Mastery
              </a>
              <p className="text-gray-500 text-sm">
                From Beginner to Pro in Digital Imaging & Design. Design
                confidently using professional techniques and real-world
                workflows.
              </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-slate-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnDZTnt8Jgn2BXWWPMsXFe-H7U6psZpE9OpDAOrcDfsAKLxw/viewform?usp=header">
                  Explore
                </a>
              </button>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <div className="relative">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnDZTnt8Jgn2BXWWPMsXFe-H7U6psZpE9OpDAOrcDfsAKLxw/viewform?usp=header">
                <img
                  className="w-full h-60 object-cover object-center"
                  src="illustrator.webp"
                  alt="Artificial Intelligence"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <div className="absolute bottom-0 left-0 bg-amber-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                0.5 Months
              </div>
            </div>
            <div className="px-6 py-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfnDZTnt8Jgn2BXWWPMsXFe-H7U6psZpE9OpDAOrcDfsAKLxw/viewform?usp=header"
                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                Adobe Illustrator Mastery
              </a>
              <p className="text-gray-500 text-sm">
                Learn Logo Design, Icons & Vector Graphics. Master Pen Tool,
                Shapes, Typography & Real-World Design
              </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-slate-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnDZTnt8Jgn2BXWWPMsXFe-H7U6psZpE9OpDAOrcDfsAKLxw/viewform?usp=header">
                  Explore
                </a>
              </button>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <div className="relative">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScfUb8ze--pnknzeTZ4SbqC2YUV_9AxCZV-3T7BTxMJSo0UUw/viewform?usp=header">
                <img
                  className="w-full h-60 object-cover object-center"
                  src="figma.jpg"
                  alt="Artificial Intelligence"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <div className="absolute bottom-0 left-0 bg-amber-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                1 Months
              </div>
            </div>
            <div className="px-6 py-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScfUb8ze--pnknzeTZ4SbqC2YUV_9AxCZV-3T7BTxMJSo0UUw/viewform?usp=header"
                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                Figma Masterclass
              </a>
              <p className="text-gray-500 text-sm">
                Design Real. Design Fast. Design Smart — Learn Figma from Zero
                to Hero
              </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-slate-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScfUb8ze--pnknzeTZ4SbqC2YUV_9AxCZV-3T7BTxMJSo0UUw/viewform?usp=header">
                  Explore
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-extrabold text-stone-50 tracking-tight sm:text-5xl text-center pt-10 px-4  bg-zinc-900">
        Our Services
      </h1>

      <ul
        id="services"
        className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 py-8 bg-zinc-900"
      >
        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div className="order-1 sm:ml-6 xl:ml-0  ">
            <h3 className="mb-1 text-stone-50 font-semibold">
              <span className="mb-1 block text-sm leading-6 text-indigo-500">
                Code
              </span>
              AI-Driven Design. Intelligent Software. Limitless Creativity.{" "}
            </h3>
            <div className="prose prose-slate prose-sm  text-slate-400">
              <p>
                We fuse the power of Generative AI, expert software development,
                and bold graphic & web design to build unforgettable digital
                experiences. From concept to code—we bring passion to every
                pixel.
              </p>
            </div>
            <a
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
              href="tel:+92388123733"
            >
              Let’s Build the Future Together
              <svg
                className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                width="3"
                height="6"
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M0 0L3 3L0 6"></path>
              </svg>
            </a>
          </div>
          <img
            src="aigirl.webp"
            alt=""
            className="mb-6 shadow-md rounded-lg bg-slate-50 h-60 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full object-cover object-center"
          />
        </li>
        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-stone-50 font-semibold">
              <span className="mb-1 block text-sm leading-6 text-purple-500">
                Dominate
              </span>
              Web Design that Feels Alive.{" "}
            </h3>
            <div className="prose prose-slate prose-sm text-slate-400">
              <p>
                Your website isn’t just a page—it’s your brand’s digital soul.
                At Birclix, we design immersive, responsive, and
                performance-optimized websites that wow users and work like
                magic across all devices.
              </p>
            </div>
            <a
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
              href="tel:+92388123733"
            >
              Let’s Design Something Unforgettable
              <svg
                className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                width="3"
                height="6"
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M0 0L3 3L0 6"></path>
              </svg>
            </a>
          </div>
          <img
            src="Frame 3.png"
            alt=""
            className="mb-6 shadow-md rounded-lg bg-slate-50 h-60 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full object-cover object-center"
          />
        </li>
        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-stone-50 font-semibold">
              <span className="mb-1 block text-sm leading-6 text-cyan-500">
                Design
              </span>
              Designs That Speak. Brands That Roar.
            </h3>
            <div className="prose prose-slate prose-sm text-slate-400">
              <p>
                We don’t just design — we translate emotions into visuals. From
                logos and illustrations to full brand systems, our graphic
                design turns ideas into iconic statements.
              </p>
            </div>
            <a
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
              href="tel:+92388123733"
            >
              Get Custom Graphics That Convert
              <svg
                className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                width="3"
                height="6"
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M0 0L3 3L0 6"></path>
              </svg>
            </a>
          </div>
          <img
            src="vector.webp"
            alt=""
            className="mb-6 shadow-md rounded-lg bg-slate-50 h-60 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full object-cover object-center"
          />
        </li>

        <br />
        <br />
        <br />
      </ul>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
          Your Brand Deserves More Than a_
          <span className="border-b border-dotted border-slate-300">
            Template
          </span>
        </p>

        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          <span className="inline-block">
            Let’s
            <span className="relative whitespace-nowrap text-blue-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="relative">Design</span>
            </span>
          </span>
          <span className="inline-block">
            Something That Stands the Test of Time
          </span>
        </h1>

        <p className="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
          <span className="inline-block">
            Blending creative storytelling with razor-sharp design to shape
            visuals that
          </span>
          <span className="inline-block">
            feel alive, authentic, and unforgettable..
          </span>
        </p>

        <div className="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
          <a
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 animate-fade-in-left"
            href="#"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-3 w-3 flex-none"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.824 7.287c.008 0 .004 0 0 0zm-2.8-1.4c.006 0 .003 0 0 0zm16.754 2.161c-.505-1.215-1.53-2.528-2.333-2.943.654 1.283 1.033 2.57 1.177 3.53l.002.02c-1.314-3.278-3.544-4.6-5.366-7.477-.091-.147-.184-.292-.273-.446a3.545 3.545 0 01-.13-.24 2.118 2.118 0 01-.172-.46.03.03 0 00-.027-.03.038.038 0 00-.021 0l-.006.001a.037.037 0 00-.01.005L15.624 0c-2.585 1.515-3.657 4.168-3.932 5.856a6.197 6.197 0 00-2.305.587.297.297 0 00-.147.37c.057.162.24.24.396.17a5.622 5.622 0 012.008-.523l.067-.005a5.847 5.847 0 011.957.222l.095.03a5.816 5.816 0 01.616.228c.08.036.16.073.238.112l.107.055a5.835 5.835 0 01.368.211 5.953 5.953 0 012.034 2.104c-.62-.437-1.733-.868-2.803-.681 4.183 2.09 3.06 9.292-2.737 9.02a5.164 5.164 0 01-1.513-.292 4.42 4.42 0 01-.538-.232c-1.42-.735-2.593-2.121-2.74-3.806 0 0 .537-2 3.845-2 .357 0 1.38-.998 1.398-1.287-.005-.095-2.029-.9-2.817-1.677-.422-.416-.622-.616-.8-.767a3.47 3.47 0 00-.301-.227 5.388 5.388 0 01-.032-2.842c-1.195.544-2.124 1.403-2.8 2.163h-.006c-.46-.584-.428-2.51-.402-2.913-.006-.025-.343.176-.389.206-.406.29-.787.616-1.136.974-.397.403-.76.839-1.085 1.303a9.816 9.816 0 00-1.562 3.52c-.003.013-.11.487-.19 1.073-.013.09-.026.181-.037.272a7.8 7.8 0 00-.069.667l-.002.034-.023.387-.001.06C.386 18.795 5.593 24 12.016 24c5.752 0 10.527-4.176 11.463-9.661.02-.149.035-.298.052-.448.232-1.994-.025-4.09-.753-5.844z"></path>
            </svg>
            <span className="ml-3">
              <a href="tel:+92388123733">Call Us + 92 370 735 3730</a>
            </span>
          </a>
          <div
            className="relative flex flex-1 flex-col items-stretch sm:flex-none"
            data-headlessui-state=""
          ></div>
        </div>
      </div>

      <section className="pt-12 bg-slate-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
              Build Smarter. Talk Better. Automate Everything.
            </p>
            <h1 className="max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter">
              From intelligent chatbots to tailored GenAI models, Birclix turns
              your workflows into high-performance, AI-driven engines of growth.
              Powered by the latest in natural language processing, machine
              learning, and transformer architecture, we bring the future of
              human-computer interaction right to your fingertips.
            </h1>
            <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <a
                href="#"
                title=""
                className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                <a href="tel:+92388123733">Call + 92 370 735 3730</a>
              </a>
            </div>
          </div>
        </div>
        <br /> <br /> <br />
      </section>

      <br />
      <br />
      <br />
      <div className="py-5 px-5 dark:bg-zinc-900" id="reviews">
        <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
          <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
            Testimonials
          </div>
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            Here's what our customers said
          </h2>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            Real voices from real people who experienced the impact of our
            design magic.
          </p>
        </div>
        <div className="container p-6 mx-auto mb-10 xl:px-0">
          <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            <div className="lg:col-span-2 xl:col-auto">
              <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-900 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                <p className="text-2xl leading-normal dark:text-gray-300">
                  The app they designed was a complete{" "}
                  <mark className="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                    game-changer
                  </mark>{" "}
                  for our business. Our users love the intuitive interface, and
                  engagement has skyrocketed since launch.
                </p>
                <div className="flex items-center mt-8 space-x-3">
                  <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                    <img alt="client" src="imagea.png" loading="lazy" />
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-200">
                      Jamsheed Kareem
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Client of App design
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-900 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                <p className="text-2xl leading-normal dark:text-gray-300">
                  Working with their team completely transformed{" "}
                  <mark className="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                    our online presence.
                  </mark>{" "}
                  The design was sleek, responsive, and exactly what our brand
                  needed to stand out in the digital crowd
                </p>
                <div className="flex items-center mt-8 space-x-3">
                  <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                    <img alt="Client" src="image1.png" />
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-200">
                      Layla Gül
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Client of Web design{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-900 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                <p className="text-2xl leading-normal dark:text-gray-300">
                  The AI chatbot completely transformed the way we engage with
                  our customers. From answering FAQs to handling{" "}
                  <mark className="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                    real-time queries,
                  </mark>{" "}
                  it worked flawlessly — 24/7
                </p>
                <div className="flex items-center mt-8 space-x-3">
                  <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                    <img
                      alt="client"
                      src="image14a.png"
                      className="object-cover w-full   rounded-lg shadow-md"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-200">
                      David Vokasio
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Client of Ai Chatbot
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        id="contact"
        className="px-6 py-10 text-center text-gray-500 bg-zinc-800"
      >
        <p>&copy; {new Date().getFullYear()} Birclix. All rights reserved.</p>
      </footer>
    </>
  );
}
