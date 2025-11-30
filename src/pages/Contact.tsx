// import { useScrollToId } from '../hooks/useScrollToId';

import { Section } from "../components/Section";
import { H2 } from "../components/Typo/H2";


export function Contact() {

return (
    <>
        <Section id="contact" className="bg-[#4a5f9d]">
            <H2 className="text-[#c8e86f]">Contact us</H2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column - Description */}
            <div className="text-white space-y-6">
                <div className="space-y-4">
                <p className="leading-relaxed">
                    Started in 2025 by students who simply love the game, Heart Soccer Agent began with one belief — football is about people, not just contracts.
                </p>
                <p className="leading-relaxed">
                    We're still learning and growing, but our goal is simple: to be there for players, support their journey, and represent them with honesty and care.
                </p>
                <p className="leading-relaxed">
                    We believe good football starts with trust — not just talent.<br />
                    Let's build that together, one step at a time
                </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/30">
                <p className="leading-relaxed">
                    2025년, 축구를 진심으로 좋아하는 학생들이 모여 하트 사커 에이전트를 시작했습니다.
                </p>
                <p className="leading-relaxed">
                    우리가 믿는 건 단순합니다 — 축구는 계약보다 사람의 이야기입니다.<br />
                    아직 배워가는 중이지만, 우리가 하고 싶은 일은 분명합니다.
                </p>
                <p className="leading-relaxed">
                    선수의 곁에서 함께 고민하고, 솔직함과 진심으로 여정을 돕는 것.<br />
                    좋은 축구는 실력보다 신뢰에서 시작된다고 믿습니다.
                </p>
                <p className="leading-relaxed">
                    그 길을, 한 걸음씩 함께 만들어가고 싶습니다.
                </p>
                </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-8">
                {/* Phone */}
                <div>
                    <h3 className="text-[#c8e86f] text-xl font-semibold mb-3">Phone</h3>
                    <div className="text-white space-y-2">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                            <p>Korea: +82-10-8775-7040</p>
                        </div>
                        <div className="flex items-center gap-2"> 
                              
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"></svg>
                            <p>USA: +1-213-220-6210</p>
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div>
                <h3 className="text-[#c8e86f] text-xl font-semibold mb-3">Email</h3>
                <div className="text-white space-y-2">
                    <a href="mailto:heart.soccer.agent@gmail.com" className="hover:text-[#c8e86f] transition-colors flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        heart.soccer.agent@gmail.com
                    </a>
                    <a href="mailto:justin.swhong2@gmail.com" className="hover:text-[#c8e86f] transition-colors flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"></svg>
                        justin.swhong2@gmail.com
                    </a>
                </div>
                </div>

                {/* Social */}
                <div>
                <h3 className="text-[#c8e86f] text-xl font-semibold mb-3">Social</h3>
                       <div className="text-white space-y-2">
                                
                        <a 
                            href="https://instagram.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-white hover:text-[#c8e86f] transition-colors"
                        >
                            <svg  className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            Instagram
                        </a>
                       </div>
                </div>
            </div>
            </div>
        </Section>

         <Section id="donation" className="bg-[#c8e86f]">
            <H2 className="text-center">Make a Donation</H2>
            <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-10">

                {/* <!-- Text Section --> */}
                <div className="flex-1 text-left">
                    <h3 className="text-2xl font-bold text-gray-800">
                        HEART SOCCER AGENT에 기부하기
                    </h3>
                    <p className="text-gray-600 mt-1">기부는 큰 힘이 됩니다 💕</p>
                    <div className="flex mt-6 gap-10">
                        {/* Account Box */}
                        <div className="flex-2 bg-purple-50 border border-purple-100 rounded-2xl p-5">
                            <div className="text-sm font-semibold text-purple-700">후원 계좌</div>
                            <div className="text-lg font-bold text-gray-800 mt-1">
                            신한은행 110-616-254131
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                            예금주: 하트사커에이전트(HEART SOCCER AGENT)
                            </div>
                        </div>               

                        {/* Image */}
                        <div className="flex-1 flex items-center justify-center bg-pink-50 rounded-3xl shadow-inner">
                            <svg className="w-20 h-20 text-[#fe6490]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </Section>
    </>
);
}