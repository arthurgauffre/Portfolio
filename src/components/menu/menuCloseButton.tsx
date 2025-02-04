export default function MenuCloseButton({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (value: boolean) => void }) {
    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`absolute top-4 transition-all duration-500 ${isOpen ? 'left-[240px]' : 'left-0'
                } bg-arcade-darkPurple text-arcade-blue p-2 rounded-r-full border-2 border-l-0 border-arcade-pink hover:bg-[#2b1a45] hover:text-arcade-pink z-50`}
        >
            {isOpen ? <span className="text-xl">«</span> : <span className="text-xl">»</span>}
        </button>
    );
}