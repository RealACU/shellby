import imgUrls from "@/data/imgUrls";
import convertToDate from "@/lib/convertToDate";
import Image from "next/image";

const page = () => {
  return (
    <main className="p-16">
      {imgUrls.map((imgUrlPair: string[], i: number) => {
        return (
          <section
            key={i}
            className="flex flex-col items-center justify-center"
          >
            <h6 className="text-xl font-bold">{convertToDate(i + 1)}</h6>
            <article className="flex p-12 md:p-28">
              <Image
                src={imgUrlPair[0]}
                alt="Loading..."
                height={378}
                width={504}
                layout="fixed"
                className="turn rounded-xl border-8 border-yellow-300"
              />
              <Image
                src={imgUrlPair[1]}
                alt="Loading..."
                height={378}
                width={504}
                layout="fixed"
                className="turn rounded-xl border-8 border-yellow-300"
              />
            </article>
          </section>
        );
      })}
    </main>
  );
};

export default page;

// 3024x4032
