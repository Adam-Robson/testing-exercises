
export function App() {
  return <>Hello World</>
}

export function double(n: number) {
  return n + n
}

export function half(n: number) {
  return n / 2
}

export function zero(n: number) {
  return n - n
}

export function add(n1: number, n2: number) {
  return n1 + n2
}

export function squared(n: number) {
  return n * n
}

export function text(str: string) {
  return (
    <div>
      {str}
    </div>
  )
}

