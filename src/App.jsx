import { useState } from "react";
import { RiUser3Line, RiAddLine, RiMenu3Fill, RiCloseLine, RiSearch2Line, RiArrowDownSLine, RiDeleteBin6Line, RiShoppingCartFill } from "react-icons/ri";
import moment from 'moment';
// Components
import Sidebar from "./components/shared/Sidebar"

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrders, setShowOrde] = useState(false);
  const [showOrderspc, setShowOrdepc] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrde(false);
  };

  const toggleOrder = () => {
    setShowOrde(!showOrders);
    setShowMenu(false);
  };

  const toggleOrderpc = () => {
    setShowOrdepc(!showOrderspc);
  };

  const currentDate = moment().format('DD MMMM YYYY'); 

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
        <button onClick={toggleOrder} className="p-2">
          <RiShoppingCartFill />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-9 pb-20">
        <div className="lg:col-span-9 md:p-8 p-4">
          {/* Header */}
          <header>
            {/* Title and search */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Cuadro a Cuadro</h1>
                <p className="text-gray-500">{currentDate}</p>
              </div>
              <form className="flex items-center justify-center">
                <div>
                  <div onClick={toggleOrderpc} className="relative right-5 text-[25px] text-white">
                    <RiShoppingCartFill className="max-md:hidden"/>
                  </div>
                </div>
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input type="text" className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none" placeholder="Buscar" />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]">Paisajes</a>
              <a href="#" className="py-2 pr-4">Abstracto</a>
              <a href="#" className="py-2 pr-4">Bodegones</a>
              <a href="#" className="py-2">Arte urbano</a>
            </nav>
          </header>
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Elegir Cuadros</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Grande
            </button>
          </div>
          {/* Content */}
          <div className="p-8 pb-20 grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Card */}
            <div className="bg-[#1F1D2B] p-10 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
            <img src="src1.png" className="w-[400px] h-[200px] objet-cover -mt-20 shadow-2xl"/>
              <p className="text-xl">Nombre del cuadro</p>
              <span className="text-gray-400">$1'000.000 cop</span>
              <p className="text-gray-600">20 cuadros disponibles</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-10 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
            <img src="src2.png" className="w-[400px] h-[200px] objet-cover -mt-20 shadow-2xl"/>
              <p className="text-xl">Nombre del cuadro</p>
              <span className="text-gray-400">$1'000.000 cop</span>
              <p className="text-gray-600">20 cuadros disponibles</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-10 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
            <img src="src1.png" className="w-[400px] h-[200px] objet-cover -mt-20 shadow-2xl"/>
              <p className="text-xl">Nombre del cuadro</p>
              <span className="text-gray-400">$1'000.000 cop</span>
              <p className="text-gray-600">20 cuadros disponibles</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-10 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
            <img src="src1.png" className="w-[400px] h-[200px] objet-cover -mt-20 shadow-2xl"/>
              <p className="text-xl">Nombre del cuadro</p>
              <span className="text-gray-400">$1'000.000 cop</span>
              <p className="text-gray-600">20 cuadros disponibles</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-10 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
            <img src="src1.png" className="w-[400px] h-[200px] objet-cover -mt-20 shadow-2xl"/>
              <p className="text-xl">Nombre del cuadro</p>
              <span className="text-gray-400">$1'000.000 cop</span>
              <p className="text-gray-600">20 cuadros disponibles</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D2B] p-10 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
            <img src="src1.png" className="w-[400px] h-[200px] objet-cover -mt-20 shadow-2xl"/>
              <p className="text-xl">Nombre del cuadro</p>
              <span className="text-gray-400">$1'000.000 cop</span>
              <p className="text-gray-600">20 cuadros disponibles</p>
            </div>
          </div>
        </div>
        <div className={`fixed top-0 bg-[#1F1D2B] w-full lg:w-[460px] h-full transition-all ${showOrders ? "right-0" : "-right-full"} ${showOrderspc ? "right-0" : "-right-full"}`}>
          {/* Orders */ }
          <div className="relative lg:pt-8 pt-16 text-gray-300 p-8 h-full">
            <RiCloseLine onClick={toggleOrder} className="lg:opacity-0 absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
            <RiCloseLine onClick={toggleOrderpc} className="lg:left-[400px] absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl max-md:hidden" />
            <h1 className="text-2xl my-4">Orders #151416</h1>
            {/* Pills */}
            <div className="flex items-center gap-4 felx-wrap mb-8">
              <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">Grande</button>
              <button className="text-white py-2 px-4 rounded-xl border border-gray-500">To go</button>
              <button className="text-white py-2 px-4 rounded-xl border border-gray-500">Delibery</button>
            </div>
            {/* Car */}
            <div>
              <div className="grid grid-cols-6 mb-4 p-4">
                <h5 className="col-span-4">Items</h5>
                <h5>Qty</h5>
                <h5>Price</h5>
              </div>
              {/* Products */}
              <div className="h-[400px] md:h-[700px] lg:h-[540px] md:pb-60 scrollbar-hidden overflow-scroll pb-40">
                {/* Products */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Product description */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img src="src1.png" className="w-[50px] h-10 object-cover" />
                      <div>
                        <h5 className="text-sm">Spaicy seaso...</h5>
                        <p className="text-xs text-gray-500">$2.29</p>
                      </div>
                    </div>
                    {/* Qty */ }
                    <div>
                      <span>2</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-5 items-center gap-2">
                    <form className="col-span-4">
                      <input type="text" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none" placeholder="Order note..."/>
                    </form>
                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Products */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Product description */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img src="src1.png" className="w-[50px] h-10 object-cover" />
                      <div>
                        <h5 className="text-sm">Spaicy seaso...</h5>
                        <p className="text-xs text-gray-500">$2.29</p>
                      </div>
                    </div>
                    {/* Qty */ }
                    <div>
                      <span>2</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-5 items-center gap-2">
                    <form className="col-span-4">
                      <input type="text" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none" placeholder="Order note..."/>
                    </form>
                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Products */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Product description */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img src="src1.png" className="w-[50px] h-10 object-cover" />
                      <div>
                        <h5 className="text-sm">Spaicy seaso...</h5>
                        <p className="text-xs text-gray-500">$2.29</p>
                      </div>
                    </div>
                    {/* Qty */ }
                    <div>
                      <span>2</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-5 items-center gap-2">
                    <form className="col-span-4">
                      <input type="text" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none" placeholder="Order note..."/>
                    </form>
                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Products */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Product description */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img src="src1.png" className="w-[50px] h-10 object-cover" />
                      <div>
                        <h5 className="text-sm">Spaicy seaso...</h5>
                        <p className="text-xs text-gray-500">$2.29</p>
                      </div>
                    </div>
                    {/* Qty */ }
                    <div>
                      <span>2</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-5 items-center gap-2">
                    <form className="col-span-4">
                      <input type="text" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none" placeholder="Order note..."/>
                    </form>
                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Submit payment */}
            <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Disconunt</span>
                <span>$0</span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400">Subtotal</span>
                <span>$201.03</span>
              </div>
              <div>
                <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">Contiue to payment</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
};

export default App
