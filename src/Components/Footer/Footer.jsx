import React, { useState } from "react";
import Input from "./Input";
// icons
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import Install from "./Install";

import { Link } from "react-router-dom";
import BackToTopButton from "./BackToTopButton";


const Footer = () => {
  const imagecards = [
    { url: "https://www.digikala.com/statics/img/svg/footer/digimag.svg" },
    { url: "https://www.digikala.com/statics/img/svg/footer/digipay.svg" },
    { url: "https://www.digikala.com/statics/img/svg/footer/digistyle.svg" },
    { url: "https://www.digikala.com/statics/img/svg/footer/digiplus.svg" },
    { url: "https://www.digikala.com/statics/img/svg/footer/digiclub.svg" },
    { url: "https://www.digikala.com/statics/img/svg/footer/jet.svg" },
    { url: "https://www.digikala.com/statics/img/svg/footer/magnet.svg" },
    { url: "https://www.digikala.com/statics/img/svg/footer/digiMehr.svg" },
    { url: "https://www.digikala.com/statics/img/svg/footer/fidibo.svg" },
    { url: "https://www.digikala.com/statics/img/svg/footer/pindo.svg" },
    {url: "https://www.digikala.com/statics/img/svg/footer/digikala-service.svg",},
    { url: "https://www.digikala.com/statics/img/svg/footer/smartech.svg" },
  ];
  const [cards, setCards] = useState([]);
  const shuffelcards = () => {
    const shuffeledcards = [...imagecards, ...imagecards].map((card) => ({
      ...card,
      id: Math.random(),
    }));
    setCards(shuffeledcards);
  };
  return (
    <>
      <footer className="flex flex-col p-2">
        {/* button & brand */}
        <div className="flex flex-row justify-between w-full">
          <div className="flex p-3">
            <a href="#">
              <img
                className=""
                src="https://www.digikala.com/statics/img/svg/digi.svg"
                alt=""
              />
            </a>
          </div>

           
          
          
         <BackToTopButton/>
          
            
        </div>
        {/* end of button & brand */}
        <div className="text-xs flex flex-col p-2 mx-1">
          <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
          <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </div>
        <div className="flex flex-row my-3">
          {/* list */}
          <ul className=" mx-4">
            <p className="font-bold text-gray-600">با دیجی‌کالا</p>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">اتاق خبر دیجی کالا</li>
            </a>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">فروش در دیجی کالا</li>
            </a>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">فرصت های شغلی</li>
            </a>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">
                گزارش تخلف در دیجی کالا
              </li>
            </a>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">تماس با دیجی کالا</li>
            </a>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">درباره دیجی کالا</li>
            </a>
          </ul>
          <ul className=" mx-4">
            <p className="font-bold text-gray-600">خدمات مشتریان</p>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">
                پاسخ به پرسش های متداول
              </li>
            </a>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">
                رویه های بازگرداندن کالا
              </li>
            </a>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">شرایط استفاده</li>
            </a>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">حریم خصوصی</li>
            </a>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">گزارش بلاک</li>
            </a>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">درباره دیجی کالا</li>
            </a>
          </ul>
          <ul className=" mx-4 hidden md:inline">
            <p className="font-bold text-gray-600">خدمات مشتریان</p>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">
                پاسخ به پرسش های متداول
              </li>
            </a>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">
                رویه های بازگرداندن کالا
              </li>
            </a>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">شرایط استفاده</li>
            </a>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">حریم خصوصی</li>
            </a>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">گزارش بلاک</li>
            </a>
            <a href="#">
              <li className="text-xs my-2 text-gray-500">درباره دیجی کالا</li>
            </a>
          </ul>
          {/* end of list */}
        </div>

        {/* input */}
        <div className="flex flex-col my-4 md:w-2/5">
          {/* icon */}
          <div className="flex flex-row justify-between p-3">
            <div className="flex">
              <p>همراه ما باشید!</p>
            </div>
            <div className="flex text-gray-500">
              <a className="mx-2" href="#">
                <i>
                  <BsInstagram className="h-6 w-6" />
                </i>
              </a>
              <a className="mx-2" href="#">
                <i>
                  <BsTwitter className="h-6 w-6" />
                </i>
              </a>
              <a className="mx-2" href="#">
                <i>
                  <BsLinkedin className="h-6 w-6" />
                </i>
              </a>
              <a className="mx-2" href="#">
                <i>
                  <BsYoutube className="h-6 w-6" />
                </i>
              </a>
            </div>
          </div>
          {/* icon */}
          <Input />
        </div>
        {/* end of input */}

        {/* install */}
        <Install/>
        {/*end of install */}

        {/* etemad */}
        <div className=" border-b p-2 flex flex-row mx-auto">
          <div className=" border-2 m-2 rounded-lg">
            <a href="#">
              <img
                className="h-24 w-24"
                src="https://www.digikala.com/statics/img/png/rezi.png"
                alt=""
              />
            </a>
          </div>
          <div className=" border-2 m-2 rounded-lg">
            <a href="#">
              <img
                className="h-24 w-24"
                src="https://www.digikala.com/statics/img/png/kasbokar.png"
                alt=""
              />
            </a>
          </div>
          <div className=" border-2 m-2 rounded-lg">
            <a href="#">
              <img
                className="h-24 w-24"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFBgSFRUYGBIYFBgcEhkYGhgaHRoZGhgcGRkWHRkcJC4lHB8sIBkaJkY0KzAxNTU1HCU7QEg0Py80NjEBDAwMEA8QHxISHzQsJSY9NDQ+PTQ2ND0/NDE0NDQ0NDc9Nj00ND0+OjY2NDQ0NjE9NDY1PT40NDQ0NDQ0MTQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xAA+EAACAQIEAgYHBwMDBQEAAAABAgADEQQFEiExQQYTIlFhcQcyQlJigZEjgpKhscHRFFNyc8LxFTODovBD/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAJREAAwACAgIBBQADAAAAAAAAAAECAxEEIRIxQRNRYYGRBSJx/9oADAMBAAIRAxEAPwDs0REAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAPIiQed9IqVA6PXq22RTuPFj7I/OSpdPSIqlK2ycvPLzkOe9KsVUuBUNNfdp9n6t6x+speIxtUNrFWoH94O9/re8vXGrXbKlmT9H6TicU6K+kytRZaWMY1aBIHWH/uJc+s3vqOfPz4Ts1GorKGUgqwBUg3BBFwQeYIlVw4fZanszRETgkREQBERAEREAREQBERAEREAREQBERAEREAREQDyIkR0lzlcJh3xD7lQAi+87bKv1+gBMJNvSBC9NulYww6ikQcS4vfiKan2iPePIfPlvQ8qpPVeyhnqMbsSbk97Mx/UyHw3W4mvcnXXqtdieZ5k9ygD5ATrGQ5WlFBTQXY+u1t3Pee4dw5Tc3OCdLtso8XkffpEMnQgMuqtVNz7NO1h4F2G/yAlc6R9DFRGqYd3ZlBJR9J1AC50sAO14Hj4Tr4wgIAb8pgxGU0nFrFTyIJ/fYzN9a972WLHKWkj8w1TO3+h3NWq4E0nN2oVSi/4EBkHyuw8lE41nVDRXrU/cr1UFu5XYD9Jd/QviimJqJfsVFCkfEoLKfOwP1mjMtxsifZ2+IiYiwREQBERAEREAREQBERAEREAREQBERAEREAREQDycY9Kmd9bihhVP2eHHb7jVdQT+FSB95p1vNcctCjUrt6tNGZvui8/NnWvUcu3aq1HJbxd24eV2mviRunT+CvI+tHRvR3llkbEEXdyUpf4g2c/NtvJZ0/B4UItuZ4n9vKRPRvLlpIqAdmmiovmBuf1+ssEz5K8rbLEtLQmOo4VSxNgAST3AC5MySielLPxRwxwqN9tXUg29mlwdvC/qjzPdOZTqtIhvSOJZniOsq1Ko4PVdx5O7OPyMunopoEYik/v1ah+6tNl/W8pSYdndaaDtMwC+Hj5Ab/Kde9HWWha91/7dGjpB72awHzsGPzmrkVqfE5hfJ0yIiZDsREQBE8nsAREQBERAEREAREQBERAEREAREQBERAKD6Xsw0YEUQbNXqqu3up9o3y7IHznMOh+H142gtrgOXbypqX/UCWn0z4nViMPSv6lF3I8XcAH6UzIr0Z0NeNB7qT/+zIv6Ez0Ma8eO399lT7pHb8BS0oo52ufM7zZiVTOemFNCadAipU4FhuinzHrHwEwTDp6R3VKVtkh0l6QU8JT1t2qhB6tAd2Pee5RzM4RneOevVetVbU7HfuHJVUcgOAH7yezarUrVNTFnqu1hzJPJVA/QSXyfowKNq1cA1uKJsVp+J5M/5Dl3zWlOGdv2VKnkfXohMiyU0lNRx9s4sF5oht2f8ztf5Cdd6L5V1FABh9o51VPAkCy/IAD6yO6PZJdhiKg2BvSU8zyqH9vr3S2TLdOntl+tLQiaGa5rSw6dZWcKvLmSe5QNyZzyt0rzDMKpoZcgo0QbVK7gEqO8k9lT8IDNw4QobW/gjyW9HT2qAAkmwHEnYSt43pMpYpR7Xe/s/d97z4ec3sryhKNEYd3NVnB61qrFmqsR2ydR4W5DYASrYrLP6esUBJQ+oTxtx0nvI/P6zFzLuMb8P6auLEVTV/onsvzTTYVCdLN6xPqk957ifpLFKLjcMz0iqjzJ4Dzk10SxYaiKLOWq0xZ72uRc6SO8cu/beZf8TkyXh/3303pv7HXKiE9y+/sWOIieqZBERAEREAREQBERAEREAREQDyJp4/MKVFddVwi+PE+QG5PlKB0g9JLC6YWmP9Sp+oQfuflO5x1XpHLpL2VL0rVL5m492jSX8mb/AHTU6FZ4mDrPWdGf7PSirYXbUDuT6o28ZB5nj6leq1as5eo1tTEKOAsBZQAAB3CbOSZa+IqClT069JY6m0gKLXPeeI4Az1PFLEpr1oq2/LaLLm/S/E4u6swSif8A802BHxNxf8h4Tb6PZRUrWKLanzc+r8vePlJbJuh9GlZqp66oN9wVQfcv2vvbeEumCw7NawsvfwFu4CY65EyvHGifouu6Zp5fklKgt0Gqqwszt6x+FR7I8B87zfwuUgtrqC9t1X9z/ElKVEL598yzK26e2WpKVpHlpB9J8/TB0tbC9RjppJ7zWvcnko5n9yJLYvEJTptUdgqIpZ2PAKBck/KcHzzPmxuJau1xTHZoIfZpg7XHvNxPmByluDF5136RzdeKL7l2Dw+IVcTjcSjs25TWEVRx0HcGw7tvG8nsTimCihg0VVsNJQLYDkR7IHjOa4bANX0UE9Z20390e03kBc/Kdiy5aaotOnbSiqoAFrACw/ITrkT4td/r7HGGtp9EdkmRdUxrVXNTEsLF2udK+4t+Hnzm/mWBFRfiHq/xN6JmpKlpl6bT2iBGHZqehV3va3C3nPcp6PJRbrmOutYjVuAoPEKPpue7lJwT2EklpBvZ7ERJIEREAREQBERAEREARExVagVSzEBVBLEmwAAuSTyAEA9dwASTYAXJPADvvKHn3T5QTSwlnI2aqfVB+Ee15nbzlS6Z9NWxbmhRJXCBrbbNWN7XI46DyXnz7h95D0UrPZ6n2VM2sGF3I/w9n5/Sa4xTC8sn8KqdV1J5isQ9Qa3ZndjxO5PgP4ExU+iWIqdpx1VPvcXY+SA3HztOl5NlVKkOwnbt653c/Pl8rTbfKy57R0j6n+BOb5PxCIjDrumcL6U5SmGdFQsVZCSWtcsrWPDYbFZh6O5h1GIp1ibIr2f/AAYFX87A3+U6T6UujyDBrWpqdVF9THiSjAKxJ7hs3yM5PSmzDX1MWn/xkUvF9H6RwmXoAGvquLg8t+BAkjOZ+jvpaoRcHiGsV2oOx2K8qbHkRwF+I25b9LE824cVplyra2fU8ny7AC5IAHEmc86aekBKatQwjB6xBDVButPldTwZvyHPukTDp6QbS9kP6WulYJ/6fSbsgg4pl5kbrR+WzH7o75XOjnRzEV0WsgVaTE6WdrXsbEhQCSOPnaQGX5e2Iq6STpvqrOb3sTc7+8xv+Z5Ts/RpxXHV06fV06SqvIoLABUXne2//M01keGVMnKlV2zZ6N5SlAbHXUK2ZyLbe6o5C/zMs+DoaV8Sbn+JjwmCCb3u36TcmWqdPbO0klpHsREgCIiAIiIAiIgCIiAIiIAiIgHk5/04GIxlT/p2GstFdLY6sx7C33WhtuzWsxUcbrewJnQJGV8OWJVQFQMWcges53Pn5986mvF7GtlRyPo1h8Nbq0L1eHWOLue/SOCDy+ZMtOFy0ndzbwHH5nlJHD4VUFlHmeZ+czyKp09tk9LpHxSpBRZRaZIiQQamYYcVKbIQGBHA8D4HwI2+c/P/AEhyFsLW0WJouSaDnmOaN8a8PEb99v0VK90gydKiMHQPSb11PI8mFuBvvcbiXYczx1+GRUqlo4fh5a8ozbEIoRazqvJdVwPINe3yn3iuhDqb0HV05K50sPDUBZvymfBdGcSDuiDx1r+02vLjte1+zLUWvSZFZ3mNartUquy+6WOn8I2/KQWFyypXfq6Y4euxvpQd5P7cTOj0+hIPar1Lj3Ke1/Auwv8AQSSpZaABRoIFUclFgPiY/ud5ReeZWoLMeKvdFYyzI9OnDURdmPaY8Wbgzt3AfkNp07KMuXD0lpLy3Y82Y8WMxZRlK0FPN29dv2HcJJzI229svPYiJAEREAREQBERAEREAREQBERAERNNNTFu0QFewAC8NKnmPEwDcia3Ut/cP4V/iOpb+4fwr/EA2Ymt1Lf3D+Ff4jqW/uH8K/xANmJrdS39w/hX+I6l/wC4fwr/ABANmeETX6lv7h/Cv8TQzHMqeH09diOrDEBWZQFuTYAtp0jc8yIBnxGWKxup0nu5fTlMaZaw9pfznuYYtaCdZVrFKY4sVBA8SQpsPOZqZLKHFVtJF7lQu3G5DAEfONE7Z9/0YIsSfltM9KkqiygAeE1cO/WItRK2pHUMjKEIZSLhhtuCJrZfmNOuzpSxGp6ZAqLpUMhPAMpUEcIIJeJE5jj6dDQKuI0F200wQpLt7oUKST5TPianVoaj1tKKt2ZgoAHedtoBvxNGuxRC7VW0gXJCBtu+yqSZF0ukWGZBVGLHVG9qhWybGx+0K6RuDzgFiiaiIxAIqkgi4ICEEd4NpgSteo1HrH1qis3YsNLEhbNp0k9k7A3EAkomt1Lf3D+Ff4nzUVgCesJt8K/xANuIiAIiIAiIgCIiAJrYX1qn+p/sWbM1sN61T/P/AGJANHpK2IGGqPhmAxCIzUwVDByoJ0WPfw87SAwnSJ2xWF+21YTEYUOPswCtUoXRWccNSrUa1rgoeRl1Mq46G0OoOG1Np/quvDe0tnuKan2V0E09vZJ74BqnMcUhwdWpWvQxNYo46pQy9YGbDAnleyqb+0w4XtMOV57iKi4miawOIXFpTw7dWoDUnIKVdPtAqtQk8OwbSzZ5lKYmg2HYlVYDSy7MjKwZWXuIIBmBMhpLiUxS3DJh+pVR6pAPZYj3lBdR4O0AgcfmuLpnG0etBr0qVOrgvs1+0V9ShCo9ZjUGja3Fe+SeSZm+IOGdal6ZwoqYgFFBZn7KL8JBWrcD3RN7G5KlTEUcUxOuiHCgHZtdrahz0kah478hPckyanhRUWne1Ss9Qg+zrN9C9ygk2HiYBr51mjpWo4WmG11UquzKoYqlPSDYMQNRaovG4sDtwkPmgrV8E1LG0QL4zD0z6oFWkcVSCvpVm0kg2IvxBOwtJLMOjjVlos2JdcXQZzSxKKitZz2kNO2kqVsLfCDPvFZJWektM4ks3WpUqVHQMWak6ugVFKqi3QXAG4J3ubwCr4jGVMNQxGV4ly7Cg7YCs3GtSXijHnUQEA943lq6UYlQiYdnVBXcI7M2kCkO1W3uLXQFAb7F1n30iyBMZRWlVtrRkem4G6upB1AHkdwRfgZmTLn/AKo4lqisnV6ETRYoCQxIfVxJAvtuFXhbcCE9H2LVVr4DWG/paxWiQ2oHDv26JvzsCV+7Iyo39NmBxwFqdXFthcWd7dpKZw9U8hpe6X7mlkq5E/8AWjHJWCHqhSdNFw6BtXaOrdgb2Ita/Pe+Or0capRxOHr1A6YkliUTQUYhQGUlmvbSpF+YgFfzs9bjcFij6ozA0cPx9RKVQVHH+VQMNuKohkx0u6quVwFWoqUnpu9cs4W6gFKaXJvcudX/AIiJnzDo2XOFFOotNMIytRXQWuVQpZjqF10ngLHxm9luXVKdSrVqVVqGqVO1PRpCiyoDqPZG5sd7sxvvaAR/QfNDXwSh21VqOqhXN73en2dV+eoaW+9MPo5phssoqwDKetBBFwQarggg8RNjC5BWp18RiKeIUf1BBdDSJVWVdKsLODqta/I24CfOVdHq1DDrhExVqShgHWkBVAZixsxYoDdjvogGn6N3bqcRR3NKhjcRSw5Nz9mrdlQTyFyJtjM8ScXi8OGpaaWHp1MOSjGxcuCH7d29TkV4yRw+TCjQTD4ZjRVWU3sHLDVdtWriW3ueO81jkdT+or4lawBrUVp6TTuECatDX13JuzX77jhaAY+h2MxOIoUsVWemVq0Ebq0QrpYkktrLG9xba20nsT6jeUj+juVnC4enhjU1rTUKh06TpHAEXIJ8dpIYn1G8oBmiIgCIiAIiIAiIgHkwdQLkgkXNzY87AftM0hOkeb9SoUeu/q/vOapSts6iXVKV7ZIoVJIDtsbetz8O+Zep+JvrKfh67FGBNwRf5947pu9EczrVWqI7KyUyAL+uCdwDbYrbmd7zNxuZjz7U9Ne0W5cFR2/RZOp+JvrHU/E31mWauPxQpU2qNwUXM1t6KEtnzUYKQpZrnx4DvMyIgYXDsR4GUqhmD1H6y5Bv2fAT5bHVVxVNKb6TUYA3Uup2uboN+APC1u8CYsfOx1meH5+Pyab4tzO/7+C9dT8TfWOp+JvrMs9m0zGrVUKCxZgBx3mqmLQgMWKgmwOrb5nlK/0kzjVUOHRgQpHWEcja+nz/AEmuT9k3lPP5HPnBcy1tPrr4NccWqjy379F16n4m+sdT8TfWV7oQr9QWYvpZz1atbSEHBl52O/G3DYczZpvT2toy0nLafwYup+JvrMLsqkKWa/HjwHeYzLFilTaoeCj/AI25+Up2Gx7u5qXIJO3gPHvmblcqcE7a2XYcFZNtekXVaYIuGYjvDT66n4m+spFLHVVxaUqb6dbdoFS6kAXa6jgbDjt4mXwS7FlnLCufTK7xuHpmLqfib6z4qgKCxZgB4zZlJz3ONdU0kYFFNmKm4J7r8/H6d8jLkWOHTJxYnkrxRaKVRTYamBYXALcfLvmc0AdiWt5ykY+oRRPcvDfh5d0sXRSpUbDI9RmZmuRqXSQt+yvedt7njeU8TlzyJ8pXa6Z1mwPH2/ROxETWUiIiAIiIAiIgHzaQOd9Hlrt1qkrVsBcklSBwBHLjxH5yfgzm5VLTOptw9z7KfhsuqX6phZiDvxFu+/MSx5bgEopoQWF7k8yx4sfEzdtEycbhxgqqT22WZc9ZPYmnmGASsmiooZbg8wQRwII3Bm5E2NJrTKk9doqD5C9I3S7pfbvHgRz8xJnLMrVG61heqRa/ur7o/eSsTJHCxzmeZe9aLr5F1Piz6iImwoIrM8mpVu0RZxwYcfI9485o4XJDcrUsUFuHPwtxEsMTLm4mLLSql2nstnNcz4p9HiqALDgBtPueT2aio0cxy6nXTRUW4vcciDYjUCOB3MrrZE9E9kl0vsfaHgRz8xLcYmbkcWM8Oa+S3HmrH6IvLMsWmTUIvUIsT3D3R/8AbyUnsS3FjnHCifSOKp09s8kDmHRym7dYlkqcTYdlj4ryPiPzk/Em4Vz40Iuoe5ZXMFk5baqvZBHZ4hiP2liAnsSnj8aOPPjPy9nWTJWR7o9iImkrEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQD//Z"
                alt=""
              />
            </a>
          </div>
        </div>
        {/* end of  etemad */}

        {/* end */}
        <div className="flex flex-col">
          <p className="text-xs p-3 my-4">
            برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
            کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه
            (فروشگاه آنلاین دیجی‌کالا) است.
          </p>
          <div className="grid grid-cols-3 lg:grid-cols-6 items-center">
            {imagecards.map((card) => (
              <a key={card.url} href="#" className="mx-auto p-3">
                <img src={card.url} alt="" />
              </a>
            ))}
          </div>
        </div>
        {/*end of  end */}
      </footer>
    </>
  );
};

export default Footer;
