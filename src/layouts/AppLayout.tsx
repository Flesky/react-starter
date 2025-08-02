import type { JSX, ReactNode } from 'react'
import { AppShell, Burger, CloseButton, NavLink, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { AwardIcon, BikeIcon, ChefHatIcon, DramaIcon, HouseIcon, ListIcon } from 'lucide-react'
import { Outlet, NavLink as RouterLink } from 'react-router'

interface NavItemBase {
  icon: ReactNode
  name: string
}

type NavItem = NavItemBase & ({ to: string } | { children: NavItem[] })

const items: NavItem[] = [
  {
    name: 'Home',
    icon: <HouseIcon />,
    to: '/',
  },
  {
    name: 'Nested',
    icon: <ListIcon />,
    children: [
      {
        name: 'Item A',
        icon: <AwardIcon />,
        to: '//',
      },
      {
        name: 'Item B',
        icon: <BikeIcon />,
        to: '//',
      },
      {
        name: 'Another Nested',
        icon: <ListIcon />,
        children: [
          {
            name: 'Item C',
            icon: <ChefHatIcon />,
            to: '//',
          },
          {
            name: 'Item D',
            icon: <DramaIcon />,
            to: '//',
          },
        ],
      },
    ],
  },
]

function renderItem(item: NavItem): JSX.Element {
  if ('children' in item) {
    return (
      <NavLink
        label={item.name}
        href="#"
        leftSection={item.icon}
        py="xs"
        bdrs="sm"
      >
        {item.children.map(child => renderItem(child))}
      </NavLink>
    )
  }
  else {
    return (
      <NavLink
        component={RouterLink}
        to={item.to}
        label={item.name}
        leftSection={item.icon}
        py="xs"
        bdrs="sm"
      >
      </NavLink>
    )
  }
}

export default function AppLayout() {
  const [opened, { toggle, close }] = useDisclosure()
  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className="flex items-center gap-3 px-4">
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <CloseButton className="mb-4 self-end" onClick={close} hiddenFrom="sm" />

        <Text fw={600} fz="xl" mt="lg" mb="xl">react-starter</Text>
        {
          items.map(item => renderItem(item))
        }
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
