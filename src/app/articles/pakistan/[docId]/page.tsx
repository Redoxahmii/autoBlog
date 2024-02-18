import { HamariArticle } from "@/types/types";
import type { Metadata } from "next";
import Image from "next/image";
import shuffleArray from "@/utils/shufflearray";
import ArticleSidebar from "@/components/ArticleSidebar";

export const generateMetadata = async (props: any): Promise<Metadata> => {
  const { params } = props;
  const data = await getArticle(params.docId);
  const article = data.foundDocument;
  return {
    title: article?.title,
    description: article?.description,
  };
};

export default async function blogDetail({ params }: Params) {
  const data = await getArticle(params.docId);
  const article = data.foundDocument;
  if (!article) return null;
  return (
    <div className="flex mt-10 flex-col gap-8 pb-10 px-20">
      <div className="flex gap-5 flex-col">
        <h1 className="lg:text-5xl text-2xl font-bold">{article.title}</h1>
        <h3 className="lg:text-xl  truncate">{article.description}</h3>
      </div>
      <div className="flex flex-row-reverse justify-between relative">
        <div className="w-full max-w-md mr-10 px-5 flex-col gap-3 top-4 sticky h-fit lg:block hidden">
          <h1 className="font-bold text-xl mb-2">Read more Articles</h1>
          <div className="flex flex-col gap-3">
            {data.randomArticles.map((article: HamariArticle) => (
              <ArticleSidebar
                key={article.docId}
                imgSrc={article.imgSrc}
                title={article.title}
                href={`/articles/tribune/${article.docId}`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {article.imgSrc && (
            <Image
              className="rounded-xl"
              src={article?.imgSrc}
              alt={article.title}
              width={800}
              height={400}
            />
          )}
          <div
            dangerouslySetInnerHTML={{ __html: article.content }}
            className="prose lg:prose-xl prose-base"
          ></div>
        </div>
      </div>
    </div>
  );
}

async function getArticle(id: string) {
  const res = await fetch(`${process.env.NEXT_HAMARI_LINK}`, {
    next: { revalidate: 7200 },
  }).then((res) => res.json());
  const AllArticles = res.data;

  const foundDocument = AllArticles.find(
    (article: HamariArticle) => article.docId === id,
  );
  shuffleArray(AllArticles);
  const randomArticles = AllArticles.slice(0, 5);
  return { foundDocument, randomArticles };
}
type Params = {
  params: {
    docId: string;
  };
};
