import { IoStar,IoStarHalf } from "react-icons/io5";

interface StarsProps{
    rating:number,
}
const Stars = ({rating}:StarsProps) => {
    const ratingStar = Array.from({ length: 5 }, ( _elem ,index) => {
      let number = index + 0.5;
      return (
        <span key={index}>
          {rating >= index + 1 ? (
            <IoStar/>
          ) : rating >= number ? (
            <IoStarHalf/>
          ) : (
            ""
          )}
        </span>
      );
    });
  
    return (
        <div className="flex gap-x-1">
          {ratingStar}
        </div>
    );
  };
  export default Stars