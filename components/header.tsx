import { ReactNode, forwardRef, ComponentPropsWithoutRef } from "react";
import MobileMenu from "./mobile-menu";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import DarkModeToggle from "./darkmode-toggle";

const NavItem = ({
  href,
  target = "_self",
  children,
}: {
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  children: ReactNode;
}) => (
  <NavigationMenuLink
    asChild
    className={navigationMenuTriggerStyle()}
    href={href}
    target={target}
  >
    <Link href={href}>{children}</Link>
  </NavigationMenuLink>
);

const DropdownNavItem = ({
  trigger,
  children,
}: {
  trigger: string;
  children: ReactNode;
}) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{trigger}</NavigationMenuTrigger>
    <NavigationMenuContent>{children}</NavigationMenuContent>
  </NavigationMenuItem>
);

const ListItem = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary-300/10 hover:text-accent-foreground focus:bg-secondary-300/10 focus:text-accent-foreground",
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-gray-600/90 dark:text-gray-500">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 p-4 transition-all duration-300 ease-in-out">
      <div className="mx-auto max-w-[1070px]">
        <nav
          className="rounded-2xl border-[1.5px] border-gray-200 bg-background px-2 transition-all duration-300 ease-in-out dark:border-gray-50"
          aria-label="Main navigation"
        >
          <div className="flex h-12 items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex flex-shrink-0 items-center"
                aria-label="Double Degrees Home"
              >
                <div className="ml-1 text-2xl font-bold">Double Degrees</div>
              </Link>
              <nav className="ml-4 hidden md:block" aria-label="Main menu">
                <NavigationMenu>
                  <NavigationMenuList className="text-black/60 dark:text-gray-500">
                    <DropdownNavItem trigger="Events">
                      <ul className="grid w-[400px] gap-3 bg-background p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <ListItem href="/events/upcoming" title="Upcoming">
                          Learn more about our upcoming events
                        </ListItem>
                        <ListItem href="/events/past" title="Past">
                          Check out our past events
                        </ListItem>
                        <ListItem href="/events/archived" title="Archived">
                          Check out our archived events
                        </ListItem>
                      </ul>
                    </DropdownNavItem>
                    <NavItem href="/about">About Us</NavItem>
                    <NavItem href="/contactus">Contact Us</NavItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
            </div>
            <div className="hidden items-center space-x-4 lg:flex">
              <DarkModeToggle />
            </div>
            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
