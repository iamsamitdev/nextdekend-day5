import { Metadata } from "next"
import ArticleContent from "@/app/(main)/articles/ArticleContent"

export const metadata: Metadata = {
  title: "บทความ | Dekend เว็บหาที่ฝึกงาน หางาน สำหรับนักศึกษา",
  description: "บทความที่น่าสนใจเกี่ยวกับการฝึกงานและการทำงาน",
}

export default function ArticlesPage() {
  return <ArticleContent />
}
