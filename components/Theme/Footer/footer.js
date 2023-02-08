export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-12">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h5 className="font-medium">About Us</h5>
          <p className="py-4">
            Hire Helping Hand is a marketplace for freelancers and clients to
            connect and collaborate on projects. We are dedicated to making the
            hiring process as seamless as possible for both parties.
          </p>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h5 className="font-medium">Quick Links</h5>
          <ul className="list-unstyled py-4">
            <li>
              <a className="text-white hover:text-gray-400" href="#">
                How it Works
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-400" href="#">
                Browse Jobs
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-400" href="#">
                Post a Job
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-400" href="#">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h5 className="font-medium">Contact Us</h5>
          <ul className="list-unstyled py-4">
            <li>
              <a className="text-white hover:text-gray-400" href="#">
                support@yourplatform.com
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-400" href="#">
                (123) 456-7890
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center py-4">
        <p className="text-xs text-white">
          &copy; 2021 Your Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
