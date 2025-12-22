// "use client";

// // import { useTranslation } from "react-i18next";
// import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

// export default function UsageChart() {
//   // const { t } = useTranslation();
//   const data = [
//     { name: "Project Alpha", usage: 80 },
//     { name: "Client Meetings", usage: 50 },
//     { name: "Marketing Campaigns", usage: 65 },
//   ];
//   return (
//     <div className="h-40 w-full">
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart data={data}>
//           <XAxis dataKey="name" hide />
//           <Tooltip />
//           <Bar dataKey="usage" fill="#757575" radius={[4, 4, 0, 0]} />
//         </BarChart>
//       </ResponsiveContainer>
//       <div className="flex justify-between md:gap-2 md:text-xs mt-2 ml-7 text-sm text-gray-600 ">
//         {data.map((d) => (
//           <span key={d.name}>{d.name}</span>
//         ))}
//       </div>
//     </div>
//   );
// }
