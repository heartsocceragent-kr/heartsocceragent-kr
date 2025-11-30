// import { useScrollToId } from '../hooks/useScrollToId';

import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { H2 } from "../components/Typo/H2";


export function WhatWeDo() {
// const scrollToId = useScrollToId();

return (
    <>
        <Section id="days">
            <H2 className='text-[#8bc34a]'>Our days</H2>
            <div className="flex gap-10 text-center [&>*]:p-6 [&>*]:rounded-lg [&>*]:bg-[#fbfaf8] md:[&>*]:flex-1">
                <div>
                    01. Arrival & Warm-up<br/>
                    We start the day by greeting every child with warmth and a smile.<br/>
                    Through short introductions and light stretches, we help everyone feel comfortable and ready to move together as a team.
                    <br/><br/>
                    01. 도착 & 몸풀기<br/>
                    아이들을 따뜻하게 맞이하며 하루를 시작합니다.<br/>
                    간단한 자기소개와 스트레칭을 하며 서로의 긴장을 풀고, 함께 움직일 준비를 합니다.
                </div>
                <div>
                    02. Soccer Practice & Games<br/>
                    We focus on basic skills, passing, and fun mini games that build teamwork and confidence.<br/>
                    It’s less about winning — more about sharing joy, learning cooperation, and celebrating small efforts.<br/><br/>
                    02. 축구 연습 & 게임<br/>
                    기본기와 패스, 미니게임을 통해 협동심과 자신감을 기릅니다.<br/>
                    승패보다 함께 뛰며 즐기고, 서로를 응원하는 마음을 배웁니다.
                </div>
                <div>
                    03. Mentoring Time<br/>
                    After the games, we sit together to talk and listen.<br/>
                    Mentors share their stories, and children open up about their dreams.<br/>
                    Real connection happens through honest talk and encouragement.
                    <br/><br/>
                    03. 멘토링 시간<br/>
                    운동하는 중에도, 그리고 운동 후에도 우리는 함께 이야기를 나눕니다.<br/>
                    멘토는 자신의 경험을 들려주고, 아이들은 각자의 꿈과 생각을 이야기합니다. 진심 어린 대화와 응원이 오가며 마음이 자연스럽게 이어집니다.<br/>
                </div>
                <div>
                    04. Wrap-up & Gifts<br/>
                    To close the day, we share snacks, take group photos, and hand out small HSA gifts.<br/>
                    It’s a time to remind everyone that kindness, effort, and laughter make us all stronger.
                    <br/><br/>
                    04. 마무리 & 선물<br/>
                    마지막으로 간식을 나누고, 함께한 하루를 사진으로 남깁니다.<br/>
                    HSA의 작은 선물과 함께 긍정적인 메시지를 전하며 하루를 마칩니다.<br/>
                </div>
            </div>
        </Section>
         {/* Our Engagement */}
      <Section id="engagement" className='bg-[#fbfaf8]'>
        <H2 className="text-[#8bc34a]">Our Engagement</H2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Target Group */}
          <div>
            <h3 className="text-2xl font-semibold text-[#8bc34a] mb-6">target group</h3>
            <p className="text-gray-700 leading-relaxed">
              소외된 사회 계층, 보육원 아동, 장애인<br/>
              시설, 기초 청소년, 복지기관 등
            </p>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-2xl font-semibold text-[#8bc34a] mb-6">activities</h3>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>• 축구 수업, 천천 경기, 멘토링,</li>
              <li className="ml-4">기부 이벤트 등</li>
              <li>• 그 외의 스포츠 봉사활동</li>
            </ul>
          </div>

          {/* How Often */}
          <div>
            <h3 className="text-2xl font-semibold text-[#8bc34a] mb-6">how often</h3>
            <p className="text-gray-700 leading-relaxed">
              한 달에 한 번 방문 활동<br/>
              주 1회 자체 시험 및 미팅
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <button className="bg-[#8bc34a] text-white py-4 rounded-lg font-semibold hover:bg-[#7cb342] transition-colors">
            CONTACT
          </button>
          <button className="bg-[#8bc34a] text-white py-4 rounded-lg font-semibold hover:bg-[#7cb342] transition-colors">
            PHOTOS
          </button>
          <button className="bg-[#8bc34a] text-white py-4 rounded-lg font-semibold hover:bg-[#7cb342] transition-colors">
            PHOTOS
          </button>
        </div>
      </Section>

      {/* Our Impact */}
      <Section id="impact">
        <H2 className="text-[#8bc34a]">Our Impact</H2>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 mt-12">
          {/* Left - Categories */}
          <div className="space-y-4">
            <div className="bg-[#8bc34a] text-white py-4 px-6 rounded-lg font-semibold text-center">
              NEWFOUND CONFIDENCE & SELF-<br/>DEVELOPMENT
            </div>
            <div className="bg-[#8bc34a] text-white py-4 px-6 rounded-lg font-semibold text-center">
              LONG-LASTING & SUPPORTIVE<br/>RELATIONSHIP
            </div>
            <div className="bg-[#8bc34a] text-white py-4 px-6 rounded-lg font-semibold text-center">
              ENHANCED EMPATHY & INCLUSIVITY
            </div>
            <div className="bg-[#8bc34a] text-white py-4 px-6 rounded-lg font-semibold text-center">
              HEALTHY LIFESTYLE & NEW<br/>CHALLENGES
            </div>
          </div>

          {/* Right - Description */}
          <div className="flex items-center">
            <div className="text-gray-700 text-lg md:text-xl leading-relaxed space-y-4">
              <p>HSA는 함께하는 모든 이들이 웃고 배우며</p>
              <p>진심으로 마음을 나눌 수 있는 시간을 만들고자 합니다.</p>
              <p>팀 스포츠와 다양한 활동을 통해 새로운 경험에 도전하고,</p>
              <p>자존감과 자립심을 키워 나가며, 따뜻한 관계를 바탕으로</p>
              <p>세상에 긍정적인 영향을 전하는 것을 목표로 합니다.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Partner Organizations */}
      <Section id="organizations" className='bg-[#fbfaf8]'>
        <H2 className="text-[#8bc34a]">Partner Organizations</H2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {/* Organization 1 */}
          <div>
            <div className="bg-[#8bc34a] hover:bg-[#85b949] text-white py-4 px-6 rounded-lg font-semibold text-center mb-4">
              <Link to="https://www.annahouse.or.kr/" className="">안나의 집</Link>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              보호가 필요한 청소년을 대상으로 급식·상담·저녁 지원 등 복지 서비스를 제공하는 종합 사회복지기관
            </p>
          </div>

          {/* Organization 2 */}
          <div>
            <div className="bg-[#8bc34a] hover:bg-[#85b949] text-white py-4 px-6 rounded-lg font-semibold text-center mb-4">
               <Link to="https://www.kofdo.kr/" className="">한국장애인단체총연맹</Link>
              
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              장애인의 권익 신장과 인권 옹호를 위해 정책 제안, 제도 개선, 인식 개선 캠페인을 펼치는 전국 규모의 장애인 연합기구
            </p>
          </div>

          {/* Organization 3 */}
          <div>
            <div className="bg-[#8bc34a] hover:bg-[#85b949] text-white py-4 px-6 rounded-lg font-semibold text-center mb-4">
              <Link to="http://www.team12.co.kr/" className="">팀트웰브</Link>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              발달장애 청소년의 예술·체육 활동을 지원하고 사회 통합을 돕는 비영리 단체
            </p>
          </div>

          {/* Organization 4 */}
          <div>
            <div className="bg-[#8bc34a] text-white py-4 px-6 rounded-lg font-semibold text-center mb-4">
              AND YOU!
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              그리고 당신!<br/>
              우리 함께 변화를 만들어가요!
            </p>
          </div>
        </div>

        <p className="text-center text-gray-700 text-lg mt-12">
          함께라서 가능한 이야기가 우리의 만남이 더 큰 변화를 만들어갑니다.
        </p>
      </Section>

      {/* Future Outlook */}
      <Section id="outlook">
        <H2 className="text-[#8bc34a]">Future Outlook</H2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {/* Card 1 */}
          <div>
            <div className="bg-[#8bc34a] text-[#23356b] py-4 px-6 rounded-lg font-semibold text-center mb-4">
              COLLABORATION AND<br/>SPONSOR SHIPS
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              스포츠 브랜드 및 지자체,<br/>
              기업과의 MOU 체결을 통해 안정<br/>
              적인 기금 마련
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <div className="bg-[#8bc34a] text-[#23356b] py-4 px-6 rounded-lg font-semibold text-center mb-4">
              PARTICIPATING INSTITUTIONS
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              서울, 경기 외 보호시설 및<br/>
              복지기관과의 연계 추진
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <div className="bg-[#8bc34a] text-[#23356b] py-4 px-6 rounded-lg font-semibold text-center mb-4">
              FUNDRAISING AND DONATION<br/>THROUGH<br/>TOURNAMENTS & FESTIVALS
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              모두가 함께 참여할 수 있는 다양한<br/>
              교류 행사 및 자선 경기 추최
            </p>
          </div>

          {/* Card 4 */}
          <div>
            <div className="bg-[#8bc34a] text-[#23356b] py-4 px-6 rounded-lg font-semibold text-center mb-4">
              NEWFOUND CONFIDENCE & SELF-<br/>DEVELOPMENT
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              장학금 지원 또는<br/>
              전문 멘토링 프로그램
            </p>
          </div>
        </div>

        <p className="text-center text-[#23356b] text-lg font-medium mt-12">
          스포츠를 통해 모두가 함께하는 더 나은 미래를 만들어갑니다.
        </p>
      </Section>
    </>
);
}