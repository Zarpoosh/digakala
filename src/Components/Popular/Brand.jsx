import React ,{useState} from "react";

const Brand = () => {
  const imagecards=[
    {url:"https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"},
    {url:"https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"},
    {url:"https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"},
    {url:"https://dkstatics-public.digikala.com/digikala-brands/311.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"},
    {url:"https://dkstatics-public.digikala.com/digikala-brands/3960.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"},
    {url:"https://dkstatics-public.digikala.com/digikala-brands/627f3a8485f2884e7ae2951adf0761fc3792495e_1627386509.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"},
    {url:"https://dkstatics-public.digikala.com/digikala-brands/7857.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"},
    {url:"https://dkstatics-public.digikala.com/digikala-brands/f660c46ffc6d58a19e5c0af9d03c50be9a929571_1627214766.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"},
    {url:"https://dkstatics-public.digikala.com/digikala-brands/87dcb454f4d8df28bd2f8fd902f0f27b5fb1fac4_1666761801.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"},
    {url:"https://dkstatics-public.digikala.com/digikala-brands/477ab48bb7261595c02cb0f4c504837e464f00d0_1663485028.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"},
    {url:"https://dkstatics-public.digikala.com/digikala-brands/bff03daf9cf71a71b7e41b31255ba9e747d1a01f_1644133724.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"},
    {url:"https://dkstatics-public.digikala.com/digikala-brands/100014253.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"},
    {url:"https://dkstatics-public.digikala.com/digikala-brands/482302342bcecdf560aa25e7698c2ef8c62339ea_1602073618.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"},
    {url:"https://dkstatics-public.digikala.com/digikala-brands/1313.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"},
  ]
  const [cards, setCards] = useState([])
  const shuffledCards=()=>{
    const shuffledCards=[...imagecards,...imagecards].map((card)=>({
      ...card,
      id:Math.random()
    }));
    setCards(shuffledCards);
  }
  return (
    <>
      <div className=" flex items-center justify-center my-4">
        <h1 className="font-bold">محبوب‌ترین برندها</h1>
      </div>
      <div className="w- lg:w-4/5 border border-gray-200 mx-3 lg:mx-auto flex flex-row rounded-lg overflow-x-auto">
       {imagecards.map((cards)=>(
          <div key={cards.id} className="flex flex-col border p-5 border-gray-200 justify-center items-center">
          <a className="h-14 w-14 my-4 flex flex-col items-center m-2" href="#">
            <img src={cards.url} alt="" />
          </a>
        </div>
       )) }
      </div>
    </>
  );
};

export default Brand;
