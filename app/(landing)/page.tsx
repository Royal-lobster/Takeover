import { APPS } from '@/lib/data/apps'
import { CATEGORIES } from '@/lib/schema'
import { BrewPicker } from './_components/brew-picker'

export default function HomePage() {
  return <BrewPicker apps={APPS} categories={CATEGORIES} />
}
