'use client'
import { Bar, CartesianGrid, XAxis, YAxis, BarChart, Tooltip, Legend} from 'recharts'

const data = [{name:'amin',age:'40'}, {name:'mostafa',age:'32'}, {name:'ali',age:'20'}, {name:'mohamed',age:'30'}, {name:'ahmed',age:'25'}, {name:"danial", age:"24"}, {name:"fatane", age:"36"},];

const LineChartComponent = () => {
    return (
        <BarChart width={1290} height={400} data={data}>
    <XAxis dataKey="name" stroke="#64748B" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#64748B' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #64748B', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#64748B" strokeDasharray="10 10" />
    <Bar dataKey="age" fill="#3C50E0" barSize={30} />
  </BarChart>)
}
export default LineChartComponent;
