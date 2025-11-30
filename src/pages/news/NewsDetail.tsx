// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { supabase } from '../../lib/supabase';
// import PasswordCheckModal from './PasswordCheckModal';

// interface NewsItem {
//   id: number;
//   title: string;
//   content: string;
//   author: string;
//   created_at: string;
// }

// export default function NewsDetail() {
//   const { id } = useParams();
//   const nav = useNavigate();
//   const [item, setItem] = useState<NewsItem | null>(null);
//   const [showPw, setShowPw] = useState(false);
//   const [mode, setMode] = useState<'edit' | 'delete' | null>(null);

//   useEffect(() => {
//     supabase.from('news').select('*').eq('id', id).single()
//       .then(res => setItem(res.data));
//   }, []);

//   if (!item) return <div>Loading...</div>;

//   return (
//     <div className="max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold">{item.title}</h1>

//       <p className="text-gray-500 mb-6">
//         {item.author} · {item.created_at.slice(0, 10)}
//       </p>

//       <div className="whitespace-pre-line text-lg">{item.content}</div>

//       <div className="mt-6 flex gap-3">
//         <button
//           onClick={() => {
//             setMode('edit');
//             setShowPw(true);
//           }}
//           className="px-3 py-1 bg-yellow-500 text-white rounded"
//         >
//           수정
//         </button>
//         <button
//           onClick={() => {
//             setMode('delete');
//             setShowPw(true);
//           }}
//           className="px-3 py-1 bg-red-600 text-white rounded"
//         >
//           삭제
//         </button>
//       </div>

//       {showPw && (
//         <PasswordCheckModal
//           id={item.id}
//           mode={mode}
//           onClose={() => setShowPw(false)}
//         />
//       )}
//     </div>
//   );
// }
