import { type SidebarItem } from './sidebar-menu'
import TeamAvatar from './team-avatar'
import { Chip } from '@nextui-org/react'

export const sectionItems: SidebarItem[] = [
  {
    key: 'main-menu',
    title: '',
    items: [
      {
        key: 'home',
        href: '/',
        icon: 'basil:add-solid',
        title: 'เพิ่มข้อมูล'
      },
      {
        key: 'dashboard',
        href: '/dashboard',
        icon: 'solar:widget-2-outline',
        title: 'ตาราง'
      }
    ]
  }
]
