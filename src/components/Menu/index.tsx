import { useState } from "react"

export default function Menu() {
    const [selectedMenu, setSelectedMenu] = useState('Product')
    const menuItems = ['Product', 'Contact', 'Feedback', 'Terms', 'Trusted Advisor', 'F.A.Q.', 'Affiliate Program']
    return (
        <div className="overflow-auto mx-9 flex flex-row text-white mt-8 border-b border-b-gray-700">
            {
                menuItems.map((item) =>
                    <button onClick={() => {setSelectedMenu(item)}} className={`text-sm px-4 py-2 ${selectedMenu === item ? `text-[#6461fc] border-b border-b-[#6461fc]` : null}`}>{item}</button>)
            }
        </div>
    )
}