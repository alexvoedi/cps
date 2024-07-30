import DeathKnight from '@/assets/deathknight.png'
import Warrior from '@/assets/warrior.png'
import Paladin from '@/assets/paladin.png'
import Hunter from '@/assets/hunter.png'
import Rogue from '@/assets/rogue.png'
import Priest from '@/assets/priest.png'
import Shaman from '@/assets/shaman.png'
import Mage from '@/assets/mage.png'
import Warlock from '@/assets/warlock.png'
import Monk from '@/assets/monk.png'
import Druid from '@/assets/druid.png'
import DemonHunter from '@/assets/demonhunter.png'
import Evoker from '@/assets/evoker.png'
import { CharacterClass } from '@/enums/CharacterClass'

export function getClassIcon(className: CharacterClass) {
  switch (className) {
    case CharacterClass.DeathKnight:
      return DeathKnight
    case CharacterClass.Warrior:
      return Warrior
    case CharacterClass.Paladin:
      return Paladin
    case CharacterClass.Hunter:
      return Hunter
    case CharacterClass.Rogue:
      return Rogue
    case CharacterClass.Priest:
      return Priest
    case CharacterClass.Shaman:
      return Shaman
    case CharacterClass.Mage:
      return Mage
    case CharacterClass.Warlock:
      return Warlock
    case CharacterClass.Monk:
      return Monk
    case CharacterClass.Druid:
      return Druid
    case CharacterClass.DemonHunter:
      return DemonHunter
    case CharacterClass.Evoker:
      return Evoker
    default:
      throw new Error('Invalid class name')
  }
}
