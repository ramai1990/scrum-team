type SideBarItems = SideBarItem[];

type SideBarItem = {
  key: string;
  children: string;
  href: string;
  isRoot?: boolean;
};

export type { SideBarItems };
