import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useScrollToId } from '../hooks/useScrollToId';

// // 앵커 스크롤 커스텀 훅 (필요시 직접 구현하세요)
// function useScrollToId(): (anchor: string) => void {
//   return (anchor: string) => {
//     const el = document.getElementById(anchor);
//     if (el) {
//       el.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
// }

// hash 있을 때 각 섹션으로 스크롤
// function useAutoScrollToHash() {
//   const { hash } = useLocation();
  
//   useEffect(() => {
//     if (hash) {
//       const anchor = hash.replace('#', '');
//       const el = document.getElementById(anchor);
//       if (el) {
//         el.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, [hash]);
// }

interface SubmenuItem {
  label: string;
  anchor: string;
}

interface MenuItem {
  label: string;
  path: string;
  submenu: SubmenuItem[];
}
  // 메뉴 데이터
  const menus: MenuItem[] = [
    {
      label: 'WHO WE ARE',
      path: '/who',
      submenu: [
        { label: 'Goal', anchor: 'goal' },
        { label: 'Identity', anchor: 'identity' },
        { label: 'Team', anchor: 'team' },
        { label: 'Vision', anchor: 'vision' },
      ],
    },
    {
      label: 'WHAT WE DO',
      path: '/what',
      submenu: [
        { label: 'Our days', anchor: 'days' },
        { label: 'Our Engagement', anchor: 'engagement' },
        { label: 'Our Impact', anchor: 'impact' },
        { label: 'Partner Organizations', anchor: 'organizations' },
        { label: 'Future Outlook', anchor: 'outlook' },
      ],
    },
    {
      label: 'NEWS',
      path: '/news',
      submenu: [
        { label: 'News', anchor: 'news' },
      ],
    },
    {
      label: 'CONTACT US',
      path: '/contact',
      submenu: [
        { label: 'Contact Us', anchor: 'contact' },
        { label: 'Make a donation', anchor: 'donation' },
      ],
    },
  ];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToId = useScrollToId();

  // 페이지 이동 후 hash 있으면 스크롤
//   useAutoScrollToHash();


  // 하위메뉴 클릭 시 동작
  const handleSubmenuClick = (menuPath: string, anchor: string) => {
    setOpenMenu(null);
    if (location.pathname === menuPath) {
      scrollToId(anchor);
    } else {
      navigate(`${menuPath}#${anchor}`);
    }
  };

  return (
     <div className="w-full bg-gradient-to-br from-[#4a5f9d] via-[#5d4a8f] to-[#6a5094]">
      {/* <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow"> */}
      <header className="fixed bg-gradient-to-br from-[#4a5f9d] via-[#5d4a8f] to-[#6a5094] z-50 w-full px-10 py-6 text-white shadow-lg"> 
          {/* 로고/타이틀 */}
          <div className="max-w-[1200px] m-auto text-2xl font-bold tracking-wide">
              HEART SOCCER AGENT
          </div>
          <div className='h-[1px] bg-white my-4'></div>
          <nav>
              <div className="max-w-[1200px] m-auto">          
                  {/* 메뉴 */}
                  <ul className="flex justify-between gap-12 relative">
                      {menus.map((menu, idx) => (
                      <li
                          key={idx}
                          className="relative"
                          onMouseEnter={() => setOpenMenu(idx)}
                      >
                          <Link 
                          to={menu.path} 
                          className="text-white font-semibold text-sm tracking-wider hover:text-gray-200 transition-colors"
                          >
                          {menu.label}
                          </Link>
                          {openMenu === idx && (
                          <ul
                          className="absolute left-0 mt-3 w-48 bg-white shadow-xl rounded-lg p-2 border border-gray-200"
                          onMouseEnter={() => setOpenMenu(idx)}
                          onMouseLeave={() => setOpenMenu(null)}
                          >
                              {menu.submenu.map((sub, i) => (
                                <li
                                key={i}
                                onClick={() => handleSubmenuClick(menu.path, sub.anchor)}
                                className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer text-gray-700 text-sm"
                              >
                                  {sub.label}
                              </li>
                              ))}
                          </ul>
                          )}
                      </li>
                      ))}
                  </ul>
              </div>
          </nav>
      </header>
      {/* 히어로 배너 섹션 */}
      <div>
        {/* 내부 컨테이너에 padding 적용 */}
        <div className="max-w-[1200px] pt-[233px] mx-auto py-16 pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* 왼쪽 이미지 */}
          <div className="relative">
            <img src="src/assets/images/img-01.jpg"  className=" rounded-2xl flex items-center justify-center" alt="" />
          </div>

          {/* 오른쪽 텍스트 */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              <span className="text-[#c8e86f]">Young</span><br />
              <span className="text-[#c8e86f]">Changemakers</span><br />
              <span className="text-[#b8d85f]">Sharing Compassion</span><br />
              <span className="text-[#a8c84f]">Through Soccer</span>
            </h1>

            <div className="border-t border-white/30 pt-6 mt-6">
              <p className="text-lg leading-6 font-medium">Support our mission. <br/> Your support will make<br />a lasting impact.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
