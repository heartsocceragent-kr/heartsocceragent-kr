import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../utils/supabase';
import type { BoardPost } from '../../@types/board';
import { Section } from '../../components/Section';
import { H2 } from '../../components/Typo/H2';

export function BoardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BoardPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('board')
        .select('id, name, title, contents, created_at, password')
        .eq('id', id)
        .single();

      if (error) throw error;
      setPost(data);
      
    } catch (error) {
      console.error('Error fetching post:', error);
      alert('게시글을 불러오는데 실패했습니다.');
      navigate('/news');
    } finally {
      setLoading(false);
    }
  };
  const handleEdit = async () => {
    const password = prompt('비밀번호를 입력하세요:');
    if (!password) return;

    try {
      const { data, error } = await supabase
        .from('board')
        .select('password')
        .eq('id', id)
        .single();

      if (error) throw error;

      if (data.password === password) {
        navigate(`/news/edit/${id}`, { state: { password } });
      } else {
        alert('비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('Error verifying password:', error);
      alert('비밀번호 확인에 실패했습니다.');
    }
  };

  const handleDelete = async () => {
    const password = prompt('삭제하려면 비밀번호를 입력하세요:');
    if (!password) return;

    try {
      const { data, error } = await supabase
        .from('board')
        .select('password')
        .eq('id', id)
        .single();

      if (error) throw error;

      if (data.password !== password) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      if (!confirm('정말 삭제하시겠습니까?')) return;

      const { error: deleteError } = await supabase
        .from('board')
        .delete()
        .eq('id', id);

      if (deleteError) throw deleteError;

      alert('게시글이 삭제되었습니다.');
      navigate('/news');
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('게시글 삭제에 실패했습니다.');
    }
  };

  if (loading) {
    return (
      <div>
        <Section id="board-detail">
          <div className="text-center py-10">로딩 중...</div>
        </Section>
      </div>
    );
  }

  if (!post) {
    return (
      <div>
        <Section id="board-detail">
          <div className="text-center py-10">게시글을 찾을 수 없습니다.</div>
        </Section>
      </div>
    );
  }

  return (
    <div>
      <Section id="board-detail">
        <div className="mb-6">
          <H2>{post.title}</H2>
          <div className="flex justify-between text-sm text-gray-500 mb-6">
            <span>{post.name}</span>
            <span>{new Date(post.created_at).toLocaleDateString('ko-KR')}</span>
          </div>
        </div>

        <div className="prose max-w-none mb-8 whitespace-pre-wrap border-t border-b py-8">
          {post.contents}
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => navigate('/news')}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            목록
          </button>
          <button
            onClick={handleEdit}
            className="bg-[#23356b] text-white px-6 py-2 rounded-lg hover:bg-[#1a2850] transition-colors"
          >
            수정
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            삭제
          </button>
        </div>
      </Section>
    </div>
  );
}