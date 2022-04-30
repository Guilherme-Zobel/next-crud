interface ButtonProps {
  className?: string
  children: any
  onClick?: () => void
}

export default function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className={`
    ${props.className}
      text-white px-4 py-2 rounded-md
    `}>
      {props.children}
    </button>
  )
}