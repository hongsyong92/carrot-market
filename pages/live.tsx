import type { NextPage } from "next";

const Live: NextPage = () => {
  return (
    <div className="py-10 px-4">
      {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
        <div key={i}>
          <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
          <h3 className="font-medium text-gray-700 text-lg mt-2">
            Lets try potatos
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Live;
