class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class='sticky top-0 max-w-6xl mx-auto z-50 navigation'>
    <nav class='absolute md:top-4 w-full'>
      <div class='mx-3 flex justify-between md:items-center'>
        <a href=# class='flex pt-3 md:-pt-10 items-center'>
          <h1 class='text-2xl font-bold'>ViibS</h1>
        </a>

        <button onclick="handleMenu()" class='rounded outline-none absolute top-4 right-6 z-50 block text-3xl md:hidden cursor-pointer text-gray-900'>
          <i class="fas fa-bars"></i>
        </button>


        <div class='hidden md:flex md:items-center md:flex-row md:space-x-10 z-50'>
          <div class='flex justify-between items-center space-x-5'>
            <div class="flex items-center space-x-1">
              <i class="fas fa-th-large text-yellow-500"></i>
              <a href="index.html" class="text-white">Categories</a>
            </div>
            <div class="flex items-center space-x-1">
              <i class="far fa-calendar-alt text-yellow-500"></i> 
              <a href="index.html" class="text-white">Events</a>
            </div>
          </div>

          <div class="hidden md:flex flex-1 items-center relative">
            <i class="fas fa-search absolute top-2 left-2 text-gray-500"></i>
            <input class="h-8 w-full outline-none pl-8 pr-2 text-sm rounded-sm focus:outline-none text-gray-900" placeholder="Search" type="search" name="" id="">
          </div>

          <div class='flex justify-between items-center space-x-5'>
            <a href='index.html' class='text-white'>Register</a>
            <a href='index.html' class='px-4 py-1 rounded text-white grid place-items-center bg-yellow-500'>Login</a>
          </div>
        </div>

            <!-- {/* mobile */} -->
        <div class='mobile absolute w-9/12 right-0 -py-6 grid place-items-center text-gray-900 h-screen md:hidden'>
          <div class='flex flex-col space-y-4'>
            <div class='flex items-center space-x-1'>
              <i class="fas fa-th-large text-yellow-500"></i>
              <a href="index.html" class="">Categories</a>
            </div>
            <div class='flex items-center space-x-1'>
              <i class="far fa-calendar-alt text-yellow-500"></i> 
              <a href="index.html" class="">Events</a>
            </div>
            <div class='flex flex-col justify-between items-center space-y-4'>
              <a href='index.html' class=''>Register</a>
              <a href='index.html' class='px-4 py-1 rounded text-white grid place-items-center bg-yellow-500'>Login</a>
            </div>
          </div>
            <button class='grid place-items-center bg-pink-secondary w-full text-white-primary text-sm py-2 px-4 rounded-sm hover:opacity-90 transition duration-200'>Login</button>
          </div>
        </div>
      </div>
  </nav>
</header>
    `;
  }
}



customElements.define('nav-component', Navbar);