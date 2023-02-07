export default function Footer() {
  return (
    <footer class="bg-gray-900 text-white p-12">
      <div class="container mx-auto flex flex-wrap">
        <div class="w-full md:w-1/3 text-center md:text-left">
          <h5 class="font-medium">About Us</h5>
          <p class="py-4">
            Hire Helping Hand is a marketplace for freelancers and clients to
            connect and collaborate on projects. We are dedicated to making the
            hiring process as seamless as possible for both parties.
          </p>
        </div>
        <div class="w-full md:w-1/3 text-center md:text-left">
          <h5 class="font-medium">Quick Links</h5>
          <ul class="list-unstyled py-4">
            <li>
              <a class="text-white hover:text-gray-400" href="#">
                How it Works
              </a>
            </li>
            <li>
              <a class="text-white hover:text-gray-400" href="#">
                Browse Jobs
              </a>
            </li>
            <li>
              <a class="text-white hover:text-gray-400" href="#">
                Post a Job
              </a>
            </li>
            <li>
              <a class="text-white hover:text-gray-400" href="#">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/3 text-center md:text-left">
          <h5 class="font-medium">Contact Us</h5>
          <ul class="list-unstyled py-4">
            <li>
              <a class="text-white hover:text-gray-400" href="#">
                support@yourplatform.com
              </a>
            </li>
            <li>
              <a class="text-white hover:text-gray-400" href="#">
                (123) 456-7890
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="container mx-auto text-center py-4">
        <p class="text-xs text-white">
          &copy; 2021 Your Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
