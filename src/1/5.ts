export {}
interface Person {
  first: string
  lastName: string
}

const formatted = (p: Person) => `${p.first} ${p.lastName}`
const unformatted = (p: any) => `${p.firstName} ${p.lastName}`

interface ComponentProps {
  onSelectItem: (item: number) => void
}

function renderSelector(props: ComponentProps) {
  props.onSelectItem(42)
  return
}

let selectedId: number = 0

function handleSelectItem(item: any) {
  selectedId = item.id
}

renderSelector({ onSelectItem: handleSelectItem })
