interface ButtonProps {
  className?: string
  children: any
}

export default function Button(props: ButtonProps) {
  return (
    <button className={`
    ${props.className}
      text-white px-4 py-2 rounded-md
    `}>
      {props.children}
    </button>
  )
}