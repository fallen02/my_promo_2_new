import { LightbulbIcon as LucideProps, User, Menu } from 'lucide-react'

export const Icons = {
  logo: User,
  menu: Menu,
  // Add more icons as needed
}

export type Icon = keyof typeof Icons

