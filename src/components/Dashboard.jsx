import React from "react";

import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";
import { Sun, Moon, BellIcon, ChevronDown, Plus, Search, BadgeCheck, CircleEllipsis, Ban, Circle,  Clock, PlusCircleIcon } from "lucide-react";
import pfp from "/src/assets/pfp.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";



function Dashboard() {


  
  




  const [events, setEvents] = useState([
    { title: "Meeting", date: "2025-01-08", color: "#ff5a27" },
    { title: "Wedding", date: "2025-01-10", color: "#6b46c1" },
    { title: "Rent", date: "2025-01-16", color: "#805ad5" },
    { title: "Meeting", date: "2025-01-05", color: "#3182ce" },
    { title: "Photo Booth", date: "2025-01-25", color: "#e53e3e" },
    { title: "UFC", date: "2025-01-29", color: "#2b6cb0" },
  ]);

  const handleDateClick = (arg) => {
    const title = prompt("Enter event title:");
    if (title) {
      setEvents([...events, { title, date: arg.dateStr, color: "#ff5a27" }]);
    }
  };

  const [date, setDate] = useState(new Date());
  const dataa = [
    { name: "Mar", value: 8000 },
    { name: "Apr", value: 9000 },
    { name: "May", value: 10000 },
    { name: "Jun", value: 12000 },
    { name: "Jul", value: 15000 }, // Highlighted
    { name: "Aug", value: 11000 },
    { name: "Sep", value: 9500 },
    { name: "Oct", value: 10500 },
    { name: "Nov", value: 9800 },
    { name: "Dec", value: 12500 },
    { name: "Jan", value: 13000 },
    { name: "Feb", value: 10200 },
  ];
  


  const data = [
    
    { name: "Paid", value: 140, color: "#C1FCF7" },
    { name: "Unpaid", value: 210, color: "#EE5528" },
    { name: "Overdue", value: 86, color: "#C8D6E0" },
   
  ];

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    console.log("Searching for:", event.target.value);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col py-0 lg:px-0 md:px-0 px-6 h-full overflow-y-auto bg-blue-50  w-full">
  

  <div className="flex fixed z-10 w-full bg-blue-50 space-x-3 mb-0 pt-3 pb-3 px-3 -mt-4">
  <div className="flex w-full max-w-lg border  shadow-md py-2 px-8 text-sm text-gray-400 rounded-xl bg-white dark:bg-white">
        <Search className="w-6 h-6 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search events, partners, or equipment"
          className="w-full bg-transparent focus:outline-none"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
    <button className="bg-orange-400 px-4 py-2 rounded-3xl text-white flex items-center space-x-2">
        <Plus className="w-3 h-3 text-white" />
        <span>Add</span>
        <ChevronDown className="w-3 h-3 text-white" />
      </button>
    <div className="flex items-center space-x-2">
      <Sun className="w-4 h-4 text-black" />
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="relative w-12 h-6 flex border items-center border-gray-400 bg-gray-300 dark:bg-white rounded-full p-1 transition-colors duration-300"
      >
        <div
          className={`absolute w-5 h-5 border border-gray-400 bg-white dark:bg-white rounded-full shadow-lg transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}
        ></div>
      </button>
      <Moon className="w-4 h-4 text-black dark:text-black" />
    </div>
    <BellIcon className="w-8 h-auto items-center justify-items-center py-2 pl-3   text-black dark:text-black" />
    <div className="w-14 h-10 rounded-full overflow-hidden border  border-gray-300">
          <img src={pfp} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <ChevronDown className="w-12 h-auto pl-2 justify-center text-black dark:text-black" />
      
  </div>
  <section id="dashboard" >
      <div className="md:flex relative  md:space-x-4 mt-24 text-lg text-white mb-1 ">
      <div className="flex flex-col bg-[#71C1E8] rounded-lg border md:w-[150px] w-[130px] h-[80px] md:p-4 p-4 justify-center md:mt-0 mt-4">
  <div className="flex items-center space-x-4">
    <h2 className="text-white">Approved</h2>
    <BadgeCheck className="w-4 h-4 text-white" />
  </div>
  <p className="mt-2 text-white">2</p>
</div>
<div className="flex flex-col bg-[#FFDE59] rounded-lg border md:w-[150px] w-[130px] h-[80px] md:p-4 p-4 justify-center md:mt-0 mt-4">
  <div className="flex items-center space-x-4">
    <h2 className="text-white">Pending</h2>
    <CircleEllipsis className="w-5 h-5 text-white" />
  </div>
  <p className="mt-2 text-white">2</p>
</div>
<div className="flex flex-col bg-[#FFA0A3] rounded-lg border md:w-[150px] w-[130px] h-[80px] md:p-4 p-4 justify-center md:mt-0 mt-4">
  <div className="flex items-center space-x-6">
    <h2 className="text-white">Cancel</h2>
    <Ban className="w-4 h-4 text-white" />
  </div>
  <p className="mt-2 text-white">2</p>
</div>
<div className="flex flex-col bg-[#01B574C4] rounded-lg border md:w-[150px] w-[130px] h-[80px] md:p-4 p-4 justify-center md:mt-0 mt-4">
  <div className="flex items-center space-x-6">
    <h2 className="text-white">Done</h2>
    <BadgeCheck className="w-4 h-4 text-white" />
  </div>
  <p className="mt-2 text-white">2</p>
</div>


<div className=" border bg-white shadow-md absolute right-[-40px] rounded-lg md:w-[320px] w-[160px] h-[600px] md:p-2 p-2 justify-center md:mt-0 overflow-auto">
      {/* Calendar Section */}
      <div className="mb-4 mt-3 px-4">
        
        
        {/* Real Calendar */}
        <Calendar
          onChange={setDate}
          value={date}
          className="border-none w-full text-black text-sm"
        />
      </div>
 {/* Upcoming Events Section */}
 <h3 className="text-md text-black font-bold">Upcoming Events</h3>
  <div className="mt-2 space-y-2">
    {/* Event 1 */}
    <div className="bg-green-200 rounded-md p-2 flex items-center">
      <span className="text-sm font-semibold">Team Outing</span>
    </div>

    {/* Event 2 */}
    <div className="bg-blue-200 rounded-md p-2 flex items-center">
      <span className="text-sm font-semibold">Team Outing</span>
    </div>

    {/* Event 3 */}
    <div className="bg-red-200 rounded-md p-2 flex items-center">
      <span className="text-sm font-semibold">Team Outing</span>
    </div>
      </div>
      </div>

  





      </div>

      <div className="flex justify-end  pr-72">
  <button className="px-4 py-1 bg-[#3AC593] border text-xs  text-white flex items-center gap-1 rounded-sm">
    Jan 2024  
    <ChevronDown className="w-3 h-3 text-white" />
  </button>
</div>


      <div className="md:flex md:space-x-4 py-1  mb-0">
        {/* box 1 */}
      <div className="flex flex-col bg-white rounded-lg border md:w-[320px] w-[250px] h-auto shadow-md md:px-4 px-2">
  <h2 className="font-bold mt-4 text-xl">Event Statistics</h2>
  <p className="text-gray-500 mt-0 text-sm text-right justify-end">Top 5</p>

  {/* Table */}
<div className="mt-0 px-2">
  <table className="w-full text-sm border-separate border-spacing-y-1">
    <thead>
      <tr className="text-gray-400 font-semibold text-xs ">
        <th className="text-left">Events</th>
        <th className="text-center">Numbers</th>
        <th className="text-right">Money</th>
      </tr>
    </thead>
    <tbody className="text-gray-500 text-xs">
      <tr className="border-b border-gray-300">
        <td>Rent</td>
        <td className="text-center">7</td>
        <td className="text-right">€14,000</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td>Wedding</td>
        <td className="text-center">2</td>
        <td className="text-right">€34,000</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td>Club</td>
        <td className="text-center">3</td>
        <td className="text-right">€4,000</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td>Private</td>
        <td className="text-center">1</td>
        <td className="text-right">€1,000</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td>Private</td>
        <td className="text-center">1</td>
        <td className="text-right">€1,000</td>
      </tr>
    </tbody>
    <tfoot>
      <tr className="font-bold border-t border-gray-300">
        <td>Total</td>
        <td className="text-center">13</td>
        <td className="text-right text-gray-500">€104,000</td>
      </tr>
    </tfoot>
  </table>
</div>
</div>
  
 {/* box 2 */}
        <div className="flex flex-col rounded-lg border md:w-[320px] w-[250px] h-[240px] md:p-4 p-2 md:mt-0 mt-2 bg-white shadow-lg">
      <h2 className="text-lg mt-0 mb-6 font-bold">Monthly Revenue</h2>
      

      <ResponsiveContainer width="100%" height={180}>
  <BarChart data={dataa} barSize={12}>
    {/* X-Axis with all months displayed in extra small text */}
    <XAxis
      dataKey="name"
      axisLine={false} // Removes black line
      tickLine={false}
      interval={0} // Show all months
      padding={{ left: 2, right: 2 }}
      tick={{ fontSize: 8 }} // Extra small text for months
    />
    <YAxis hide />
    <Tooltip />

    {/* Bars: Gray for all, Blue for July */}
    <Bar
      dataKey="value"
      radius={10}
      shape={(props) => {
        const { x, y, width, height, payload } = props;
        return (
          <g>
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              fill={payload.name === "Jul" ? "#2563EB" : "#CBD5E1"}
              rx={10} // Rounded corners
            />
            {/* Display "$15,000" above July */}
            {payload.name === "Jul" && (
              <text
                x={x + width / 2}
                y={y - 5} // Position above the bar
                textAnchor="middle"
                fontSize="10"
                fontWeight="bold"
                fill="black"
              >
                $15,000
              </text>
            )}
          </g>
        );
      }}
    />
  </BarChart>
</ResponsiveContainer>
  </div>
 </div>


      
      <div className="md:flex md:space-x-4 py-2 mt-1">
        
 {/* box 3 */}

      <div className="flex bg-white flex-col rounded-lg border md:w-[320px] w-[250px] h-auto shadow-md md:px-4 px-2">
  <h2 className="font-bold mt-4 text-xl">Partners</h2>
  <p className="text-gray-500 mt-0 text-sm text-right justify-end">Top 5</p>

  {/* Table */}
<div className="mt-0 px-2">
  <table className="w-full text-sm border-separate border-spacing-y-2">
    <thead>
      <tr className="text-gray-400 font-semibold text-xs ">
        <th className="text-left">Names</th>
        <th className="text-center">Gigs</th>
        <th className="text-right">Money</th>
      </tr>
    </thead>
    <tbody className="text-gray-500 text-xs">
      <tr className="border-b border-gray-300">
        <td>Steve</td>
        <td className="text-center">7</td>
        <td className="text-right">€14,000</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td>Steve</td>
        <td className="text-center">2</td>
        <td className="text-right">€3,000</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td>Steve</td>
        <td className="text-center">3</td>
        <td className="text-right">€32,000</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td>Steve</td>
        <td className="text-center">1</td>
        <td className="text-right">€32,000</td>
      </tr>
      <tr className="border-b border-gray-300">
        <td>Steve</td>
        <td className="text-center">1</td>
        <td className="text-right">€32,000</td>
      </tr>
    </tbody>
    
  </table>
</div>
</div>
 {/* box 4 */}
        <div className="flex flex-col rounded-lg border md:w-[320px] w-[250px] h-[240px] md:p-2 p-2 md:mt-0 mt-0 bg-white shadow-lg">
      <h2 className="text-lg font-bold px-3 mt-1">Issued Invoices</h2>

      {/* Chart */}
      <div className="flex mt-0 justify-center">
        <PieChart width={150} height={150}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={70}
            paddingAngle={0} // Removed space between slices
            dataKey="value"
            shadow="70%"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      {/* Legend (Inline) */}
      <div className="flex justify-center space-x-2 mt-3 font-semibold text-xs px-1 ">
        <p className="flex items-center text-gray-500">
          <Circle className="text-[#849AA9] w-3 h-3 mr-1" /> Overdue 86
        </p>
        <p className="flex items-center  text-gray-500">
          <Circle className="text-[#EE5528] w-3 h-3 mr-1" /> Unpaid 210
        </p>
        <p className="flex items-center  text-gray-500">
          <Circle className="text-[#2CDDC7] w-3 h-3 mr-1" /> Paid 140
        </p>
        <p className="flex items-center  text-gray-500">
          <Circle className="text-gray-600 w-3 h-3 mr-1" /> All 402
        </p>
      </div>
    </div>
   

      </div>
      </section>


      <section id="calender" >
      <div className="mt-14">
      <div className="p-10 ">
      <h1 className="text-3xl font-bold mb-6">Calendar</h1>
      <div><PlusCircleIcon/></div>
      <div className="bg-white">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        editable={true}
        selectable={true}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth",
        }}
        height="80vh"
      />
      </div>
    </div>
      </div>
      </section>

     
    
<div className="mt-14">
<section id="task" >  
<h1 className="text-4xl font-bold px-3">Tasks</h1>

<p className="text-lg  px-3 py-2">short description</p>

<div className="rounded-2 bg-white p-4">
  <div className="grid grid-cols-3 gap-4">
    {/* Column 1 */}
    <div className="bg-blue-100 p-4 rounded-lg">
      <h2 className="font-bold text-lg">To Do</h2>
      
      <div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-gray-900">Design Homepage Wireframe</h3>
  <p className="text-gray-500 text-sm mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">High</span></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> 💬 <span className="ml-1">11</span></span>
      <span className="flex items-center">🔄 <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      <img src="https://via.placeholder.com/30" alt="User" className="w-6 h-6 rounded-full" />
      <span className="text-green-500 font-medium flex items-center"> ✅ Done</span>
    </div>
  </div>
</div>
      


      <div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-gray-900">Design Homepage Wireframe</h3>
  <p className="text-gray-500 text-sm mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">High</span></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> 💬 <span className="ml-1">11</span></span>
      <span className="flex items-center">🔄 <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      <img src="https://via.placeholder.com/30" alt="User" className="w-6 h-6 rounded-full" />
      <span className="text-green-500 font-medium flex items-center"> ✅ Done</span>
    </div>
  </div>
</div>



      <div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-gray-900">Design Homepage Wireframe</h3>
  <p className="text-gray-500 text-sm mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">High</span></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> 💬 <span className="ml-1">11</span></span>
      <span className="flex items-center">🔄 <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      <img src="https://via.placeholder.com/30" alt="User" className="w-6 h-6 rounded-full" />
      <span className="text-green-500 font-medium flex items-center"> ✅ Done</span>
    </div>
  </div>
</div>

    </div>

    {/* Column 2 */}
    <div className="bg-orange-100 p-4 rounded-lg">
      <h2 className="font-bold text-lg">In Progress</h2>
      
      <div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-gray-900">Design Homepage Wireframe</h3>
  <p className="text-gray-500 text-sm mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">High</span></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> 💬 <span className="ml-1">11</span></span>
      <span className="flex items-center">🔄 <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      <img src="https://via.placeholder.com/30" alt="User" className="w-6 h-6 rounded-full" />
      <span className="text-green-500 font-medium flex items-center"> ✅ Done</span>
    </div>
  </div>
</div>
      


      <div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-gray-900">Design Homepage Wireframe</h3>
  <p className="text-gray-500 text-sm mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">High</span></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> 💬 <span className="ml-1">11</span></span>
      <span className="flex items-center">🔄 <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      <img src="https://via.placeholder.com/30" alt="User" className="w-6 h-6 rounded-full" />
      <span className="text-green-500 font-medium flex items-center"> ✅ Done</span>
    </div>
  </div>
</div>



      <div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-gray-900">Design Homepage Wireframe</h3>
  <p className="text-gray-500 text-sm mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">High</span></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> 💬 <span className="ml-1">11</span></span>
      <span className="flex items-center">🔄 <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      <img src="https://via.placeholder.com/30" alt="User" className="w-6 h-6 rounded-full" />
      <span className="text-green-500 font-medium flex items-center"> ✅ Done</span>
    </div>
  </div>
</div>

    </div>

    {/* Column 3 */}
    <div className="bg-red-100 p-4 rounded-lg">
      <h2 className="font-bold text-lg">Done</h2>
      

      <div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-gray-900">Design Homepage Wireframe</h3>
  <p className="text-gray-500 text-sm mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">High</span></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> 💬 <span className="ml-1">11</span></span>
      <span className="flex items-center">🔄 <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      <img src="https://via.placeholder.com/30" alt="User" className="w-6 h-6 rounded-full" />
      <span className="text-green-500 font-medium flex items-center"> ✅ Done</span>
    </div>
  </div>
</div>
      


      <div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-gray-900">Design Homepage Wireframe</h3>
  <p className="text-gray-500 text-sm mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">High</span></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> 💬 <span className="ml-1">11</span></span>
      <span className="flex items-center">🔄 <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      <img src="https://via.placeholder.com/30" alt="User" className="w-6 h-6 rounded-full" />
      <span className="text-green-500 font-medium flex items-center"> ✅ Done</span>
    </div>
  </div>
</div>



      <div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-gray-900">Design Homepage Wireframe</h3>
  <p className="text-gray-500 text-sm mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">High</span></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> 💬 <span className="ml-1">11</span></span>
      <span className="flex items-center">🔄 <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      <img src="https://via.placeholder.com/30" alt="User" className="w-6 h-6 rounded-full" />
      <span className="text-green-500 font-medium flex items-center"> ✅ Done</span>
    </div>
  </div>
</div>

    </div>
  </div>
  
</div>
</section>


<div className="mt-16"> 
<section id="partners" className="p-6 my-10">
<h1 className="text-3xl mb-6 font-bold"> Team members</h1>
<div className="bg-white p-4 rounded-lg shadow-md">
  {/* Table Header */}
  <div className="flex justify-between items-center pb-4">
   
    <button className="bg-orange-500 text-white px-4 py-2 right-3 rounded-md">+ Add</button>
  </div>

  {/* Table */}
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b text-gray-500">
          <th className="text-left px-4 py-2">Name</th>
          <th className="text-left px-4 py-2">Job</th>
          <th className="text-left px-4 py-2">Email</th>
          <th className="text-left px-4 py-2">Contact</th>
          <th className="text-left px-4 py-2">Company</th>
          <th className="text-left px-4 py-2">Status</th>
          <th className="text-left px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(8)].map((_, index) => (
          <tr key={index} className="border-b">
            <td className="px-4 py-2 flex items-center space-x-2">
              <img src={pfp} alt="User" className="w-8 h-8 rounded-full" />
              <span>Justin Lipshutz</span>
            </td>
            <td className="px-4 py-2">Marketing</td>
            <td className="px-4 py-2">abc@xyz.com</td>
            <td className="px-4 py-2">+6465355555</td>
            <td className="px-4 py-2">abc@xyz.com</td>
            <td className="px-4 py-2">
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm">Active</span>
            </td>
            <td className="px-4 py-2 flex space-x-2">
              <button className="text-gray-500 hover:text-gray-700">✏️</button>
              <button className="text-gray-500 hover:text-red-500">🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</section>

</div>
</div>




<section id="equipments" className="p-6 my-10">
<div className="mt-24">

<h1 className="text-3xl font-bold">Equipments</h1>
<p className="my-3">description will be added here</p>

<div className="bg-white p-6 rounded-lg shadow-md">
  {/* Header Section */}
  <div className="flex justify-between items-center mb-4">
    <div>
      <h2 className="text-2xl font-bold">Total Asset Value</h2>
      <p className="text-gray-500"> $10,200,232</p>
    </div>
    <div className="flex items-center space-x-6">
      {/* Pie Chart Placeholder */}
      <div className="w-20 h-20 border-4 border-blue-500 rounded-full flex items-center justify-center">
        <span className="text-blue-500 font-bold">Product 32</span>
      </div>
      {/* Legend */}
      <div className="flex space-x-4 text-sm">
        <span className="flex items-center"><span className="w-3 h-3 bg-orange-500 rounded-full mr-1"></span>In stock</span>
        <span className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-1"></span>Low stock</span>
        <span className="flex items-center"><span className="w-3 h-3 bg-pink-500 rounded-full mr-1"></span>Out of stock</span>
      </div>
    </div>
  </div>
{/* Action Button */}
<div className=" mt-4  text-blue-400 mb-2"> Inventory
<div className="flex  mt-4 mb-2 justify-end">
    <button className="bg-orange-500 text-white px-4 py-2 rounded-md">+ Order Stock</button>
    </div>
  </div>
  {/* Table Section */}
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b bg-gray-100 text-left">
          {["Name", "Buy Date", "Price", "Where", "Guaranty", "Files", "Warehouse", "Status", "Stock"].map((header) => (
            <th key={header} className="px-4 py-2 text-gray-600">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(8)].map((_, index) => (
          <tr key={index} className="border-b">
            <td className="px-4 py-2">Cover</td>
            <td className="px-4 py-2">July 14, 2025</td>
            <td className="px-4 py-2">50€</td>
            <td className="px-4 py-2">thomam.de</td>
            <td className="px-4 py-2">03-05-2025</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2"><input type="checkbox" className="w-4 h-4" /></td>
            <td className="px-4 py-2"><span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm">Good</span></td>
            <td className="px-4 py-2"><span className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm">In stock</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

</div>
</div>
</section>


<section id="billings" className="p-6 my-10">
<div className="mt-24">

<h1>Billing</h1>
<p>short description here</p>
<div className="md:flex   md:space-x-5 mt-4 text-lg text-white mb-1 ">
      <div className="flex flex-col bg-[#71C1E8] rounded-lg border md:w-[200px] w-[200px] h-[80px] md:p-4 p-4 justify-center md:mt-0 mt-4">
  <div className="flex items-center space-x-4">
    <h2 className="text-white">Approved</h2>
    <BadgeCheck className="w-4 h-4 text-white" />
  </div>
  <p className="mt-2 text-white">2</p>
</div>
<div className="flex flex-col bg-[#FFDE59] rounded-lg border md:w-[200px] w-[200px] h-[80px] md:p-4 p-4 justify-center md:mt-0 mt-4">
  <div className="flex items-center space-x-4">
    <h2 className="text-white">Pending</h2>
    <CircleEllipsis className="w-5 h-5 text-white" />
  </div>
  <p className="mt-2 text-white">2</p>
</div>
<div className="flex flex-col bg-[#FFA0A3] rounded-lg border md:w-[200px] w-[200px] h-[80px] md:p-4 p-4 justify-center md:mt-0 mt-4">
  <div className="flex items-center space-x-6">
    <h2 className="text-white">Cancel</h2>
    <Ban className="w-4 h-4 text-white" />
  </div>
  <p className="mt-2 text-white">2</p>
</div>
<div className="flex flex-col bg-[#01B574C4] rounded-lg border md:w-[200px] w-[200px] h-[80px] md:p-4 p-4 justify-center md:mt-0 mt-4">
  <div className="flex items-center space-x-6">
    <h2 className="text-white">Done</h2>
    <BadgeCheck className="w-4 h-4 text-white" />
  </div>
  <p className="mt-2 text-white">2</p>
</div>
</div>


<div className="bg-white p-6 mt-3 rounded-lg shadow-md">
  {/* Navigation Tabs */}
  <div className="flex space-x-6 border-b pb-2 text-gray-500">
    {["Proforma", "Issued", "Received", "Partners", "Warehouse"].map((tab, index) => (
      <span key={index} className={`cursor-pointer ${tab === "Issued" ? "text-blue-500 border-b-2 border-blue-500" : ""}`}>
        {tab}
      </span>
    ))}
  </div>

  {/* Table Section */}
  <div className="overflow-x-auto mt-4">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b bg-gray-100 text-left">
          {["Invoice", "Date", "Due Date", "Partner", "Amount", "VAT", "Status"].map((header) => (
            <th key={header} className="px-4 py-2 text-gray-600">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(6)].map((_, index) => (
          <tr key={index} className="border-b">
            <td className="px-4 py-2">2025-01</td>
            <td className="px-4 py-2">July 14, 2015</td>
            <td className="px-4 py-2">July 14, 2015</td>
            <td className="px-4 py-2">ZVEZOA.Doc</td>
            <td className="px-4 py-2">$103</td>
            <td className="px-4 py-2">244</td>
            <td className="px-4 py-2">
              {index % 2 === 0 ? (
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm">Paid</span>
              ) : (
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm">Un Paid</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Action Buttons */}
  <div className="flex justify-end mt-4 space-x-3">
    <button className="text-gray-600 hover:text-gray-800">
      <i className="fas fa-search"></i> {/* Search Icon Placeholder */}
    </button>
    <button className="text-gray-600 hover:text-gray-800">
      <i className="fas fa-sliders-h"></i> {/* Filter Icon Placeholder */}
    </button>
    <button className="bg-orange-500 text-white px-4 py-2 rounded-md">+</button>
  </div>
</div>

</div>
</section>




    </div>









  );
}

export default Dashboard;
