// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import bcrypt from 'bcryptjs';
// import { supabase } from '../../lib/supabase';

// export default function NewsWrite() {
//   const nav = useNavigate();

//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [author, setAuthor] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async () => {
//     const password_hash = bcrypt.hashSync(password, 10);

//     await supabase.from('news').insert({
//       title,
//       content,
//       author,
//       password_hash,
//     });

//     nav('/news');
//   };

//   return (
//     <div className="max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">글쓰기</h1>

//       <input
//         className="border p-2 w-full mb-3"
//         placeholder="작성자"
//         value={author}
//         onChange={e => setAuthor(e.target.value)}
//       />

//       <input
//         className="border p-2 w-full mb-3"
//         placeholder="제목"
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//       />

//       <textarea
//         className="border p-2 w-full h-48 mb-3"
//         placeholder="내용"
//         value={content}
//         onChange={e => setContent(e.target.value)}
//       />

//       <input
//         type="password"
//         className="border p-2 w-full mb-3"
//         placeholder="비밀번호"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//       />

//       <button
//         onClick={handleSubmit}
//         className="px-4 py-2 bg-blue-600 text-white rounded"
//       >
//         등록
//       </button>
//     </div>
//   );
// }
