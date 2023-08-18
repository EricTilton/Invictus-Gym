import Footer from "../components/Footer/Footer";

function Login() {
  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Contact Us
          </h1>
        </div>
        {/* contact */}
        <div className="bg-white py-[12rem] page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1 ">
          {/* first col */}
          <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
            <h2 className="text-black text-[36px] font-bold leading-[1.2]">
           Let us know what you're interested in and we'll get right back to you!
            </h2>
            <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
            Embark on a journey of transformation with Invictus Gym. Our cutting-edge facilities, dedicated trainers, and diverse range of classes create the ultimate fitness experience. Join us and become part of a thriving community that supports your goals and inspires your progress. Elevate your fitness journey with Invictus Gym today.
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">
                  Address
                </h3>
                <span className="bg-[#ff0336] w-[90px] h-[4px] absolute top-[33px]"></span>
                <p className="text-[15px] font-medium text-[#646464]">
                762 Meadow Lane
                
                  <br /> Wichita, KS 67202, USA
                </p>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Hours</h3>
                <span className="bg-[#ff0336] w-[70px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>Mon to Fri: 7:00 am — 10:00 pm</p>
                  <p>Sat: 7:00 am — 9:00 pm</p>
                  <p>Sun: 7:00 am — 6:00 pm</p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Information</h3>
                <span className="bg-[#ff0336] w-[130px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>+1 (316) 555-7890</p>
                  <p>&nbsp;contact@invictusgym.com</p>
                </div>
              </div>
              {/*  */}
              {/* <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Follow Us</h3>
                <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[18px] font-medium text-black flex gap-5">
                  <i className="fa-brands fa-facebook-f px-[16px] py-[13px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                  <i className="fa-brands fa-twitter p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                  <i className="fa-brands fa-instagram p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                  <i className="fa-brands fa-pinterest-p p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                </div>
              </div> */}
            </div>
          </div>

          {/* second col ---*/}
          <form onSubmit={()=>{ alert("We'll contact you soon!"); }} className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full">
            <h3 className="text-[28px] font-bold mb-14">Leave Us Your Info</h3>
            <span className="bg-[#ff0336] w-[280px] h-[4px] absolute top-[77px] info-span"></span>
            <input
              required
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Full Name *"
              type="text"
            ></input>
            <input
              required
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Email Address *"
              type="email"
            ></input>
            <select required className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8">
              <option value="">Select Class</option>
              <option value="personaltraining">Personal Training Sessions</option>
              <option value="boxing">Boxing</option>
              <option value="yoga">Yoga</option>
              <option value="jiujitsu">Jiu Jitsu</option>
              <option value="cycling">Cycling</option>
              <option value="crossfit">Crossfit</option>
            </select>
            <textarea
              placeholder="Tell us your goals"
              className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            ></textarea>
            <button
           
              type="submit"
              className="text-white bg-[#ff0336] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6"
              value="Submit"
            >
              submit
            </button>
          </form>
        </div>

        {/* map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.6224512570357!2d-97.28755962363488!3d37.65807931887283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bae497f89d1b83%3A0xbfd65fa6df19dd9!2sE%20Meadow%20Ln%2C%20Wichita%2C%20KS%2067218%2C%20USA!5e0!3m2!1sen!2sth!4v1692101844073!5m2!1sen!2sth"
          allowFullScreen=""
          loading="lazy"
          samesite="Strict"
          title="map"
          style={{ width: "100%", height: "45rem", border: "0px" }}
        ></iframe>
        <Footer />
      </section>
    </>
  );
}

export default Login;
