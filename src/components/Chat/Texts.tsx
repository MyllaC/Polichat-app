interface ChatProps {
  content: string
}

export function Texts({ content }: ChatProps) {
  return <div className="w-2/6 m-2 rounded bg-teal-800 p-3 ">{content}</div>
}
