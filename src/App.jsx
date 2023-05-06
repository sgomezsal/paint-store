import { useState } from "react";
import { RiUser3Line, RiAddLine, RiLightbulbLine, RiMenu3Fill, RiCloseLine, RiSearch2Line, RiArrowDownSLine } from "react-icons/ri";
// Components
import Sidebar from "./components/shared/Sidebar"

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrders, setShowOrde] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Menu mobile */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-2xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiLightbulbLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-6 md:p-8">
          {/* Header */}
          <header>
            {/* Title and search */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                <p className="text-gray-500">07 octubre 2022</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input type="text" className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none" placeholder="Search" />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]">Hot dishes</a>
              <a href="#" className="py-2 pr-4">Cold dishes</a>
              <a href="#" className="py-2 pr-4">Soup</a>
              <a href="#" className="py-2">Grill</a>
            </nav>
          </header>
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-8 pb-20 grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Card */}
            <div className="bg-[#1F1D2B] p-10 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="shirt_1.png" className="w-40 h-[180px] objet-cover -mt-20 shadow-2xl rounded-full"/>
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-10 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="shirt_1.png" className="w-40 h-[180px] objet-cover -mt-20 shadow-2xl rounded-full"/>
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-10 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="shirt_1.png" className="w-40 h-[180px] objet-cover -mt-20 shadow-2xl rounded-full"/>
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-10 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="shirt_1.png" className="w-40 h-[180px] objet-cover -mt-20 shadow-2xl rounded-full"/>
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-10 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="shirt_1.png" className="w-40 h-[180px] objet-cover -mt-20 shadow-2xl rounded-full"/>
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-10 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="shirt_1.png" className="w-40 h-[180px] objet-cover -mt-20 shadow-2xl rounded-full"/>
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 fixed lg:static right-0">Carrito</div>
      </main>
    </div>
  )
};

export default App
