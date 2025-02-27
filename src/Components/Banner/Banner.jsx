


const Banner = () => {
    
    return (
        <div className="mt-5 lg:mt-10 mb-12 lg:mb-20">
  <div className="relative h-[600px] rounded-3xl bg-[url('https://i.postimg.cc/0y9NBvWB/aditya-romansa-m6p4lq-Wxfy0-unsplash.jpg')] bg-cover bg-center">
    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(21,11,43,0.9),rgba(21,11,43,0))] rounded-3xl flex justify-center items-center text-center">
        <div className="flex flex-col w-[90%] lg:w-[70%]  ">
        <h1 className="text-white text-3xl lg:text-5xl font-bold mb-6">Discover an exceptional cooking class tailored for you!</h1>
        <p className="text-white text-base font-normal">Learn and Master Fundamental Cooking Techniques, Knife Skills, Flavor Pairing, Culinary Science, and Cook 500+ Dishes to Become an Exceptionally Skilled World-Class Chef. 🍽️🔥👨‍🍳</p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-10">
            <button className="bg-[#0BE58A] text-[#150B2B] text-xl font-semibold   pl-8 pr-8 pt-5 pb-5 rounded-[50px] hover:bg-slate-500">Explore Now</button>
            <button className="bg-transparent text-white font-semibold text-xl border border-solid border-white pl-8 pr-8 pt-5 pb-5 rounded-[50px] hover:bg-slate-500">Our Feedback</button>
        </div>
        </div>
    </div>
  </div>
</div>
    );
};

export default Banner;