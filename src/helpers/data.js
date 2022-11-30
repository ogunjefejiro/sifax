import { ChartBarIcon, ChatIcon, ClipboardListIcon, ViewGridIcon, ViewListIcon } from "@heroicons/react/outline";
import {
  ViewGridIcon as ViewGridIconSolid,
  ViewGridIcon as ViewListSolid,
  ChatIcon as ChatIconSolid,
  ChartBarIcon as ChartBarIconSolid,
  ClipboardListIcon as ClipboardListIconSolid,
} from "@heroicons/react/solid";
export const dashboardNavLinks = [
  {
    name: "Dashboard",
    path: "/",
    title: "Dashboard",
    icon: <ViewGridIcon />,
    activeIcon: <ViewGridIconSolid />,
  },
  {
    name: "Projects",
    path: "/projects",
    title: "Projects",
    icon: <ClipboardListIcon />,
    activeIcon: <ClipboardListIconSolid />,
  },
  {
    name: "My Task",
    path: "/task",
    title: "My Task",
    icon: <ViewListIcon />,
    activeIcon: <ViewListSolid />,
  },
  {
    name: "Message",
    path: "/message",
    title: "Message",
    icon: <ChatIcon />,
    activeIcon: <ChatIconSolid />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    title: "Analytics",
    icon: <ChartBarIcon />,
    activeIcon: <ChartBarIconSolid />,
  },
];
