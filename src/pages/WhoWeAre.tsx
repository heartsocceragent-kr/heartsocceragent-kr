// import { useScrollToId } from '../hooks/useScrollToId';
// 

import { Section } from "../components/Section";
import { H2 } from "../components/Typo/H2";
import { H3 } from "../components/Typo/H3";
import { H4 } from "../components/Typo/H4";

export default function WhoWeAre() {
// const scrollToId = useScrollToId();
  const items = [
    {
      keyword: "heart",
      desc: [
        "배려하고 나누는 따뜻한 마음이 우리를 하나로 이어줍니다.",
        "작은 마음이 모여 누군가의 하루를 밝히고, 세상을 조금 더 따뜻하게 만듭니다."
      ]
    },
    {
      keyword: "soccer",
      desc: [
        "축구와 팀스포츠는 서로를 이해하고 연결하는 가장 자연스러운 언어입니다.",
        "함께 뛰고 응원하는 순간, 우리는 하나의 팀이 되고 마음이 이어집니다."
      ]
    },
    {
      keyword: "agent",
      desc: [
        "우리는 함께의 힘을 믿습니다.",
        "작은 실천이 모여 변화를 만들고, 서로를 더 나은 방향으로 이끄는 긍정적인 리더십이 됩니다."
      ]
    }
  ];


return (
       <>
      {/* ---------------------- Our Goal ---------------------- */}
      <Section id="goal">
          <H2 className="text-[#23356b]">Our Goal</H2>

          <div className="text-gray-700 flex gap-10">
            <div className="flex-1">
              축구로 마음을 나누다  
              우리는 축구가 사람과 사람을 이어주는 힘을 가지고 있다고 믿는 청소년들입니다.
              경기장에서는 함께 웃고 응원하며 팀워크를 배우고,
              경기장 밖에서는 그 마음으로 지역사회에 따뜻함을 전하고 싶습니다.
              여러분의 후원은 아이들과 청소년들이 축구를 통해 어울리고,
              서로를 이해하고 존중받을 수 있는 안전한 공간을 만드는 데 쓰입니다.
              우리가 넣는 한 골, 함께 뛰는 한 경기마다 세상은 조금 더 따뜻하게 연결됩니다.
            </div>

            <div className="flex-1">
              Sharing Hearts Through Soccer  
              We’re a group of students who believe that soccer has the power to connect people.
              On the field, we laugh, cheer, and learn to work as one team — but beyond the field,
              we hope to use that same spirit to bring warmth and belonging to our community.
              Your support helps us create safe spaces where children, teens, and seniors can come together —
              not just to play, but to feel valued and cared for.
            </div>
          </div>
      </Section>


      {/* ---------------------- Our Identity ---------------------- */}
       <Section id="identity"  className="bg-[#fbfaf8]">
          <H2 className="text-[#23356b]">Our identity</H2>

          <div className="space-y-16">
              {items.map((item, index) => (
              <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6"
              >
                  {/* Left keyword */}
                  <H3 className="text-4xl font-light text-[#23356b]">
                    {item.keyword}
                  </H3>

                  {/* Right description */}
                  <div className="space-y-3 text-lg text-gray-700">
                    {item.desc.map((p, idx) => (
                        <p key={idx}>{p}</p>
                    ))}
                  </div>
              </div>
              ))}
          </div>

          {/* Bottom full-width message */}
          <H4 className="mt-24 text-center font-bold text-xl md:text-2xl leading-relaxed text-[#23356b] font-medium">
              우리는 축구와 다양한 신체 활동을 통해 사람과 사람을 잇고,<br />
              마음을 나누며, 함께 긍정적인 변화를 만들어갑니다.
          </H4>
      </Section>


      {/* ---------------------- Our Team ---------------------- */}
      <Section id="team">
        <H2 className="text-[#23356b]">Our Team</H2>

        <div className="text-gray-700 flex gap-10">
          Sungwook Hong — Founder<br/>
          Started Heart Soccer Agent with the belief that football is about people, not just contracts. <br/>
          He leads the team with care and keeps everyone grounded in its purpose.<br/><br/>

          Jiho Kim — Team Operations<br/>
          Keeps things organized and helps the team stay connected with players and partners.<br/><br/>

          Yoonsung Hong — Player Support<br/>
          Works closely with players, listening to their stories and helping them grow both on and off the field.<br/><br/>

          Hansol Kim — Creative & Media<br/>
          Handles design and storytelling, giving shape to the team’s ideas and spirit.<br/><br/>

          Taehee Han — Research & Strategy<br/>
          Looks into data and insights that help the team better understand players’ needs.<br/><br/>

          Juwon Choi — Communications<br/>
          Manages messages, updates, and social media to share what Heart Soccer Agent stands for.
        </div>
      </Section>


      {/* ---------------------- Stories from us ---------------------- */}
      <Section id="stories" className="bg-[#fbfaf8]">
          <H2 className="text-[#23356b]">Stories from us</H2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
              <div className="flex flex-col">
                {/* Quote */}
                <p className="text-[#23356b] text-base leading-relaxed mb-8 flex-1">
                  “We started Heart Soccer Agent because we wanted football to feel human again.
 It’s not about managing players — it’s about growing with them.”
                </p>

                {/* Image */}
                <div className="mb-6">
                  <img 
                    src="/images/sungwook.jpg" 
                    alt="Sungwook Hong"
                    className="w-full aspect-[4/3] object-cover rounded-lg"
                  />
                </div>

                {/* Name with underline */}
                <div className="border-b-2 border-[#c8e86f] pb-2">
                  <h3 className="text-[#23356b] text-xl font-medium">
                    Sungwook Hong
                  </h3>
                </div>
              </div>
              <div className="flex flex-col">
                {/* Quote */}
                <p className="text-[#23356b] text-base leading-relaxed mb-8 flex-1">
                   “We’re still learning, and that’s the best part.
 Every meeting, every story from a player reminds me why we started this.”
                </p>

                {/* Image */}
                <div className="mb-6">
                  <img 
                    src="/images/jiho.jpg" 
                    alt="Jiho Kim"
                    className="w-full aspect-[4/3] object-cover rounded-lg"
                  />
                </div>

                {/* Name with underline */}
                <div className="border-b-2 border-[#c8e86f] pb-2">
                  <h3 className="text-[#23356b] text-xl font-medium">
                    Jiho Kim
                  </h3>
                </div>
              </div>
              <div className="flex flex-col">
                {/* Quote */}
                <p className="text-[#23356b] text-base leading-relaxed mb-8 flex-1">
                “When I listen to players talk about their dreams, I see more than talent — I see people who just need someone to believe in them.
 That’s what I want us to be.”
                </p>

                {/* Image */}
                <div className="mb-6">
                  <img 
                    src="/images/yoonsung.jpg" 
                    alt="Yoonsung"
                    className="w-full aspect-[4/3] object-cover rounded-lg"
                  />
                </div>

                {/* Name with underline */}
                <div className="border-b-2 border-[#c8e86f] pb-2">
                  <h3 className="text-[#23356b] text-xl font-medium">
                    Yoonsung
                  </h3>
                </div>
              </div>
  
          </div>
      </Section>


      {/* ---------------------- Our Vision ---------------------- */}
      <Section id="vision">

          <H2 className="text-[#23356b]">Our Vision</H2>

          <div className="flex flex-col justify-center md:flex-row text-gray-700 gap-10">
            <div className="flex-1">
              <H3 className="text-[#23356b]">Vision</H3>
              <p>축구를 통해 사회적 약자, 아동, 청소년의 
              꿈과 희망을 응원하고 마음을 함께 나누는 실천 공동체
              </p>
            </div>
            <div  className=" flex items-center justify-center">
              <img src="/images/logo.jpg" alt="" />
            </div>

            <div className="flex-1">
              <H3 className="text-[#23356b]">Mission</H3>
              <p>- 정기적인 기관방문을 통한 봉사 활동 수행<br/>
              - 스포츠를 통한 정서적 소통과 멘토링<br/>
              - 건강하고 올바른 사회인으로서 청년의 사회적 책임 실천
              </p>
            </div>
          </div>
      </Section>
      </>
);
}