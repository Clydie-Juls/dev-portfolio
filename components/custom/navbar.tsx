import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import Link from "next/link";

const routes = [
  {
    name: "Clyde Marindo",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Work Experience",
    href: "#work-experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
];

export function Navbar() {
  return (
        <NavigationMenu className="px-2 py-1 border-white border-2 border-opacity-10 rounded-lg">
        <NavigationMenuList>
            {routes.map((route, index) => (
            <NavigationMenuItem key={route.href}>
                <Link href={route.href} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), index === 0 && "font-bold")}>{route.name}</NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            ))}
        </NavigationMenuList>
        </NavigationMenu>
  );
}

