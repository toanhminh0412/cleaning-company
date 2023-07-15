import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-32 pb-20">
      <section className="flex flex-row flex-wrap lg:flex-nowrap justify-center gap-x-4 w-11/12 mx-auto">
        <div className="card w-11/12 lg:w-1/3 bg-base-100 shadow-xl border border-slate-200 p-10">
            <div className="relative rounded-xl w-full max-w-sm xl:w-10/12 aspect-square mx-auto">
              <Image src="/img/profile.jpeg" alt="Shoes" fill />
            </div>
          <div className="card-body items-center text-center prose">
            <h2 className="card-title">Maribel Bautista Nuval</h2>
            <p className="mt-[-30px] font-light text-slate-500 text-xl">Cleaning professional</p>
            <h3 className="mt-[-10px] font-semibold text-red-500">30 years of experience!</h3>
          </div>
        </div>
        <div className="card w-11/12 mt-6 lg:mt-0 lg:w-2/3 bg-base-100 shadow-xl border border-slate-200 p-10">
          <div className="prose">
            <article>
              <h1 className="underline underline-offset-[10px] decoration-orange-500">About me</h1>
              <p>I'm a reliable and trustworthy cleaning professional with 30+ years of experience keeping facilities in clean and orderly condition. Performs heavy cleaning duties, including cleaning floors, shampooing rugs, washing walls and glass, cleaning restrooms, dusting office furniture, and removing trash. Completes routine maintenance activities, including notifying management of the need for repairs. Reports work in progress or completion.</p>
              <h2>We provide quality services only!</h2>
            </article>
            <div>Feel free to contact me at:</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-2 mt-4">
              <div><i className="fa-solid fa-phone text-yellow-500 text-xl me-2"></i> 250-884-5157</div>
              <div><i className="fa-solid fa-envelope text-red-500 text-xl me-2"></i> <Link href="mailto:user@example.org">user@example.org</Link></div>
              <div><i className="fa-brands fa-facebook text-blue-500 text-xl me-2"></i> <Link href="https://www.facebook.com/mabel.n.sanchez1" target="_blank">Maribel Bautista Nuval</Link></div>
            </div>
            <blockquote>Let me know what you need help with! I'll be on my way.</blockquote>
          </div>
        </div>
      </section>
      <section className="card w-11/12 mx-auto border border-slate-200 shadow-xl mt-10 p-10">
        <div className="prose">
          <h1 className="underline underline-offset-[10px] decoration-orange-500">Services</h1>
        </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-10 mt-12">
            <div className="text-center prose">
              <div><i className="fa-solid fa-shop text-orange-500 w-fit h-fit p-4 text-4xl border-2 border-orange-500 hover:bg-orange-500 duration-300 hover:text-white rounded-full"></i></div>
              <h2>Commercial cleaning</h2>
              <p>Anything in your shop/store can get cleaner, and I'll make that happen for you. With 30 years of experience working with local businesses, the dirtiest doors, counters, windows, tables or even toilets are no longer a challenge!</p>
            </div>
            <div className="text-center prose">
              <div><i className="fa-solid fa-house text-orange-500 w-fit h-fit p-4 text-4xl border-2 border-orange-500 hover:bg-orange-500 duration-300 hover:text-white rounded-full"></i></div>
              <h2>Move in/move out cleaning</h2>
              <p>Moving in or out of the place but don't want to deal with the hustle of cleaning things up? I got you covered. I will make sure your house is ready for your arrival/ departure!</p>
            </div>
            <div className="text-center prose">
              <div><i className="fa-solid fa-calendar-days text-orange-500 w-fit h-fit p-4 text-4xl border-2 border-orange-500 hover:bg-orange-500 duration-300 hover:text-white rounded-full"></i></div>
              <h2>On-going cleaning</h2>
              <p>What's better than having a constantly clean place to live in? You can schedule weekly, bi-weekly, monthly cleaning sessions with me. I will make sure your place is always free of dusts and germs!</p>
            </div>
            <div className="text-center prose">
              <div><i className="fa-solid fa-person-cane text-orange-500 w-fit h-fit p-4 text-4xl border-2 border-orange-500 hover:bg-orange-500 duration-300 hover:text-white rounded-full"></i></div>
              <h2>Cleaning for seniors</h2>
              <p>A clean place is essential for health, especially for seniors. Whether if it is an apartment, condo or a house, book a cleaning session for you or your parents right now! I will make sure they have the best environment to live in.</p>
            </div>
          </div>
      </section>
      
      <section className="w-11/12 mx-auto mt-10">
        <div className="prose">
            <h1 className="underline underline-offset-[10px] decoration-orange-500">My past works</h1>
        </div>
        <div className="carousel rounded-box mt-8 border border-slate-500 shadow-xl w-full">
          <div className="carousel-item border-r border-slate-500 relative w-80 aspect-video">
            <Image src="/img/house1.jpg" alt="House pic" fill/>
          </div> 
          <div className="carousel-item border-r border-slate-500 relative w-80 aspect-video">
            <Image src="/img/house2.jpg" alt="House pic" fill/>
          </div> 
          <div className="carousel-item border-r border-slate-500 relative w-80 aspect-video">
            <Image src="/img/house3.jpg" alt="House pic" fill/>
          </div> 
          <div className="carousel-item border-r border-slate-500 relative w-80 aspect-video">
            <Image src="/img/house4.jpg" alt="House pic" fill/>
          </div> 
          <div className="carousel-item border-r border-slate-500 relative w-80 aspect-video">
            <Image src="/img/house5.jpg" alt="House pic" fill/>
          </div> 
          <div className="carousel-item border-r border-slate-500 relative w-80 aspect-video">
            <Image src="/img/house6.jpg" alt="House pic" fill/>
          </div> 
        </div>
      </section>
      <section className="mt-10 w-11/12 mx-auto">
        <div className="prose">
          <h1 className="underline underline-offset-[10px] decoration-orange-500">Reviews</h1>
        </div>
        <div className="flex flex-row flex-wrap mt-12 gap-8">
          <div className="card w-96 bg-base-100 shadow-xl border border-slate-300">
            <div className="card-body prose">
              <h2 className="card-title">Lee Perez</h2>
              <div className="rating rating-md">
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque nulla, eleifend ac ante sit amet, rhoncus porta nisl. Proin ac purus nec nulla fermentum ullamcorper. Sed quis dapibus ante. Proin vitae ante aliquet, aliquet nibh eu, semper mi. Integer eros risus, egestas non rhoncus non, feugiat ac odio.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl border border-slate-300">
            <div className="card-body prose">
              <h2 className="card-title">Lee Perez</h2>
              <div className="rating rating-md">
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque nulla, eleifend ac ante sit amet, rhoncus porta nisl. Proin ac purus nec nulla fermentum ullamcorper. Sed quis dapibus ante. Proin vitae ante aliquet, aliquet nibh eu, semper mi. Integer eros risus, egestas non rhoncus non, feugiat ac odio.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl border border-slate-300">
            <div className="card-body prose">
              <h2 className="card-title">Lee Perez</h2>
              <div className="rating rating-md">
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque nulla, eleifend ac ante sit amet, rhoncus porta nisl. Proin ac purus nec nulla fermentum ullamcorper. Sed quis dapibus ante. Proin vitae ante aliquet, aliquet nibh eu, semper mi. Integer eros risus, egestas non rhoncus non, feugiat ac odio.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
