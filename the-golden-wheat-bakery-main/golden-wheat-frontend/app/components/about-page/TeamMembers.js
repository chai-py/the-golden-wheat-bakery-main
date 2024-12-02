/* eslint-disable @next/next/no-img-element */
export default function TeamMembers() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8">
      <h1 className="p-6 text-2xl font-extrabold text-center text-black bg-white w-80 xl:text-3xl xl:w-96">
        Meet The Team
      </h1>

      {/* Etha's card */}
      <div className="flex flex-col items-center justify-center pt-4">
        {/* image */}
        <img
          src="../images/ethan.jpg"
          alt="ethan"
          className="justify-center object-cover w-32 h-32 rounded-full md:w-44 md:h-44 lg:w-52 lg:h-52"
        ></img>
        {/* Name */}
        <h2 className="p-4 text-2xl font-bold text-center md:text-3xl md:font-extrabold lg:text-4xl">
          Ethan Dam
        </h2>
        {/* Description */}
        <p className="h-auto p-4 text-base text-center text-black w-80 md:w-96 md:text-lg lg:w-96 lg:text-lg bg-card-beige rounded-xl">
          Ethan, our CEO and founder, is the visionary behind our wheat bakery.
          With a passion for quality and a deep love for baking, he established
          the company with the mission to bring wholesome, fresh, and nutritious
          wheat-based products to our community. Under his leadership, we
          continue to innovate while staying true to our roots of crafting
          delicious and healthy bread for every family.
        </p>
      </div>

      <div className="flex flex-col justify-center gap-8 lg:flex-row xl:flex-row lg:gap-20 xl:gap-48">
        {/* Chai's card */}
        <div className="flex flex-col items-center justify-center h-full pt-4">
          {/* image */}
          <img
            src="../images/chai.jpg"
            alt="chai"
            className="justify-center object-cover w-32 h-32 rounded-full md:w-44 md:h-44 lg:w-52 lg:h-52"
          ></img>
          {/* Name */}
          <h2 className="p-4 text-2xl font-bold text-center md:text-3xl md:font-extrabold lg:text-4xl">
            Chaitalkumar Trivedi
          </h2>
          {/* Description */}
          <p className="h-auto p-4 text-base text-center text-black w-80 md:w-96 md:text-lg lg:w-96 lg:text-lg bg-card-beige rounded-xl">
            Chai, our talented Pastry Chef, brings his expertise and love for
            baking to every creation. Specializing in wheat-based pastries,
            Chai’s attention to detail and commitment to quality ensure each
            treat is crafted to perfection. His passion for creating delicious,
            finely textured pastries makes every bite a delightful experience,
            reflecting his dedication to excellence and the art of baking.
          </p>
        </div>

        {/* Aashita's card */}
        <div className="flex flex-col items-center justify-center h-full pt-4">
          {/* image */}
          <img
            src="../images/aashita.jpg"
            alt="aashita"
            className="justify-center object-cover w-32 h-32 rounded-full md:w-44 md:h-44 lg:w-52 lg:h-52"
          ></img>
          {/* Name */}
          <h2 className="p-4 text-2xl font-bold text-center md:text-3xl md:font-extrabold lg:text-4xl">
            Aashita Aashita
          </h2>
          {/* Description */}
          <p className="h-auto p-4 text-base text-center text-black w-80 md:w-96 md:text-lg lg:w-96 lg:text-lg bg-card-beige rounded-xl">
            Aashita, one of our talented chefs, brings her culinary expertise
            and creativity to every dish she prepares. With a focus on using the
            finest wheat ingredients, Aashita’s passion for food shines through
            in every loaf of bread and baked good. Her commitment to crafting
            wholesome, flavorful creations ensures that our bakery remains a
            place where quality and taste are always at the forefront.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-8 lg:flex-row xl:flex-row lg:gap-20 xl:gap-48">
        {/* Mo's card */}
        <div className="flex flex-col items-center justify-center pt-4">
          {/* image */}
          <img
            src="../images/mo.jpg"
            alt="mo"
            className="justify-center object-cover w-32 h-32 rounded-full md:w-44 md:h-44 lg:w-52 lg:h-52"
          ></img>
          {/* Name */}
          <h2 className="p-4 text-2xl font-bold text-center md:text-3xl md:font-extrabold lg:text-4xl">
            Moksham Sharma
          </h2>
          {/* Description */}
          <p className="h-auto p-4 text-base text-center text-black w-80 md:w-96 md:text-lg lg:w-96 lg:text-lg bg-card-beige rounded-xl">
            Moksham, one of our skilled editors, plays a key role in ensuring
            that every piece of content we share reflects our bakery’s values
            and quality. With an eye for detail and a passion for storytelling,
            Moksham carefully crafts the messaging behind our brand. His
            dedication to excellence helps communicate our mission of providing
            wholesome, delicious wheat-based products to our community.
          </p>
        </div>

        {/* Shiela's card */}
        <div className="flex flex-col items-center justify-center pt-4">
          {/* image */}
          <img
            src="../images/shiela.jpg"
            alt="shiela"
            className="justify-center object-cover w-32 h-32 rounded-full md:w-44 md:h-44 lg:w-52 lg:h-52"
          ></img>
          {/* Name */}
          <h2 className="p-4 text-2xl font-bold text-center md:text-3xl md:font-extrabold lg:text-4xl">
            Shiela Daguio
          </h2>
          {/* Description */}
          <p className="h-auto p-4 text-base text-center text-black w-80 md:w-96 md:text-lg lg:w-96 lg:text-lg bg-card-beige rounded-xl">
            Shiela, our talented editor, is the voice behind many of our brand’s
            stories. With a keen eye for detail and a strong passion for
            writing, Shiela ensures that every piece of content resonates with
            our audience and highlights the quality and care behind our
            wheat-based products. Her expertise in crafting engaging narratives
            helps us connect with our customers and share the heart of our
            bakery.
          </p>
        </div>
      </div>
    </div>
  );
}
