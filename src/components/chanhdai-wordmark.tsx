export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 2048 256"
      {...props}
    >
      <text
        x="1024"
        y="200"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="monospace"
        fontWeight="bold"
        fontSize="200"
      >
        Dev Krishna Nagi
      </text>
    </svg>
  )
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2048 256"><text x="1024" y="200" text-anchor="middle" fill="${color}" font-family="monospace" font-weight="bold" font-size="200">Dev Krishna Nagi</text></svg>`
}
