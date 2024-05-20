export default function Footer() {
  return (
    <>
      <div className="bg-blue-600 h-[40vh] w-[100%] p-[4rem] flex justify-evenly flex-wrap items-center gap-12 text-white max-sm:w-[100%] max-sm:h-[100%] max-sm:justify-center max-sm:items-center" id="Support">
        <div className="flex flex-col max-sm:text-center">
          <div>
            <h1 className="text-[50px] text-black font-bold max-sm:w-[100%]">
              THE<span className="text-white">SPACIOUS</span>
            </h1>
          </div>
          <div className="w-[20vw] max-sm:w-[100%]">
            <p>
              ONE OF THE BEST AND CLEANIEST WORDPRESS THEME FOR AGENCIES AND
              ONLINE PORTFOLIOS
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-sm:justify-center max-sm:items-center">
          <div>
            <h1 className="text-2xl font-bold">SITE NAVIGATION</h1>
          </div>
          <div>
            <ul>
              <li>GO TO HOME</li>
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>READ BOLG</li>
              <li>CONTACT US</li>
              <li>PRODUCT SUPPORT</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div>
            <h1 className="text-2xl font-bold">INFORMATION</h1>
          </div>
          <div>
            <ul>
              <li>SIGN UP</li>
              <li>USER LOGIN</li>
              <li>CREAT NEW ACCOUNT</li>
              <li>CHECKOUT</li>
              <li>MY CART</li>
              <li>OTHER INFORMARION</li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-sm:justify-center max-sm:items-center">
          <div>
            <h1 className="text-2xl font-bold">POLICIES & INFO</h1>
          </div>
          <div>
            <ul>
              <li>TERMS CONDITIONS</li>
              <li>WEBSITE POLICY</li>
              <li>POLICY FOR SELLERS</li>
              <li>POLICY FOR BUYERS</li>
              <li>SHIPPING & REFUND</li>
              <li>WHOLESALE POLICY</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-16 w-[100vw] bg-black text-white flex flex-wrap justify-center items-center max-sm:w-[100%] max-sm:h-[10vh] max-sm:text-center">
        <h1>
          (C) 2017, ALL RIGHTS RESERVED. THESPACIOUS THEME. DESIGNED BY
          TEMPLATE.NET
        </h1>
      </div>
    </>
  );
}
