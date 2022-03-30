import Image from "next/image";
import { MenuIcon, ShoppingCartIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex items-center bg-white p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/BenveLetraSeVe.png"
            width={150}
            height={90}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* {Search} */}

        {/* {right} */}
        <div className="absolute text-black flex  text-xs space-x-6 mx-6 whitespace-nowrap right-0 p-7">
          <div className="link pr-6">
            <p>Sign</p>
            <p className="font-extrabold md:text-sm"> In</p>
          </div>
          <div className="link pr-6">
            <p>Sacar</p>
            <p className="font-extrabold md:text-sm">Turno</p>
          </div>
          <div className="relative link flex items-center ">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-white text-center rounded text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10 " />
          </div>
        </div>
      </div>
      {/* {bottom} */}
    </header>
  );
}

export default Header;
