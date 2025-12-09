import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../utils/supabase';
import type { BoardPost } from '../../@types/board';
import { Section } from '../../components/Section';
import { H2 } from '../../components/Typo/H2';
import { Button } from '../../components/Button';

export function Board() {
  const [posts, setPosts] = useState<BoardPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('board')
        .select('id, name, title, created_at, password, contents')
        .order('created_at', { ascending: false });
      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (postId: string) => {
    const password = prompt('비밀번호를 입력하세요:');
    if (!password) return;

    try {
      const { data, error } = await supabase
        .from('board')
        .select('password')
        .eq('id', postId)
        .single();

      if (error) throw error;

      if (data.password === password) {
        navigate(`/news/edit/${postId}`, { state: { password } });
      } else {
        alert('비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('Error verifying password:', error);
      alert('비밀번호 확인에 실패했습니다.');
    }
    setOpenMenuId(null);
  };

  const handleDelete = async (postId: string) => {
    const password = prompt('삭제하려면 비밀번호를 입력하세요:');
    if (!password) return;

    try {
      const { data, error } = await supabase
        .from('board')
        .select('password')
        .eq('id', postId)
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
        .eq('id', postId);

      if (deleteError) throw deleteError;

      alert('게시글이 삭제되었습니다.');
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('게시글 삭제에 실패했습니다.');
    }
    setOpenMenuId(null);
  };

  return (
    <div>
      <Section id="news">
        <H2>게시판</H2>

        <div className="mb-6 flex justify-end">
          <Button
            onClick={() => navigate('/news/create')}
            variant="primary">
            글쓰기
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-10">로딩 중...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-10 text-gray-500">게시글이 없습니다.</div>
        ) : (
          <div className="space-y-2">
            {posts.map((post) => (
              <div
                key={post.id}
                className="border border-gray-200 bg-white rounded-lg p-4 hover:shadow-md transition-shadow flex items-center justify-between"
              >
                <div 
                  onClick={() => navigate(`/news/${post.id}`)}
                  className="flex-1 cursor-pointer"
                >
                  <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>{post.name}</span>
                    <span>{new Date(post.created_at).toLocaleDateString('ko-KR')}</span>
                  </div>
                </div>

                <div className="relative">
                  <button
                    onClick={() => setOpenMenuId(openMenuId === post.id ? null : post.id)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 16 16">
                      <circle cx="2" cy="8" r="1.5"/>
                      <circle cx="8" cy="8" r="1.5"/>
                      <circle cx="14" cy="8" r="1.5"/>
                    </svg>
                  </button>

                  {openMenuId === post.id && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      <button
                        onClick={() => handleEdit(post.id)}
                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 rounded-t-lg"
                      >
                        수정
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 rounded-b-lg"
                      >
                        삭제
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}