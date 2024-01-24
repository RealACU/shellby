"use client";

import HTMLFlipBook from "react-pageflip";
import log from "@/data/log";
import convertToDate from "@/lib/convertToDate";

const page = () => {
  const logDates = Object.keys(log);

  return (
    <main className="h-full w-full p-12">
      {/* @ts-ignore */}
      <HTMLFlipBook
        className="rounded-xl"
        height={300}
        width={300}
        size="stretch"
        minHeight={0}
        minWidth={0}
        startPage={1}
        flippingTime={300}
      >
        {logDates.map((logNumber: string, i: number) => {
          const logEntries = log[logNumber];

          return (
            <article
              key={logNumber}
              className={`p-6 border-x-2 rounded-xl bg-slate-50
                ${i != 0 && i != 7 ? "cursor-pointer hover:bg-slate-200" : ""}`}
            >
              <h6 className="text-sm lg:text-lg xl:text-2xl underline">
                {convertToDate(parseInt(logNumber))}
              </h6>
              <ol className="text-xs lg:text-base xl:text-xl">
                {logEntries.map((logEntry: string, j: number) => {
                  return <li key={logEntry}>{j + 1 + ". " + logEntry}</li>;
                })}
              </ol>
            </article>
          );
        })}
      </HTMLFlipBook>
    </main>
  );
};

export default page;
