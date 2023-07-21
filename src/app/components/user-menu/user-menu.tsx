"use client"

import { useLogoutUrl } from "@/hooks/useLogoutUrl"
import { useSession } from "@/hooks/useSession"
import { cn } from "@/utils/cn"
import { Menu } from "./menu"
import { MenuAvatar } from "./menu-avatar"
import { MenuDivider } from "./menu-divider"
import { MenuItem } from "./menu-item"
import { MenuUser } from "./menu-user"

type UserMenuProps = {
  openingButtonClassName?: string
}

export default function UserMenu({ openingButtonClassName }: UserMenuProps) {
  const { data: session } = useSession()
  const { data: logoutUrl } = useLogoutUrl()

  // const [projectId, plan] = await Promise.all([
  //   getCurrentProjectId(),
  //   getSubscriptionPlan(),
  // ])
  // const nextPlanName = getNextPlanName(plan)

  if (!session) {
    return undefined
  }

  const name: string = session.identity.traits.name ?? "unknown"
  const initials = name
    .split(" ")
    // Only interested in first and last initial
    .filter((_, i, all) => i === 0 || i === all.length - 1)
    .map((s) => s[0].toUpperCase())
    .join("")
  const email = session.identity.traits.email ?? "unknown"

  return (
    <Menu
      openingButtonClassName={cn("font-sans", openingButtonClassName)}
      popupClassName="font-sans"
      button={<MenuAvatar text={initials} as="button" />}
    >
      <MenuUser name={name} initials={initials} email={email} />
      <MenuItem
        icon={"ExternalLink"}
        href={process.env.NEXT_PUBLIC_ORY_WEB_URL}
      >
        Ory Homepage
      </MenuItem>
      <MenuItem
        icon={"LayoutDashboard"}
        href={process.env.NEXT_PUBLIC_ORY_CONSOLE_URL}
      >
        Console
      </MenuItem>
      {/* {projectId && (
        <MenuItem
          icon={"UserPlus"}
          href={`${process.env.NEXT_PUBLIC_ORY_CONSOLE_URL}/projects/${projectId}/settings`}
        >
          Add Collaborators
        </MenuItem>
      )} */}
      <MenuItem
        icon={"Adjustments"}
        href={`${process.env.NEXT_PUBLIC_ORY_CONSOLE_URL}/settings`}
      >
        Account settings
      </MenuItem>
      <MenuDivider />
      {/* {nextPlanName && projectId && (
        <>
          <MenuButtonItem
            href={
              plan === Plan.Scale
                ? `${process.env.NEXT_PUBLIC_ORY_WEB_URL}/contact/`
                : `${process.env.NEXT_PUBLIC_ORY_CONSOLE_URL}/projects/${projectId}/billing`
            }
          >
            <span>Upgrade to {nextPlanName}</span>
            <ArrowRight size={16} />
          </MenuButtonItem>
          <MenuDivider />
        </>
      )} */}
      <MenuItem icon={"Logout"} type="danger" href={logoutUrl}>
        Logout
      </MenuItem>
    </Menu>
  )
}
