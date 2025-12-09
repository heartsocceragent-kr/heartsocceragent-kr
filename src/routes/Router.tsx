import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import WhoWeAre from "../pages/WhoWeAre";
import { WhatWeDo } from "../pages/WhatWeDo";
import { Contact } from "../pages/Contact";
import { Board } from "../pages/news/NewsList";
import { BoardDetail } from "../pages/news/NewsDetail";
import { BoardEdit } from "../pages/news/NewsEdit";
import { BoardCreate } from "../pages/news/NewsWrite";


export default function AppRouter() {
return (
<Layout>
    <Routes>
        <Route path="/" element={<WhoWeAre />} />
        <Route path="/who" element={<WhoWeAre />} />
        <Route path="/what" element={<WhatWeDo />} />
        {/* <Route path="/news" element={<NewsList />} />
        <Route path="/news/write" element={<NewsWrite />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/news/:id/edit" element={<NewsEdit />} /> */}

        <Route path="/news" element={<Board />} />
        <Route path="/news/create" element={<BoardCreate />} />
        <Route path="/news/:id" element={<BoardDetail />} />
        <Route path="/news/edit/:id" element={<BoardEdit />} />

        <Route path="/contact" element={<Contact />} />
    </Routes>
</Layout>
);
}