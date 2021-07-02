import { PieChart, Pie, LabelList, ResponsiveContainer } from 'recharts';


const data01 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
];




const ShowPieChart = () => {
  return (
    <ResponsiveContainer width="100%" aspect={1.5}>
        <PieChart>
            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius="60%" fill="#8884d8"  label>
                <LabelList dataKey="name" position="top"/>
            </Pie>
        </PieChart>
    </ResponsiveContainer>  
  );
}

export default ShowPieChart;
