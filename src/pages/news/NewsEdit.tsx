import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { supabase } from '../../utils/supabase';
import { Section } from '../../components/Section';
import { H2 } from '../../components/Typo/H2';
import { Button } from '../../components/Button';

export function BoardEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const password = location.state?.password;

  const [form, setForm] = useState({
    name: '',
    title: '',
    contents: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!password) {
      alert('잘못된 접근입니다.');
      navigate('/news');
      return;
    }

    if (id) {
      fetchPost();
    }
  }, [id, password]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('board')
        .select('name, title, contents')
        .eq('id', id)
        .single();

      if (error) throw error;
      setForm({
        name: data.name,
        title: data.title,
        contents: data.contents,
      });
    } catch (error) {
      console.error('Error fetching post:', error);
      alert('게시글을 불러오는데 실패했습니다.');
      navigate('/news');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.title || !form.contents) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from('board')
        .update({
          name: form.name,
          title: form.title,
          contents: form.contents,
        })
        .eq('id', id);

      if (error) throw error;

      alert('게시글이 수정되었습니다.');
      navigate(`/news/${id}`);
    } catch (error) {
      console.error('Error updating post:', error);
      alert('게시글 수정에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Section id="board-edit">
        <H2>글 수정</H2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">작성자</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23356b]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">제목</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23356b]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">내용</label>
            <textarea
              value={form.contents}
              onChange={(e) => setForm({ ...form, contents: e.target.value })}
              className="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23356b] min-h-[300px]"
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button
              type="submit"
              disabled={loading}
              variant="primary"
            >
              {loading ? '수정 중...' : '수정하기'}
            </Button>
            <Button
              type="button"
              variant="default"
              className='w-[102px]'
              onClick={() => navigate(`/news/${id}`)}
            >
              취소
            </Button>
          </div>
        </form>
      </Section>
    </div>
  );
}