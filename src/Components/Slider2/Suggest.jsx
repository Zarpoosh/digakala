import React, { useState } from "react";
import SuggestItem from "./SuggestItem";

const Suggest = () => {
  return (
    <>
      <div className=" flex items-center justify-center my-4">
        <h1 className="font-bold">پیشنهاد دیجی‌کالا</h1>
      </div>
      <div className="w- lg:w-4/5 border border-gray-200 mx-3 lg:mx-auto flex flex-row rounded-lg overflow-x-auto">
        <div className="flex flex-col border p-5 border-gray-200 justify-center items-center">
          <SuggestItem
            title="موبایل"
            Image="https://dkstatics-public.digikala.com/digikala-products/373cf0add6b2964b30a9a59b2ce2f5f2c8ea976f_1678188426.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          />
          <SuggestItem
            title="هدفون"
            Image="https://dkstatics-public.digikala.com/digikala-products/084182096961859d97f9897fc4479ec55ee92c2d_1662209886.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          />
        </div>
        <div className="flex flex-col border p-5 border-gray-200 justify-center items-center">
          <SuggestItem
            title="ساعت"
            Image="https://dkstatics-public.digikala.com/digikala-products/79baa6d7e3dfd20eb0caba1ac505809c3ebf585c_1683407047.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          />
          <SuggestItem
            title="ایرپاد"
            Image="https://dkstatics-public.digikala.com/digikala-products/e4b2145a5e77bdc30aafff78bba4734798ac8d68_1620202335.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          />
        </div>
        <div className="flex flex-col border p-5 border-gray-200 justify-center items-center">
          <SuggestItem
            title="لپ تاب"
            Image="https://dkstatics-public.digikala.com/digikala-products/7b0a2b184d251ff190cb8f1e2379f002784af3d7_1672216711.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          />
          <SuggestItem
            title="دوچرخه"
            Image="https://dkstatics-public.digikala.com/digikala-products/5a45e6cc8969e88ba1efbd16459fd9a5390410a1_1651426550.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
          />
        </div>
        <div className="flex flex-col border p-5 border-gray-200 justify-center items-center">
          <SuggestItem
            title="کفش"
            Image="https://dkstatics-public.digikala.com/digikala-products/ff2f076be6ded436a14cc1d4e5e48e79b78508ef_1610993916.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          />
          <SuggestItem
            title="خیارشور"
            Image="https://dkstatics-public.digikala.com/digikala-products/e9873c25446c062f58bec67fd4f554c62fb5063c_1605450427.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          />
        </div>
        <div className="flex flex-col border p-5 border-gray-200 justify-center items-center">
          <SuggestItem
            title="ماشین برقی"
            Image="https://dkstatics-public.digikala.com/digikala-products/4536c0fb2f3e837ba7e711bf4642c3de6f6816de_1674981917.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          />
          <SuggestItem
            title="باتری"
            Image="https://dkstatics-public.digikala.com/digikala-products/9b2371cbb8c8ca77c20efbbb79974b9adfa0bd1b_1612706809.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          />
        </div>
        <div className="flex flex-col border p-5 border-gray-200 justify-center items-center">
          <SuggestItem
            title="کاغذ دیجیتالی"
            Image="https://dkstatics-public.digikala.com/digikala-products/605151ab5e8bdf8ac47cf0e8b2c34c7b428df4db_1666082591.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
          />
          <SuggestItem
            title="تبلت"
            Image="https://dkstatics-public.digikala.com/digikala-products/5f8fe118fc184f82a76fff07e0d17f81fe67182a_1677998221.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
          />
        </div>
        <div className="flex flex-col border p-5 border-gray-200 justify-center items-center">
          <SuggestItem
            title="روغن"
            Image="https://dkstatics-public.digikala.com/digikala-products/9437312ce7c2cdf0d95633ff1688e98414b94c03_1641109285.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
          />
          <SuggestItem
            title="لپ تاب"
            Image="https://dkstatics-public.digikala.com/digikala-products/cf7840133c7b2d42979c3129a96008e5b166ac0d_1677925439.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
          />
        </div>
      </div>
    </>
  );
};

export default Suggest;
