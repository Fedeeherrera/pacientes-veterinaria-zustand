function Error({children} : {children : React.ReactNode}) {
  return (
    <p className="text-center my-4 bg-red-600 text-white font-bold uppercase text-sm p-3">{children}</p>
  )
}
export default Error