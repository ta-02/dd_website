import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row justify-between p-1 items-center">
        <div className="flex">
          <img src="../public/DD_LOGO.png" />
          <h1 className="text-2xl">Double Degrees</h1>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex p-2 space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink href="/">Home</NavigationMenuLink>
            </NavigationMenuItem>

            {/* Events Dropdown */}
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger className="text-base">
                Events
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute">
                <NavigationMenuLink href="/events/upcoming">
                  Upcoming Events
                </NavigationMenuLink>
                <NavigationMenuLink href="/events/past">
                  Past Events
                </NavigationMenuLink>
                <NavigationMenuLink href="/events/archived">
                  Archived Events
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="">
              <NavigationMenuLink className="" href="/about">
                About Me
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="">
              <NavigationMenuLink href="/contactus">
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
