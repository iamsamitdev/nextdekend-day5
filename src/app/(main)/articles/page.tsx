'use client'

import Image from 'next/image'

interface Article {
  id: number
  title: string
  description: string
  category: string
  date: string
  readTime: string
  image: string
  author: {
    name: string
    avatar: string
  }
}

export default function ArticlesPage() {
  
  // ข้อมูลตัวอย่าง (ในอนาคตควรดึงจาก API)
  const articles: Article[] = [
    {
      id: 1,
      title: "เทคนิคการเขียน Resume ให้ได้งาน",
      description: "การเขียน Resume ที่ดีเป็นก้าวแรกของการได้งาน มาดูเทคนิคการเขียน Resume ให้โดนใจ HR กัน",
      category: "การสมัครงาน",
      date: "15 มีนาคม 2567",
      readTime: "5 นาที",
      image: "/images/news/news1.webp",
      author: {
        name: "ทีมงาน Dekend",
        avatar: "/images/google.webp"
      }
    },
    {
      id: 2,
      title: "5 ทักษะที่บริษัทต้องการในปี 2024",
      description: "เตรียมพร้อมสำหรับการฝึกงานด้วยทักษะที่บริษัทชั้นนำต้องการมากที่สุดในปีนี้",
      category: "ทักษะการทำงาน",
      date: "10 มีนาคม 2567",
      readTime: "4 นาที",
      image: "/images/news/news2.webp",
      author: {
        name: "ทีมงาน Dekend",
        avatar: "/images/google.webp"
      }
    },
    {
      id: 3,
      title: "การฝึกงานที่ควรรู้จัก ก่อนสมัครงาน",
      description: "การฝึกงานที่ควรรู้จัก ก่อนสมัครงาน มาดูกันว่ามีอะไรบ้าง",
      category: "การสมัครงาน",
      date: "5 มีนาคม 2567",
      readTime: "3 นาที",
      image: "/images/news/news3.jpg",
      author: {
        name: "ทีมงาน Dekend",
        avatar: "/images/google.webp"
      }
    }
  ]

  return (
    <div className="relative bg-white pt-24 pb-16">
      {/* ส่วนหัว */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          บทความที่น่าสนใจ
        </h1>
        <p className="text-lg text-gray-600">
          เรื่องราวและเทคนิคดีๆ เกี่ยวกับการฝึกงานและการทำงาน
        </p>
      </div>

      {/* แสดงบทความ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(article => (
          <div key={article.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            {/* รูปภาพบทความ */}
            <div className="relative h-48">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6">
              {/* หมวดหมู่และเวลาอ่าน */}
              <div className="flex items-center gap-4 mb-3">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm">
                  {article.category}
                </span>
                <span className="text-sm text-gray-500">
                  {article.readTime}
                </span>
              </div>

              {/* หัวข้อและเนื้อหา */}
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {article.description}
              </p>

              {/* ข้อมูลผู้เขียนและวันที่ */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm text-gray-600">{article.author.name}</span>
                </div>
                <span className="text-sm text-gray-500">{article.date}</span>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
