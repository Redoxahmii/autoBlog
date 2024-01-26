import { TribuneArticle } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import img from "../../public/placehold.jpg";
import { convertTime } from "@/utils/timechange";
export default function CardHome({
  article,
  type,
}: {
  article: TribuneArticle;
  type: string;
}) {
  return (
    <Link href={`articles/tribune/${type}/${article.docId}`}>
      <div className="flex hover:bg-base-200 p-4 w-full max-w-2xl rounded-xl transition-all cursor-pointer justify-between items-center">
        <div className="max-w-xs">
          <h1 className="font-bold">{article.title}</h1>
          <p className="text-ellipsis text-base-content/80 text-sm">
            {article.description}
          </p>
          <p className="text-ellipsis text-base-content/80 text-sm">
            {article.published ? convertTime(article.published) : null} ago
          </p>
        </div>
        {article.imgSrc ? (
          <Image
            src={article.imgSrc}
            alt={article.title}
            width={200}
            height={200}
            className="rounded-xl w-52 h-32"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Image
            src={img}
            alt={article.title}
            width={200}
            height={200}
            className="rounded-xl w-52 h-32"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
    </Link>
  );
}
