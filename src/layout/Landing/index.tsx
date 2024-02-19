export default function Landing() {
  return (
    <main className="w-full">
      {/* <!-- start header --> */}
      <header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
        <div
          className="hidden lg:flex justify-between items-center py-2 border-b text-sm py-3"
          style={{ borderColor: 'rgba(255,255,255,.25)' }}
        >
          <div className="">
            <ul className="flex text-white">
              <li>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-current text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"></path>
                  </svg>

                  <span className="ml-2">1985 Kerry Way, Whittier, CA, USA</span>
                </div>
              </li>
              <li className="ml-6">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-current text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z"></path>
                  </svg>

                  <span className="ml-2">+1 562-789-1935</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="">
            <ul className="flex justify-end text-white">
              <li>
                <a href="#" target="_blank" title="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z"></path>
                  </svg>
                </a>
              </li>

              <li className="ml-6">
                <a href="#" target="_blank" title="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"></path>
                  </svg>
                </a>
              </li>

              <li className="ml-6">
                <a href="#" target="_blank" title="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z"></path>
                    <circle cx="11.994" cy="11.979" r="3.003"></circle>
                  </svg>
                </a>
              </li>

              <li className="ml-6">
                <a href="#" target="_blank" title="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404	c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814	c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763	C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between py-6">
          <div className="w-1/2 md:w-auto">
            <a className="text-white font-bold text-2xl" href="/dentalpro/">
              DentalPro
            </a>
          </div>

          <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>

          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div className="hidden md:block w-full md:w-auto" id="menu">
            <nav className="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
              <ul className="md:flex items-center">
                <li>
                  <a className="py-2 inline-block md:text-white md:hidden lg:block font-semibold" href="#">
                    About Us
                  </a>
                </li>
                <li className="md:ml-4">
                  <a className="py-2 inline-block md:text-white md:px-2 font-semibold" href="#">
                    Treatments
                  </a>
                </li>
                <li className="md:ml-4">
                  <a className="py-2 inline-block md:text-white md:px-2 font-semibold" href="#">
                    Testimonials
                  </a>
                </li>
                <li className="md:ml-4 md:hidden lg:block">
                  <a className="py-2 inline-block md:text-white md:px-2 font-semibold" href="#">
                    Blog
                  </a>
                </li>
                <li className="md:ml-4">
                  <a className="py-2 inline-block md:text-white md:px-2 font-semibold" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="md:ml-6 mt-3 md:mt-0">
                  <a
                    className="inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:bg-transparent md:text-white border border-white rounded"
                    href="/dentalpro/book-appointment"
                  >
                    Book Appointment
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {/* <!-- end header --> */}

      {/* <!-- start hero --> */}
      <div className="bg-gray-100">
        <section
          className="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
    items-center"
        >
          <div className="h-full absolute top-0 left-0 z-0">
            <img
              src="https://tailwindcss-templates.netlify.app/dentalpro/images/cover-bg.jpeg"
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
            <div>
              <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                A better life starts with a beautiful smile.
              </h1>
              <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">
                Welcome to the Dentist Office of Dr. Thomas Dooley, where trust and comfort are priorities.
              </p>
              <a href="#" className="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold">
                Book Appointment
              </a>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- end hero --> */}

      {/* <!-- start about --> */}
      <section className="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32">
        <div className="flex flex-col md:flex-row lg:-mx-8">
          <div className="w-full lg:w-1/2 lg:px-8">
            <h6 className="text-sm uppercase font-semibold tracking-widest">Our clinic</h6>
            <h2 className="text-3xl leading-tight font-bold mt-4">
              Welcome to the Dentist Office of Dr. Thomas Dooley
            </h2>
            <p className="text-lg mt-4">Excellence in Dentistry in the Heart of NY</p>
            <p className="mt-2 leading-relaxed">
              Donec convallis sollicitudin facilisis. Integer nisl ligula, accumsan non tincidunt ac, imperdiet in enim.
              Donec efficitur ullamcorper metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a, faucibus mi.
            </p>
          </div>

          <div className="w-full lg:w-1/2 lg:px-8">
            <div className="flex">
              <div>
                <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
              </div>
              <div className="ml-8">
                <h4 className="text-xl font-bold">Everything You Need Under One Roof</h4>
                <p className="mt-2 leading-relaxed">
                  Our comprehensive services allow you to receive all needed dental care right here in our state-of-art
                  office – from dental cleanings and fillings to dental implants and extractions.
                </p>
              </div>
            </div>

            <div className="flex mt-8">
              <div>
                <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
              </div>
              <div className="ml-8">
                <h4 className="text-xl font-bold">Our Patient-Focused Approach</h4>
                <p className="mt-2 leading-relaxed">
                  Your treatment plan will perfectly match your needs, lifestyle, and goals. Even if it’s been years
                  since you last visited the dentist, we can help. Our comfortable office, compassionate team, and
                  minimally-invasive treatments will help you feel completely at ease.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-24 text-center md:-mx-4">
          <div className="bg-white rounded-lg shadow-lg p-8 md:mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-6" width="77" height="80" viewBox="0 0 77 80">
              <path d="M51 0a26 26 0 1 1-26 26A26 26 0 0 1 51 0z" fill="#bee3f8"></path>
              <path
                d="M18.151 80L15.2 77.577c-.405-.332-9.919-8.389-9.919-30.638 0-1.361-.746-2.485-1.778-4.042A17.122 17.122 0 0 1 0 32.542a14.367 14.367 0 0 1 4.356-10.315A14.564 14.564 0 0 1 14.616 18h.3a14.593 14.593 0 0 1 9.649 3.9.828.828 0 0 0 1.121 0 14.588 14.588 0 0 1 9.647-3.894h.3A14.564 14.564 0 0 1 45.9 22.227a14.363 14.363 0 0 1 4.356 10.314 16.084 16.084 0 0 1-3.606 10.4c-1.074 1.493-1.681 2.4-1.681 3.6a69.56 69.56 0 0 1-.125 4.163 14.746 14.746 0 0 1 7.98 5.134A14.523 14.523 0 0 1 56 64.96a14.652 14.652 0 1 1-29.3 0 14.532 14.532 0 0 1 1.4-6.253c-1.624-2.965-2.871-3.195-3.215-3.195-1.087 0-2.87 2.007-4.4 6.492a47.01 47.01 0 0 0-2.326 14.176V80zm23.2-26.1A11.061 11.061 0 1 0 52.39 64.96 11.064 11.064 0 0 0 41.348 53.9zM14.634 21.62a11 11 0 0 0-7.751 3.188 10.78 10.78 0 0 0-3.273 7.734c0 3.968 1.475 6.2 2.9 8.351 1.171 1.77 2.382 3.6 2.382 6.046 0 10.668 2.348 17.68 4.318 21.684a28.438 28.438 0 0 0 1.59 2.826 50.021 50.021 0 0 1 2.26-10.617c2-5.846 4.7-8.936 7.819-8.936 1.342 0 3.366.6 5.386 3.472a14.646 14.646 0 0 1 10.979-5.082c.07-1.241.106-2.5.106-3.743 0-2.43 1.2-4.1 2.361-5.709a12.463 12.463 0 0 0 2.926-8.293 10.779 10.779 0 0 0-3.273-7.733 10.986 10.986 0 0 0-7.736-3.19h-.229a10.992 10.992 0 0 0-7.266 2.932 4.45 4.45 0 0 1-6.025 0 10.988 10.988 0 0 0-7.265-2.932c-.067.002-.137.002-.209.002zm26.65 51.232l-6.084-6.14a4.522 4.522 0 0 1 0-6.381 4.5 4.5 0 0 1 6.1-.252 4.512 4.512 0 0 1 6.1 6.638l-6.123 6.134zM38.39 62.625a.892.892 0 0 0-.635.263.9.9 0 0 0 0 1.272l3.537 3.569 3.563-3.569a.9.9 0 0 0 0-1.272.9.9 0 0 0-1.269 0l-2.281 2.284-2.28-2.284a.9.9 0 0 0-.635-.263z"
                fill="#4299e1"
              ></path>
            </svg>

            <h4 className="text-xl font-bold">Teeth Whitening</h4>
            <p className="mt-1">Let us show you how our experience.</p>
            <a href="#" className="block mt-4">
              Read More
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-6" width="85" height="80" viewBox="0 0 85 80">
              <path d="M59 0a26 26 0 1 1-26 26A26 26 0 0 1 59 0z" fill="#bee3f8"></path>
              <path
                d="M36 80a163.974 163.974 0 0 1-34.335-3.612L0 76.031V60.4a.159.159 0 0 0 0-.022v-.031V54.806v-.118l.036-2.052h71.925L72 54.688v21.345l-1.665.355A163.974 163.974 0 0 1 36 80zM4.224 67.124v5.53A160.1 160.1 0 0 0 36 75.823a160.115 160.115 0 0 0 31.774-3.169v-5.531a7.732 7.732 0 0 1-3.536.848 7.828 7.828 0 0 1-5.647-2.42 7.73 7.73 0 0 1-5.648 2.42A7.828 7.828 0 0 1 47.3 65.55a7.73 7.73 0 0 1-5.648 2.42A7.828 7.828 0 0 1 36 65.55a7.8 7.8 0 0 1-11.3 0 7.8 7.8 0 0 1-11.3 0 7.8 7.8 0 0 1-9.184 1.573zM60.7 56.813V60.3a3.536 3.536 0 0 0 7.072 0v-3.487zm-11.3 0V60.3a3.536 3.536 0 0 0 7.071 0v-3.487zm-11.3 0V60.3a3.536 3.536 0 0 0 7.071 0v-3.487zm-11.3 0V60.3a3.536 3.536 0 0 0 7.071 0v-3.487zm-11.3 0V60.3a3.536 3.536 0 0 0 7.071 0v-3.487zm-11.3 0V60.3a3.536 3.536 0 0 0 7.071 0v-3.487zM71.961 45.33H.039L0 43.279v-5.608-.052-15.684l1.665-.357a165.051 165.051 0 0 1 68.67 0l1.665.357v15.711a.073.073 0 0 0 0 .014v5.616l-.037 2.051zM64.24 34.174a3.521 3.521 0 0 0-3.536 3.5v3.482h7.072v-3.485a3.521 3.521 0 0 0-3.536-3.497zm-11.3 0a3.521 3.521 0 0 0-3.536 3.5v3.482h7.076v-3.485a3.521 3.521 0 0 0-3.536-3.497zm-11.3 0a3.521 3.521 0 0 0-3.536 3.5v3.482h7.072v-3.485a3.521 3.521 0 0 0-3.528-3.497zm-11.3 0a3.521 3.521 0 0 0-3.536 3.5v3.482h7.071v-3.485a3.52 3.52 0 0 0-3.523-3.497zm-11.3 0a3.521 3.521 0 0 0-3.536 3.5v3.482h7.07v-3.485a3.52 3.52 0 0 0-3.518-3.497zm-11.3 0a3.521 3.521 0 0 0-3.536 3.5v3.482H11.3v-3.485a3.52 3.52 0 0 0-3.539-3.497zM52.944 30a7.831 7.831 0 0 1 5.648 2.419 7.807 7.807 0 0 1 9.185-1.573v-5.532a160.805 160.805 0 0 0-63.551 0v5.53a7.8 7.8 0 0 1 9.184 1.572A7.832 7.832 0 0 1 19.056 30a7.731 7.731 0 0 1 5.644 2.416A7.832 7.832 0 0 1 30.352 30 7.731 7.731 0 0 1 36 32.416a7.8 7.8 0 0 1 11.295 0A7.836 7.836 0 0 1 52.944 30z"
                fill="#4299e1"
              ></path>
            </svg>

            <h4 className="text-xl font-bold">Oral Surgery</h4>
            <p className="mt-1">Let us show you how our experience.</p>
            <a href="#" className="block mt-4">
              Read More
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-6" width="65" height="80" viewBox="0 0 65 80">
              <path d="M39 0a26 26 0 1 1-26 26A26 26 0 0 1 39 0z" fill="#bee3f8"></path>
              <path
                d="M24.572 80a5.474 5.474 0 0 1-5.447-5.486c0-5.663-.011-10.083-.026-14.329l-.006-1.825h3.659V32.767a7.441 7.441 0 1 1 3.614 0v25.586h3.653v16.154A5.477 5.477 0 0 1 24.572 80zm-1.837-10.719v5.232a1.834 1.834 0 1 0 3.667-.005v-5.226zm3.67-7.286H22.72v.647l.006 3h3.677v-3.649zm-1.846-40.354a3.855 3.855 0 1 0 3.827 3.859 3.845 3.845 0 0 0-3.827-3.859zM7.453 80a5.474 5.474 0 0 1-5.447-5.486L2 58.36h3.636V32.768A7.5 7.5 0 0 1 7.44 18v3.641a3.791 3.791 0 0 0-2.7 1.131 3.859 3.859 0 0 0 2.705 6.578h1.807v29h3.615v1.61c.022 7.122.032 12.017.031 14.549A5.477 5.477 0 0 1 7.453 80zM5.618 69.281v5.232a1.834 1.834 0 1 0 3.667-.005c0-1.388 0-3.244-.007-5.226zm3.643-7.286L5.614 62v3.642H9.27c-.002-1.305-.006-2.6-.009-3.647z"
                fill="#4299e1"
              ></path>
            </svg>

            <h4 className="text-xl font-bold">Painless Dentistry</h4>
            <p className="mt-1">Let us show you how our experience.</p>
            <a href="#" className="block mt-4">
              Read More
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-6" width="82" height="80" viewBox="0 0 82 80">
              <path d="M56 0a26 26 0 1 1-26 26A26 26 0 0 1 56 0z" fill="#bee3f8"></path>
              <path
                d="M38.7 80a7.608 7.608 0 0 1-7.6-6.99 7.288 7.288 0 0 1-2.96-2.712c-.845-1.173-1.155-1.49-1.726-1.49s-.882.317-1.726 1.489c-.888 1.231-2.229 3.092-4.876 3.092s-3.988-1.859-4.875-3.089c-.852-1.18-1.162-1.5-1.737-1.5s-.881.317-1.725 1.489c-.888 1.231-2.229 3.092-4.876 3.092s-3.987-1.859-4.874-3.089C.881 69.12.571 68.8 0 68.8v-3.816c2.647 0 3.988 1.86 4.875 3.091.845 1.172 1.155 1.49 1.726 1.49s.882-.317 1.725-1.489c.888-1.231 2.229-3.092 4.876-3.092s3.989 1.86 4.876 3.091c.844 1.172 1.154 1.49 1.726 1.49s.881-.317 1.725-1.489c.888-1.231 2.229-3.092 4.877-3.092 2.3 0 3.6 1.349 4.668 2.806V40.643l2.152-4.615h-4.947V18h21.668l9.225 4.4v2.61H66v3.818h-6.828V31.1L50 36.029h-6.167l2.493 4.55v5.446h2.49v3.817h-2.49v2.673h2.49v3.818h-2.49v16.14A7.585 7.585 0 0 1 38.7 80zm-3.757-37.03v29.5a3.758 3.758 0 0 0 7.515 0v-29.5zm2.542-6.943l-1.457 3.125h5.121l-1.712-3.125zm-5.339-14.209V32.21h16.866l6.288-3.382V24.8l-6.238-2.982z"
                fill="#4299e1"
              ></path>
            </svg>

            <h4 className="text-xl font-bold">Periodontics</h4>
            <p className="mt-1">Let us show you how our experience.</p>
            <a href="#" className="block mt-4">
              Read More
            </a>
          </div>
        </div>
      </section>
      {/* <!-- end about --> */}

      {/* <!-- start testimonials --> */}
      <section className="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32">
        <div className="flex flex-col md:flex-row lg:-mx-8">
          <div className="w-full lg:w-1/2 lg:px-8">
            <h6 className="text-sm uppercase font-semibold tracking-widest">Patient testimonials</h6>
            <h2 className="text-3xl leading-tight font-bold mt-4">Why choose the Mesothelioma Center?</h2>
            <p className="mt-2 leading-relaxed">
              Aenean ut tellus tellus. Suspendisse potenti. Nullam tincidunt lacus tellus, sed aliquam est vehicula a.
              Pellentesque consectetur condimentum nulla, eleifend condimentum purus vehicula in. Donec convallis
              sollicitudin facilisis. Integer nisl ligula, accumsan non tincidunt ac, imperdiet in enim. Donec efficitur
              ullamcorper metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a, faucibus mi.
            </p>
          </div>

          <div className="w-full lg:w-1/2 lg:px-8">
            <div className="bg-gray-400 w-full h-72 rounded-lg"></div>

            <p className="italic text-sm mt-2 text-right">Aenean ante nisi, gravida non mattis semper.</p>
          </div>
        </div>
      </section>
      {/* <!-- end testimonials --> */}

      {/* <!-- start cta --> */}
      <section className="relative bg-blue-teal-gradient px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-8">
        <div className="flex items-center justify-center">
          <h2 className="text-xl font-bold text-white">Get in touch with us today! Call us on: +1 562-789-1935</h2>
          <a href="#" className="px-8 py-4 bg-white text-blue-600 rounded inline-block font-semibold ml-8">
            Book Appointment
          </a>
        </div>
      </section>
      {/* <!-- end cta --> */}

      {/* <!-- start footer --> */}
      <footer className="relative bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-24">
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
            <h3 className="font-bold text-2xl">DentalPro</h3>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>

            <form className="flex items-center mt-6">
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Subscribe for our Newsletter
                </label>
                <div className="relative">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="email"
                    placeholder="Enter Your Email Address"
                  />

                  <button
                    type="submit"
                    className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 text-sm font-bold rounded absolute top-0 right-0 my-2 mr-2"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
            <h5 className="uppercase tracking-wider font-semibold">Treatments</h5>
            <ul className="mt-4">
              <li className="mt-2">
                <a href="#" title="" className="opacity-75 hover:opacity-100">
                  General Dentistry
                </a>
              </li>
              <li className="mt-2">
                <a href="#" title="" className="opacity-75 hover:opacity-100">
                  Cosmetic Dentistry
                </a>
              </li>
              <li className="mt-2">
                <a href="#" title="" className="opacity-75 hover:opacity-100">
                  Oral Health
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
            <h5 className="uppercase tracking-wider font-semibold">Contact Details</h5>
            <ul className="mt-4">
              <li>
                <a href="#" title="" className="block flex items-center opacity-75 hover:opacity-100">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"></path>
                    </svg>
                  </span>
                  <span className="ml-3">1985 Kerry Way, Whittier, CA, USA</span>
                </a>
              </li>
              <li className="mt-4">
                <a href="#" title="" className="block flex items-center opacity-75 hover:opacity-100">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path>
                      <path d="M13 7L11 7 11 13 17 13 17 11 13 11z"></path>
                    </svg>
                  </span>
                  <span className="ml-3">
                    Mon - Fri: 9:00 - 19:00
                    <br />
                    Closed on Weekends
                  </span>
                </a>
              </li>
              <li className="mt-4">
                <a href="#" title="" className="block flex items-center opacity-75 hover:opacity-100">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z"></path>
                    </svg>
                  </span>
                  <span className="ml-3">+1 562-789-1935</span>
                </a>
              </li>
              <li className="mt-4">
                <a href="#" title="" className="block flex items-center opacity-75 hover:opacity-100">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z"></path>
                    </svg>
                  </span>
                  <span className="ml-3">dentalpro@example.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
            <h5 className="uppercase tracking-wider font-semibold">We're Social</h5>
            <ul className="mt-4 flex">
              <li>
                <a href="#" target="_blank" title="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z"></path>
                  </svg>
                </a>
              </li>

              <li className="ml-6">
                <a href="#" target="_blank" title="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"></path>
                  </svg>
                </a>
              </li>

              <li className="ml-6">
                <a href="#" target="_blank" title="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z"></path>
                    <circle cx="11.994" cy="11.979" r="3.003"></circle>
                  </svg>
                </a>
              </li>

              <li className="ml-6">
                <a href="#" target="_blank" title="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404	c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814	c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763	C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z"></path>
                  </svg>
                </a>
              </li>
            </ul>

            <p className="text-sm text-gray-400 mt-12">
              © 2018 ProDentists. <br className="hidden lg:block" />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* <!-- end footer --> */}
    </main>
  );
}
