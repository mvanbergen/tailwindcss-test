import Link from "next/link"
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="flex sm:grid-cols-3 grid-cols-1 px-4 sm:px-6 lg:px-8">
        <div className="text-left ml-2 mt-2">
          
        </div>
        <div className="text-right text-sky-500 py-4 px-4 w-2/3">
          <p className="text-lg font-medium">3 SERVICES 1 FACTORY</p>
          <p><Link href="tel:262-694-3736">Call us today: 262-694-3736</Link></p>
  
        </div>
        
        <div className="text-right py-2 px-0">
          
        </div>

      </div>
    </>

  );
}

export default Header;