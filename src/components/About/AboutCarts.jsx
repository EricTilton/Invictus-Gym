import { cardList } from "./CardList";

function AboutCarts() {
  return (
    <>
      {cardList.map((card, id, hover, color) => (
        <div
          key={id}
          className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl min-h-[340px] w-full card-item-div md1000:min-h-[260px]"
          id={id}
          hover="background-image: url('../src/images/who-we-are/workout2.jpg');"
          color={color}
          
        >
          <img src={card.img} alt="box_img" className=" w-[75px] mb-4" />
          <p className=" text-[24px] font-bold uppercase mb-7">{card.title}</p>
          <p className="text-[15px] font-medium leading-2 w-full">
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default AboutCarts;
