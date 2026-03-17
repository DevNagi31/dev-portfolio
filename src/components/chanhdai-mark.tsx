export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <text
        x="256"
        y="200"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="monospace"
        fontWeight="bold"
        fontSize="220"
      >
        DN
      </text>
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><text x="256" y="200" text-anchor="middle" fill="${color}" font-family="monospace" font-weight="bold" font-size="220">DN</text></svg>`
}
