import React from "react"

type Props = {
  children?: React.ReactNode
  title: string
  subtitle: string
}

const Knowtext = ({ children, title, subtitle }: Props) => {
  return (
    <div className="flex mt-16 pb-10  w-full flex-col text-center gap-5 flex-wrap  ">
      <p className="font-extrabold text-4xl text-slate-900">{title}</p>
      <p className="text-xl font-medium  text-center">{subtitle}</p>{" "}
    </div>
  )
}

export default Knowtext