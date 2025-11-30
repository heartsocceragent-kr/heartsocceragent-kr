import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import WhoWeAre from "../pages/WhoWeAre";
import { WhatWeDo } from "../pages/WhatWeDo";
import { News } from "../pages/News";
import { Contact } from "../pages/Contact";


export default function AppRouter() {
return (
<Layout>
    <Routes>
        <Route path="/" element={<WhoWeAre />} />
        <Route path="/who" element={<WhoWeAre />} />
        <Route path="/what" element={<WhatWeDo />} />
        <Route path="/news" element={<News />} />
        {/* <Route path="/news" element={<NewsList />} />
        <Route path="/news/write" element={<NewsWrite />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/news/:id/edit" element={<NewsEdit />} /> */}
        <Route path="/contact" element={<Contact />} />
    </Routes>
</Layout>
);
}