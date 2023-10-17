import Card from "@/components/common/Card.jsx";
import Select from "@/components/common/Select.jsx";
import { useRef, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";

function BarGraph() {
  const selectRef = useRef();
  const [currYear, setCurrYear] = useState(2023);
  const months = [

    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthlyIncome = [
    ...months.map((month) => {
      const income = Math.round(Math.random() * 200000 * 100) / 100;
      return { month, income };
    }),
  ];

  const options = [
    { label: " Quantity" },

    {
      label: 2016,
      value: 2016,
    },
    {
      label: 2017,
      value: 2017,
    },
    {
      label: 2018,
      value: 2018,
    },
    {
      label: 2019,
      value: 2019,
    },
    {
      label: 2020,
      value: 2020,
    },
    {
      label: 2021,
      value: 2021,
    },
    {
      label: 2022,
      value: 2022,
    },
    {
      label: 2023,
      value: 2023,
      default: true,
    },
  ];

  function handleYearChange() {
    const year = selectRef.current.value;
    setCurrYear(year);
  }

  return (
    <Card className="xl:w-[60%] w-full">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h3 className="text-2xl font-bold">Overview</h3>
          <p className="font-semibold tracking-wide text-slate-400">
            Monthly Earning
          </p>
        </div>
        <Select
          ref={selectRef}
          options={options}
          onChange={handleYearChange}
          className="p-2"
      placeholder="Quantity"   />
      </div>
      <div className="h-[200] md:h-[300]">
        <ResponsiveContainer
          width="100%"
          height={300}
          className="my-5 overflow-visible"
        >
          <BarChart
          fill="green"
            width={700}
            height={300}
            className="w-full"
            data={monthlyIncome}
          >
            <XAxis dataKey="month" axisLine={false} tickMargin={10} />
            <Bar
              dataKey="income"
              fill="blue"
              radius={10}
              className="drop-shadow-lg"
              cursor="pointer"
            />
          </BarChart>
        </ResponsiveContainer>
        <p className="w-full text-center text-xl text-slate-500">
      
        </p>
      </div>
    </Card>
  );
}

export default BarGraph;
