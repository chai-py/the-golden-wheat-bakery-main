"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

export default function CardCarousel() {
  const cards = [
    {
      id: 1,
      title: "Sourdough",
      description:
        "Tangy, chewy bread with a crisp crust, made through natural fermentation using wild yeast and lactic acid bacteria, offering a unique and flavorful taste.",
      imageUrl: "images/sourdough-bread.jpg",
    },
    {
      id: 2,
      title: "Whole Wheat",
      description:
        "Hearty bread with a nutty flavor, made from whole wheat flour, preserving the bran, germ, and endosperm for natural nutrients and fiber.",
      imageUrl: "images/whole-wheat-bread.jpg",
    },
    {
      id: 3,
      title: "Baguette",
      description:
        "Classic French bread with a crisp crust. Made with simple ingredients—flour, water, yeast, and salt—the dough undergoes a lengthy fermentation process.",
      imageUrl: "images/baguette.jpg",
    },
    {
      id: 4,
      title: "Ciabatta",
      description:
        "Italian bread with a light, airy texture. The name ciabatta means slipper in Italian, referring to its shape resembling a worn-out slipper.",
      imageUrl: "images/ciabatta.jpg",
    },
    {
      id: 5,
      title: "Rye Bread",
      description:
        "Dense, flavorful bread with a dark crust, made with rye flour, often combined with wheat flour for added structure and texture, offeringa robust taste.",
      imageUrl: "images/rye-bread.jpg",
    },
    {
      id: 6,
      title: "Multigrain Bread",
      description:
        "Hearty bread made with a variety of grains, giving it a rich, nutty flavor and texture. Multigrain bread can vary in its composition, offering additional nutrients.",
      imageUrl: "images/multigrain.jpg",
    },
  ];

  // state management

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const totalCards = cards.length;
  // const [cardsImage, setCardsImage] = useState(cards);

  // fetch data image from API (didn't work)
  // useEffect (() => {
  //   async function fetchImage() {
  //     try {
  //       const response = await fetch("https://golden-wheat-backend-ocs3ziby4-aashitas-projects-5cef0c8d.vercel.app/products");
  //       const data = await response.json();

  //       setCardsImage(prevCards => prevCards.map((card, index) => ({
  //         ...card,
  //         imgUrl: data[index] || "",
  //       })));
  //     } catch (error) {
  //       console.error("Error fetching images:", error);
  //     }
  //   }
  //   fetchImages();
  // }, []);

  //   check if we're in a browser environment
  useEffect(() => {
    setIsClient(true);
    const updateCardsPerView = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setCardsPerView(4);
      } else if (width >= 768) {
        setCardsPerView(3);
      } else if (width >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(totalCards - cardsPerView);
    }
  };

  const goNext = () => {
    if (currentIndex < totalCards - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const displayedCards = cards.slice(currentIndex, currentIndex + cardsPerView);

  const transform = -(currentIndex * 100) / totalCards;

  return (
    <div className="justify-center relative p-4 w-full max-w-full overflow-hidden bg-black">
      {isClient && (
        <div className="justify-center px-8">
          <div
            className="flex gap-3 justify-center transition-transform duration-300 px-2"
            style={{
              transform: `translateX(-${transform * 100}%)`,
            }}
          >
            {displayedCards.map((card) => (
              <div
                key={card.id}
                className="justify-center w-full border border-white rounded-lg max-w-96 sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <div className="bg-card-background rounded-lg h-full overflow-hidden">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="object-cover w-full h-40"
                  />
                  <div className="flex-1 p-2 flex flex-col justify-between">
                    <h3 className="text-xl font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="p-2 mt-4 text-black rounded-lg bg-card-beige">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* buttons */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
            disabled={false}
          >
            &lt;
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
            disabled={false}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
