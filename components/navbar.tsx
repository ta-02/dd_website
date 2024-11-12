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
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="">
          <h1 className="">Double Degrees</h1>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="">
            <NavigationMenuItem>
              <NavigationMenuLink className="">Home</NavigationMenuLink>
            </NavigationMenuItem>

            {/* Events Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="">Events</NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <NavigationMenuLink className="">
                  Upcoming Events
                </NavigationMenuLink>
                <NavigationMenuLink className="">
                  Past Events
                </NavigationMenuLink>
                <NavigationMenuLink className="">
                  Archived Events
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="">About Me</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="">Contact Us</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
