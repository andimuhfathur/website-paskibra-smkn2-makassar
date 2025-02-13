import Link from "next/link"
const Admin = ({ children }: { children: React.ReactNode}) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            {children}
        </div>
    )
}

export default Admin