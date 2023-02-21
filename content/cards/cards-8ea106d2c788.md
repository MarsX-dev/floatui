---
title: Blog Cards Secondary
category: Application
paid: false
isActive: true
ltr: {"vue":{"vueTail":[{"code":"<template>\n  <section class=\"mt-12 mx-auto px-4 max-w-screen-xl lg:px-8\">\n    <div class=\"max-w-lg\">\n      <h1 class=\"text-3xl text-gray-800 font-semibold\">\n        Blog\n      </h1>\n      <p class=\"mt-3 text-gray-500\">\n        Blogs that are loved by the community. Updated every hour.\n        The powerful gravity waves resulting from the impact of the planets, were finally resolved in 2015\n      </p>\n    </div>\n    <div class=\"mt-12 grid gap-4 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3\">\n      <article class=\"mt-5 pt-8 md:pt-0\" v-for=\"item in posts\" :key=\"item.id\">\n        <a :href=\"item.href\">\n          <span class=\"block text-gray-400 text-sm\">\n            {{item.date}}\n          </span>\n          <div class=\"mt-2\">\n            <h3 class=\"text-xl text-gray-900 font-semibold hover:underline\">\n              {{item.title}}\n            </h3>\n            <p class=\"text-gray-400 mt-1 leading-relaxed\">\n              {{item.desc}}\n            </p>\n          </div>\n          <button\n            class=\"mt-2 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline\">\n            READ MORE\n            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-3 w-3 ml-2\" fill=\"none\" viewBox=\"0 0 24 24\"\n              stroke=\"currentColor\">\n              <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M17 8l4 4m0 0l-4 4m4-4H3\" />\n            </svg>\n          </button>\n        </a>\n      </article>\n    </div>\n  </section>\n</template>\n\n<script>\nexport default {\n  data: function () {\n    return {\n      posts: [\n        {\n          title: \"What is SaaS? Software as a Service Explained\",\n          desc: \"Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some\",\n          date: \"Thursday, December 9th 2021\",\n          href: \"javascript:void(0)\"\n        },\n        {\n          title: \"A Quick Guide to WordPress Hosting\",\n          desc: \"According to him, Ã¢â‚¬Å“I'm still surprised that this has happened. But we are surprised because we are so surprised.Ã¢â‚¬ÂMore revelations about Whittington will be featured in the film\",\n          date: \"Thursday, December 9th 2021\",\n          href: \"javascript:void(0)\"\n        },\n        {\n          title: \"7 Promising VS Code Extensions Introduced in 2022\",\n          desc: \"I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that\",\n          date: \"Thursday, December 9th 2021\",\n          href: \"javascript:void(0)\"\n        },\n        {\n          title: \"How to Use Root C++ Interpreter Shell to Write C++ Programs\",\n          desc: \"The powerful gravity waves resulting from the impact of the planets' moons Ã¢â‚¬â€ four in total Ã¢â‚¬â€ were finally resolved in 2015 when gravitational microlensing was used to observe the\",\n          date: \"Thursday, December 9th 2021\",\n          href: \"javascript:void(0)\"\n        }\n      ]\n    }\n  }\n}\n</script>","label":"App.vue"}],"vueCss":[{"label":"App.vue","code":"<template>\n  <section class=\"cards-secondary\">\n    <div class=\"cards-header\">\n      <h1>\n        Blog\n      </h1>\n      <p>\n        Blogs that are loved by the community. Updated every hour.\n        The powerful gravity waves resulting from the impact of the planets, were finally resolved in 2015\n      </p>\n    </div>\n    <div class=\"cards-container\">\n      <article class=\"card-container\" v-for=\"item in posts\" :key=\"item.id\">\n        <a :href=\"item.href\" class=\"card\">\n          <span class=\"date\">\n            {{ item.date }}\n          </span>\n          <div class=\"card-details\">\n            <h3>\n              {{ item.title }}\n            </h3>\n            <p>\n              {{ item.desc }}\n            </p>\n          </div>\n          <button class=\"read-more-btn\">\n            READ MORE\n            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n              <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M17 8l4 4m0 0l-4 4m4-4H3\" />\n            </svg>\n          </button>\n        </a>\n      </article>\n    </div>\n  </section>\n</template>\n\n<script>\nexport default {\n  data: function () {\n    return {\n      posts: [\n        {\n          title: \"What is SaaS? Software as a Service Explained\",\n          desc: \"Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some\",\n          date: \"Thursday, December 9th 2021\",\n          href: \"javascript:void(0)\"\n        },\n        {\n          title: \"A Quick Guide to WordPress Hosting\",\n          desc: \"According to him, Ã¢â‚¬Å“I'm still surprised that this has happened. But we are surprised because we are so surprised.Ã¢â‚¬ÂMore revelations about Whittington will be featured in the film\",\n          date: \"Thursday, December 9th 2021\",\n          href: \"javascript:void(0)\"\n        },\n        {\n          title: \"7 Promising VS Code Extensions Introduced in 2022\",\n          desc: \"I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that\",\n          date: \"Thursday, December 9th 2021\",\n          href: \"javascript:void(0)\"\n        },\n        {\n          title: \"How to Use Root C++ Interpreter Shell to Write C++ Programs\",\n          desc: \"The powerful gravity waves resulting from the impact of the planets' moons Ã¢â‚¬â€ four in total Ã¢â‚¬â€ were finally resolved in 2015 when gravitational microlensing was used to observe the\",\n          date: \"Thursday, December 9th 2021\",\n          href: \"javascript:void(0)\"\n        }\n      ]\n    }\n  }\n}\n</script>"},{"code":".cards-secondary {\n  margin: 3rem auto 0px auto;\n  padding: 0px 1rem 0px 1rem;\n  max-width: 1280px;\n}\n\n@media (min-width: 1024px) {\n  .cards-secondary {\n    padding: 0px 2rem 0px 2rem;\n  }\n}\n\n.cards-secondary .cards-header {\n  max-width: 32rem;\n}\n\n.cards-secondary .cards-header h1 {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n  color: #1f2937;\n  font-weight: 600;\n}\n\n.cards-secondary .cards-header p {\n  margin-top: 0.75rem;\n  color: #6b7280;\n}\n\n.cards-secondary .cards-container {\n  margin-top: 3rem;\n  display: grid;\n  gap: 1rem;\n}\n\n.cards-secondary .cards-container>* {\n  border-top-width: 0px;\n  border-bottom-width: 1px;\n  border-bottom-color: #e5e7eb;\n}\n\n@media (min-width: 768px) {\n  .cards-secondary .cards-container {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .cards-secondary .cards-container>* {\n    border-top-width: 0px;\n    border-bottom-width: 0px;\n    border-bottom-color: #e5e7eb;\n  }\n}\n\n@media (min-width: 1024px) {\n  .cards-secondary .cards-container {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n.cards-secondary .cards-container .card-container {\n  margin-top: 1.25rem;\n  padding-bottom: 2rem;\n}\n\n@media (min-width: 768px) {\n  .cards-secondary .cards-container .card-container {\n    padding-top: 0px;\n  }\n}\n\n.cards-secondary .cards-container .card-container .card .date {\n  display: block;\n  color: #9ca3af;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.cards-secondary .cards-container .card-container .card .card-details {\n  margin-top: 0.5rem;\n}\n\n.cards-secondary .cards-container .card-container .card .card-details h3 {\n  color: #111827;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n}\n\n.cards-secondary .cards-container .card-container .card .card-details h3:hover {\n  text-decoration: underline;\n}\n\n.cards-secondary .cards-container .card-container .card .card-details p {\n  margin-top: 0.25rem;\n  color: #9ca3af;\n  line-height: 1.625;\n}\n\n.cards-secondary .cards-container .card-container .card .read-more-btn {\n  margin-top: 0.5rem;\n  outline: none;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  color: #2563eb;\n  text-decoration-color: #2563eb;\n}\n\n.cards-secondary .cards-container .card-container .card .read-more-btn:hover {\n  text-decoration: underline;\n}\n\n.cards-secondary .cards-container .card-container .card .read-more-btn svg {\n  width: 0.75rem;\n  height: 0.75rem;\n  margin-left: 0.5rem;\n}","label":"style.css"}]},"preview":"function App() {\n  const posts = [{\n    title: \"What is SaaS? Software as a Service Explained\",\n    desc: \"Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some\",\n    date: \"Thursday, December 9th 2021\",\n    href: \"javascript:void(0)\"\n  }, {\n    title: \"A Quick Guide to WordPress Hosting\",\n    desc: \"According to him, Ã¢â‚¬Å“I'm still surprised that this has happened. But we are surprised because we are so surprised.Ã¢â‚¬ÂMore revelations about Whittington will be featured in the film\",\n    date: \"Thursday, December 9th 2021\",\n    href: \"javascript:void(0)\"\n  }, {\n    title: \"7 Promising VS Code Extensions Introduced in 2022\",\n    desc: \"I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that\",\n    date: \"Thursday, December 9th 2021\",\n    href: \"javascript:void(0)\"\n  }, {\n    title: \"How to Use Root C++ Interpreter Shell to Write C++ Programs\",\n    desc: \"The powerful gravity waves resulting from the impact of the planets' moons Ã¢â‚¬â€ four in total Ã¢â‚¬â€ were finally resolved in 2015 when gravitational microlensing was used to observe the\",\n    date: \"Thursday, December 9th 2021\",\n    href: \"javascript:void(0)\"\n  }];\n  return /*#__PURE__*/React.createElement(\"section\", {\n    className: \"py-12 mx-auto px-4 max-w-screen-xl md:px-8\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"max-w-lg\"\n  }, /*#__PURE__*/React.createElement(\"h1\", {\n    className: \"text-3xl text-gray-800 font-semibold\"\n  }, \"Blog\"), /*#__PURE__*/React.createElement(\"p\", {\n    className: \"mt-3 text-gray-500\"\n  }, \"Blogs that are loved by the community. Updated every hour. The powerful gravity waves resulting from the impact of the planets, were finally resolved in 2015\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"mt-12 grid gap-4 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3\"\n  }, posts.map((item, idx) => /*#__PURE__*/React.createElement(\"article\", {\n    className: \"mt-5 pt-8 md:pt-0\",\n    key: idx\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: item.href\n  }, /*#__PURE__*/React.createElement(\"span\", {\n    className: \"block text-gray-400 text-sm\"\n  }, item.date), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"mt-2\"\n  }, /*#__PURE__*/React.createElement(\"h3\", {\n    className: \"text-xl text-gray-900 font-semibold hover:underline\"\n  }, item.title), /*#__PURE__*/React.createElement(\"p\", {\n    className: \"text-gray-400 mt-1 leading-relaxed\"\n  }, item.desc)), /*#__PURE__*/React.createElement(\"button\", {\n    className: \"mt-2 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline\"\n  }, \"READ MORE\", /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    className: \"h-3 w-3 ml-2\",\n    fill: \"none\",\n    viewBox: \"0 0 24 24\",\n    stroke: \"currentColor\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\",\n    strokeWidth: 2,\n    d: \"M17 8l4 4m0 0l-4 4m4-4H3\"\n  }))))))));\n}","react":{"jsxCss":[{"label":"App.jsx","code":"export default () => {\n\n    const posts = [\n        {\n            title: \"What is SaaS? Software as a Service Explained\",\n            desc: \"Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some\",\n            date: \"Thursday, December 9th 2021\",\n            href: \"javascript:void(0)\"\n        },\n        {\n            title: \"A Quick Guide to WordPress Hosting\",\n            desc: \"According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film\",\n            date: \"Thursday, December 9th 2021\",\n            href: \"javascript:void(0)\"\n        },\n        {\n            title: \"7 Promising VS Code Extensions Introduced in 2022\",\n            desc: \"I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that\",\n            date: \"Thursday, December 9th 2021\",\n            href: \"javascript:void(0)\"\n        },\n        {\n            title: \"How to Use Root C++ Interpreter Shell to Write C++ Programs\",\n            desc: \"The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the\",\n            date: \"Thursday, December 9th 2021\",\n            href: \"javascript:void(0)\"\n        }\n    ]\n    \n    return (\n        <section className=\"cards-secondary\">\n            <div className=\"cards-header\">\n                <h1>\n                    Blog\n                </h1>\n                <p>\n                    Blogs that are loved by the community. Updated every hour.\n                    The powerful gravity waves resulting from the impact of the planets, were finally resolved in 2015\n                </p>\n            </div>\n            <div className=\"cards-container\">\n                {\n                    posts.map((item, idx) => (\n                        <article className=\"card-container\" key={idx}>\n                            <a href={item.href} className=\"card\">\n                                <span className=\"date\">\n                                    {item.date}\n                                </span>\n                                <div className=\"card-details\">\n                                    <h3>\n                                        {item.title}\n                                    </h3>\n                                    <p>\n                                        {item.desc}\n                                    </p>\n                                </div>\n                                <button className=\"read-more-btn\">\n                                    READ MORE\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                                        <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M17 8l4 4m0 0l-4 4m4-4H3\" />\n                                    </svg>\n                                </button>\n                            </a>\n                        </article>\n                    ))\n                }\n            </div>\n        </section>\n    )\n}\n"},{"code":".cards-secondary {\n  margin: 3rem auto 0px auto;\n  padding: 0px 1rem 0px 1rem;\n  max-width: 1280px;\n}\n@media (min-width: 1024px) {\n  .cards-secondary {\n    padding: 0px 2rem 0px 2rem;\n  }\n}\n.cards-secondary .cards-header {\n  max-width: 32rem;\n}\n.cards-secondary .cards-header h1 {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n  color: #1f2937;\n  font-weight: 600;\n}\n.cards-secondary .cards-header p {\n  margin-top: 0.75rem;\n  color: #6b7280;\n}\n.cards-secondary .cards-container {\n  margin-top: 3rem;\n  display: grid;\n  gap: 1rem;\n}\n.cards-secondary .cards-container > * {\n  border-top-width: 0px;\n  border-bottom-width: 1px;\n  border-bottom-color: #e5e7eb;\n}\n@media (min-width: 768px) {\n  .cards-secondary .cards-container {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .cards-secondary .cards-container > * {\n    border-top-width: 0px;\n    border-bottom-width: 0px;\n    border-bottom-color: #e5e7eb;\n  }\n}\n@media (min-width: 1024px) {\n  .cards-secondary .cards-container {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n.cards-secondary .cards-container .card-container {\n  margin-top: 1.25rem;\n  padding-bottom: 2rem;\n}\n@media (min-width: 768px) {\n  .cards-secondary .cards-container .card-container {\n    padding-top: 0px;\n  }\n}\n.cards-secondary .cards-container .card-container .card .date {\n  display: block;\n  color: #9ca3af;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.cards-secondary .cards-container .card-container .card .card-details {\n  margin-top: 0.5rem;\n}\n.cards-secondary .cards-container .card-container .card .card-details h3 {\n  color: #111827;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n}\n.cards-secondary .cards-container .card-container .card .card-details h3:hover {\n  text-decoration: underline;\n}\n.cards-secondary .cards-container .card-container .card .card-details p {\n  margin-top: 0.25rem;\n  color: #9ca3af;\n  line-height: 1.625;\n}\n.cards-secondary .cards-container .card-container .card .read-more-btn {\n  margin-top: 0.5rem;\n  outline: none;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  color: #2563eb;\n  text-decoration-color: #2563eb;\n}\n.cards-secondary .cards-container .card-container .card .read-more-btn:hover {\n  text-decoration: underline;\n}\n.cards-secondary .cards-container .card-container .card .read-more-btn svg {\n  width: 0.75rem;\n  height: 0.75rem;\n  margin-left: 0.5rem;\n}\n","label":"style.css"}],"jsxTail":[{"code":"export default () => {\n\n    const posts = [\n        {\n            title: \"What is SaaS? Software as a Service Explained\",\n            desc: \"Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some\",\n            date: \"Thursday, December 9th 2021\",\n            href: \"javascript:void(0)\"\n        },\n        {\n            title: \"A Quick Guide to WordPress Hosting\",\n            desc: \"According to him, Ã¢â‚¬Å“I'm still surprised that this has happened. But we are surprised because we are so surprised.Ã¢â‚¬ÂMore revelations about Whittington will be featured in the film\",\n            date: \"Thursday, December 9th 2021\",\n            href: \"javascript:void(0)\"\n        },\n        {\n            title: \"7 Promising VS Code Extensions Introduced in 2022\",\n            desc: \"I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that\",\n            date: \"Thursday, December 9th 2021\",\n            href: \"javascript:void(0)\"\n        },\n        {\n            title: \"How to Use Root C++ Interpreter Shell to Write C++ Programs\",\n            desc: \"The powerful gravity waves resulting from the impact of the planets' moons Ã¢â‚¬â€ four in total Ã¢â‚¬â€ were finally resolved in 2015 when gravitational microlensing was used to observe the\",\n            date: \"Thursday, December 9th 2021\",\n            href: \"javascript:void(0)\"\n        }\n    ]\n    \n    return (\n        <section className=\"mt-12 mx-auto px-4 max-w-screen-xl md:px-8\">\n            <div className=\"max-w-lg\">\n                <h1 className=\"text-3xl text-gray-800 font-semibold\">\n                    Blog\n                </h1>\n                <p className=\"mt-3 text-gray-500\">\n                    Blogs that are loved by the community. Updated every hour.\n                    The powerful gravity waves resulting from the impact of the planets, were finally resolved in 2015\n                </p>\n            </div>\n            <div className=\"mt-12 grid gap-4 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3\">\n                {\n                    posts.map((item, idx) => (\n                        <article className=\"mt-5 pt-8 md:pt-0\" key={idx}>\n                            <a href={item.href}>\n                                <span className=\"block text-gray-400 text-sm\">\n                                    {item.date}\n                                </span>\n                                <div className=\"mt-2\">\n                                    <h3 className=\"text-xl text-gray-900 font-semibold hover:underline\">\n                                        {item.title}\n                                    </h3>\n                                    <p className=\"text-gray-400 mt-1 leading-relaxed\">\n                                        {item.desc}\n                                    </p>\n                                </div>\n                                <button className=\"mt-2 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline\">\n                                    READ MORE\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" className=\"h-3 w-3 ml-2\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                                        <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M17 8l4 4m0 0l-4 4m4-4H3\" />\n                                    </svg>\n                                </button>\n                            </a>\n                        </article>\n                    ))\n                }\n            </div>\n        </section>\n    )\n}\n","label":"App.jsx"}]}}
rtl: {"preview":"function App() {\n  const posts = [{\n    title: \"ما هو SaaS؟ شرح البرمجيات كخدمة\",\n    desc: \"أثناء خوض هذه الرحلة، كان لدي نظام علاجي قياسي، يعتمد على النظر في الأدبيات البحثية. بعد أن شاهدت الفيلم، بدأت أسأل الآخرين عما فعلوه من أجل قلقهم، وبعضهم\",\n    date: \"Thursday, December 9th 2021\",\n    href: \"javascript:void(0)\"\n  }, {\n    title: \"دليل سريع لاستضافة WordPress\",\n    desc: \"وبحسب قوله، ما زلت متفاجئًا بحدوث ذلك. لكننا فوجئنا لأننا فوجئنا للغاية. سيظهر المزيد من الكشف عن ويتينغتون في الفيلم.\",\n    date: \"Thursday, December 9th 2021\",\n    href: \"javascript:void(0)\"\n  }, {\n    title: \"7 امتدادات واعدة للرمز VS تم تقديمها في عام 2022\",\n    desc: \"آمل أن أتذكر كل الأشياء التي كانوا بحاجة إلى معرفتها. إنهم يحبون ، 'حسنًا' ، ويكتبونها في دفاتر القراءة الصغيرة الخاصة بهم. أدركت اليوم أن لدي كل هذه\",\n    date: \"Thursday, December 9th 2021\",\n    href: \"javascript:void(0)\"\n  }, {\n    title: \"كيفية استخدام Root C ++ Interpreter Shell لكتابة برامج C ++\",\n    desc: \"تم حل موجات الجاذبية القوية الناتجة عن تأثير أقمار الكواكب - أربعة في المجموع - أخيرًا في عام 2015 عندما تم استخدام عدسة الجاذبية الدقيقة لرصد\",\n    date: \"Thursday, December 9th 2021\",\n    href: \"javascript:void(0)\"\n  }];\n  return /*#__PURE__*/React.createElement(\"section\", {\n    className: \"py-12 mx-auto px-4 max-w-screen-xl md:px-8\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"max-w-lg\"\n  }, /*#__PURE__*/React.createElement(\"h1\", {\n    className: \"text-3xl text-gray-800 font-semibold\"\n  }, \"\\u0627\\u0644\\u0645\\u0642\\u0627\\u0644\\u0627\\u062A\"), /*#__PURE__*/React.createElement(\"p\", {\n    className: \"mt-3 text-gray-500\"\n  }, \"\\u0627\\u0644\\u0645\\u062F\\u0648\\u0646\\u0627\\u062A \\u0627\\u0644\\u062A\\u064A \\u064A\\u062D\\u0628\\u0647\\u0627 \\u0627\\u0644\\u0645\\u062C\\u062A\\u0645\\u0639. \\u064A\\u062A\\u0645 \\u062A\\u062D\\u062F\\u064A\\u062B\\u0647\\u0627 \\u0643\\u0644 \\u0633\\u0627\\u0639\\u0629. \\u062A\\u0645 \\u062D\\u0644 \\u0645\\u0648\\u062C\\u0627\\u062A \\u0627\\u0644\\u062C\\u0627\\u0630\\u0628\\u064A\\u0629 \\u0627\\u0644\\u0642\\u0648\\u064A\\u0629 \\u0627\\u0644\\u0646\\u0627\\u062A\\u062C\\u0629 \\u0639\\u0646 \\u062A\\u0623\\u062B\\u064A\\u0631 \\u0627\\u0644\\u0643\\u0648\\u0627\\u0643\\u0628 \\u0623\\u062E\\u064A\\u0631\\u064B\\u0627 \\u0641\\u064A \\u0639\\u0627\\u0645 2015\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"mt-12 grid gap-4 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3\"\n  }, posts.map((item, idx) => /*#__PURE__*/React.createElement(\"article\", {\n    className: \"mt-5 pt-8 md:pt-0\",\n    key: idx\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: item.href\n  }, /*#__PURE__*/React.createElement(\"span\", {\n    className: \"block text-gray-400 text-sm\"\n  }, item.date), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"mt-2\"\n  }, /*#__PURE__*/React.createElement(\"h3\", {\n    className: \"text-xl text-gray-900 font-semibold hover:underline\"\n  }, item.title), /*#__PURE__*/React.createElement(\"p\", {\n    className: \"text-gray-400 mt-1 leading-relaxed\"\n  }, item.desc)), /*#__PURE__*/React.createElement(\"button\", {\n    className: \"mt-2 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline\"\n  }, \"\\u0627\\u0642\\u0631\\u0623 \\u0623\\u0643\\u062B\\u0631\", /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    class: \"h-3 w-3 mr-1\",\n    viewBox: \"0 0 20 20\",\n    fill: \"currentColor\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    \"fill-rule\": \"evenodd\",\n    d: \"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z\",\n    \"clip-rule\": \"evenodd\"\n  }))))))));\n}","react":{"jsxCss":[{"label":"App.jsx","code":"export default () => {\n\n    const posts = [\n        {\n            title: \"ما هو SaaS؟ شرح البرمجيات كخدمة\",\n            desc: \"أثناء خوض هذه الرحلة، كان لدي نظام علاجي قياسي، يعتمد على النظر في الأدبيات البحثية. بعد أن شاهدت الفيلم، بدأت أسأل الآخرين عما فعلوه من أجل قلقهم، وبعضهم\",\n            date: \"الثلثاء, ديسمبر, 9 2022\",\n            href: \"javascript:void(0)\"\n        },\n        {\n            title: \"دليل سريع لاستضافة WordPress\",\n            desc: \"وبحسب قوله، ما زلت متفاجئًا بحدوث ذلك. لكننا فوجئنا لأننا فوجئنا للغاية. سيظهر المزيد من الكشف عن ويتينغتون في الفيلم.\",\n            date: \"الثلثاء, ديسمبر, 9 2022\",\n            href: \"javascript:void(0)\"\n        },\n        {\n            title: \"7 امتدادات واعدة للرمز VS تم تقديمها في عام 2022\",\n            desc: \"آمل أن أتذكر كل الأشياء التي كانوا بحاجة إلى معرفتها. إنهم يحبون ، 'حسنًا' ، ويكتبونها في دفاتر القراءة الصغيرة الخاصة بهم. أدركت اليوم أن لدي كل هذه\",\n            date: \"الثلثاء, ديسمبر, 9 2022\",\n            href: \"javascript:void(0)\"\n        },\n        {\n            title: \"كيفية استخدام Root C ++ Interpreter Shell لكتابة برامج C ++\",\n            desc: \"تم حل موجات الجاذبية القوية الناتجة عن تأثير أقمار الكواكب - أربعة في المجموع - أخيرًا في عام 2015 عندما تم استخدام عدسة الجاذبية الدقيقة لرصد\",\n            date: \"الثلثاء, ديسمبر, 9 2022\",\n            href: \"javascript:void(0)\"\n        }\n    ]\n    \n    return (\n        <section className=\"cards-secondary\">\n            <div className=\"cards-header\">\n                <h1>\n                    المقالات\n                </h1>\n                <p>\n                    المدونات التي يحبها المجتمع. يتم تحديثها كل ساعة.\n                    تم حل موجات الجاذبية القوية الناتجة عن تأثير الكواكب أخيرًا في عام 2015\n                </p>\n            </div>\n            <div className=\"cards-container\">\n                {\n                    posts.map((item, idx) => (\n                        <article className=\"card-container\" key={idx}>\n                            <a href={item.href} className=\"card\">\n                                <span className=\"date\">\n                                    {item.date}\n                                </span>\n                                <div className=\"card-details\">\n                                    <h3>\n                                        {item.title}\n                                    </h3>\n                                    <p>\n                                        {item.desc}\n                                    </p>\n                                </div>\n                                <button className=\"read-more-btn\">\n                                    اقرأ المزيد\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n                                        <path fill-rule=\"evenodd\" d=\"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z\" clip-rule=\"evenodd\" />\n                                    </svg>\n                                </button>\n                            </a>\n                        </article>\n                    ))\n                }\n            </div>\n        </section>\n    )\n}"},{"code":".cards-secondary {\n  margin: 3rem auto 0px auto;\n  padding: 0px 1rem 0px 1rem;\n  max-width: 1280px;\n}\n@media (min-width: 1024px) {\n  .cards-secondary {\n    padding: 0px 2rem 0px 2rem;\n  }\n}\n.cards-secondary .cards-header {\n  max-width: 32rem;\n}\n.cards-secondary .cards-header h1 {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n  color: #1f2937;\n  font-weight: 600;\n}\n.cards-secondary .cards-header p {\n  margin-top: 0.75rem;\n  color: #6b7280;\n}\n.cards-secondary .cards-container {\n  margin-top: 3rem;\n  display: grid;\n  gap: 1rem;\n}\n.cards-secondary .cards-container > * {\n  border-top-width: 0px;\n  border-bottom-width: 1px;\n  border-bottom-color: #e5e7eb;\n}\n@media (min-width: 768px) {\n  .cards-secondary .cards-container {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .cards-secondary .cards-container > * {\n    border-top-width: 0px;\n    border-bottom-width: 0px;\n    border-bottom-color: #e5e7eb;\n  }\n}\n@media (min-width: 1024px) {\n  .cards-secondary .cards-container {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n.cards-secondary .cards-container .card-container {\n  margin-top: 1.25rem;\n  padding-bottom: 2rem;\n}\n@media (min-width: 768px) {\n  .cards-secondary .cards-container .card-container {\n    padding-top: 0px;\n  }\n}\n.cards-secondary .cards-container .card-container .card .date {\n  display: block;\n  color: #9ca3af;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.cards-secondary .cards-container .card-container .card .card-details {\n  margin-top: 0.5rem;\n}\n.cards-secondary .cards-container .card-container .card .card-details h3 {\n  color: #111827;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n}\n.cards-secondary .cards-container .card-container .card .card-details h3:hover {\n  text-decoration: underline;\n}\n.cards-secondary .cards-container .card-container .card .card-details p {\n  margin-top: 0.25rem;\n  color: #9ca3af;\n  line-height: 1.625;\n}\n.cards-secondary .cards-container .card-container .card .read-more-btn {\n  margin-top: 0.5rem;\n  outline: none;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  color: #2563eb;\n  text-decoration-color: #2563eb;\n}\n.cards-secondary .cards-container .card-container .card .read-more-btn:hover {\n  text-decoration: underline;\n}\n.cards-secondary .cards-container .card-container .card .read-more-btn svg {\n  width: 0.75rem;\n  height: 0.75rem;\n  margin-right: 0.5rem;\n}","label":"style.css"}],"jsxTail":[{"code":"export default () => {\n\n    const posts = [\n        {\n            title: \"ما هو SaaS؟ شرح البرمجيات كخدمة\",\n            desc: \"أثناء خوض هذه الرحلة، كان لدي نظام علاجي قياسي، يعتمد على النظر في الأدبيات البحثية. بعد أن شاهدت الفيلم، بدأت أسأل الآخرين عما فعلوه من أجل قلقهم، وبعضهم\",\n            date: \"Thursday, December 9th 2021\",\n            href: \"javascript:void(0)\"\n        },\n        {\n            title: \"دليل سريع لاستضافة WordPress\",\n            desc: \"وبحسب قوله، ما زلت متفاجئًا بحدوث ذلك. لكننا فوجئنا لأننا فوجئنا للغاية. سيظهر المزيد من الكشف عن ويتينغتون في الفيلم.\",\n            date: \"Thursday, December 9th 2021\",\n            href: \"javascript:void(0)\"\n        },\n        {\n            title: \"7 امتدادات واعدة للرمز VS تم تقديمها في عام 2022\",\n            desc: \"آمل أن أتذكر كل الأشياء التي كانوا بحاجة إلى معرفتها. إنهم يحبون ، 'حسنًا' ، ويكتبونها في دفاتر القراءة الصغيرة الخاصة بهم. أدركت اليوم أن لدي كل هذه\",\n            date: \"Thursday, December 9th 2021\",\n            href: \"javascript:void(0)\"\n        },\n        {\n            title: \"كيفية استخدام Root C ++ Interpreter Shell لكتابة برامج C ++\",\n            desc: \"تم حل موجات الجاذبية القوية الناتجة عن تأثير أقمار الكواكب - أربعة في المجموع - أخيرًا في عام 2015 عندما تم استخدام عدسة الجاذبية الدقيقة لرصد\",\n            date: \"Thursday, December 9th 2021\",\n            href: \"javascript:void(0)\"\n        }\n    ]\n    \n    return (\n        <section className=\"py-12 mx-auto px-4 max-w-screen-xl md:px-8\">\n            <div className=\"max-w-lg\">\n                <h1 className=\"text-3xl text-gray-800 font-semibold\">\n                المقالات\n                </h1>\n                <p className=\"mt-3 text-gray-500\">\n                    المدونات التي يحبها المجتمع. يتم تحديثها كل ساعة.\n                    تم حل موجات الجاذبية القوية الناتجة عن تأثير الكواكب أخيرًا في عام 2015\n                </p>\n            </div>\n            <div className=\"mt-12 grid gap-4 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3\">\n                {\n                    posts.map((item, idx) => (\n                        <article className=\"mt-5 pt-8 md:pt-0\" key={idx}>\n                            <a href={item.href}>\n                                <span className=\"block text-gray-400 text-sm\">\n                                    {item.date}\n                                </span>\n                                <div className=\"mt-2\">\n                                    <h3 className=\"text-xl text-gray-900 font-semibold hover:underline\">\n                                        {item.title}\n                                    </h3>\n                                    <p className=\"text-gray-400 mt-1 leading-relaxed\">\n                                        {item.desc}\n                                    </p>\n                                </div>\n                                <button className=\"mt-2 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline\">\n                                    اقرأ المزيد\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-3 w-3 mr-1\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n                                        <path fill-rule=\"evenodd\" d=\"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z\" clip-rule=\"evenodd\" />\n                                    </svg>\n                                </button>\n                            </a>\n                        </article>\n                    ))\n                }\n            </div>\n        </section>\n    )\n}","label":"App.jsx"}]},"vue":{"vueCss":[],"vueTail":[]}}
slug: /cards
id: 9e6a9df5-9fbf-4254-80cc-8ea106d2c788
created_at: 2
---