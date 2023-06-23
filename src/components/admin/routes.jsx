import {
  RectangleStackIcon,
} from "@heroicons/react/24/solid";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "admin",
    pages: [
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "projects",
        path: "/projects",
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "events",
        path: "/events",
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "awards",
        path: "/awards",
      },
    ],
  }
];

export default routes;
