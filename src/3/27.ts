export {}

const timeout = async (timeoutMs: number): Promise<never> => {
  return new Promise((_, reject) => {
    setTimeout(() => reject('timeout'), timeoutMs)
  })
}

const fetchWithTimeout = async (url: string, timeoutMs: number) => {
  return Promise.race([fetch(url), timeout(timeoutMs)])
}

const hoge = async () => {}
await hoge()
