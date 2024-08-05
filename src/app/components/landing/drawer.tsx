import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { IoMenuSharp } from "react-icons/io5";
import Image from "next/image";
import Logo from "../../../../public/assets/logo_icon.svg";

export default function drawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger>
        <IoMenuSharp className="text-2xl text-themeDarkGray" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="px-6">
          <div className="">
            <a
              href="#"
              title="brand-logo"
              className="relative mr-6 flex items-center space-x-2"
            >
              <Image src={Logo} alt="Magic UI" className="w-auto h-[40px]" />
              <span className="font-bold text-xl">Sections</span>
            </a>
          </div>
          <nav>
            <ul className="mt-7 text-left">
              <li className="my-3"><a href="#" className="font-semibold">Link One</a></li>
              <li className="my-3"><a href="#" className="font-semibold">Link Two</a></li>
              <li className="my-3"><a href="#" className="font-semibold">Link Three</a></li>
            </ul>
          </nav>
        </DrawerHeader>
        <DrawerFooter>
          <Button className="bg-themePrimary hover:bg-themePrimary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Button</Button>
          <DrawerClose>
            <Button variant="outline" className="w-full">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
