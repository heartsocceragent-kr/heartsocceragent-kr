// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { supabase } from '../../lib/supabase';

// interface NewsItem {
//   id: number;
//   title: string;
//   author: string;
//   created_at: string;
// }

// export default function NewsList() {
//   const [list, setList] = useState<NewsItem[]>([]);

//   useEffect(() => {
//     supabase.from('news').select('*').order('id', { ascending: false })
//       .then(res => setList(res.data || []));
//   }, []);

//   return (
//     <div className="max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">News</h1>

//       <Link to="/news/write" className="px-4 py-2 bg-blue-600 text-white rounded">
//         글쓰기
//       </Link>

//       <ul className="mt-6">
//         {list.map(item => (
//           <li key={item.id} className="border-b py-3">
//             <Link to={`/news/${item.id}`} className="text-xl font-semibold">
//               {item.title}
//             </Link>
//             <p className="text-sm text-gray-500">
//               {item.author} · {item.created_at.slice(0, 10)}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
