export default function Title(props) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="py-5 text-2xl px-7">{
        props.children}</h1>
      <hr className="border border-purple-500" />
    </div>
  )
}