export {}

type Seed = string

interface SeedAPI {
  '/seeds': Seed[]
  '/seed/apple': Seed
  '/seed/melon': Seed
}
