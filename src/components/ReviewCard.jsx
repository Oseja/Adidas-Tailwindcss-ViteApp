import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]" />
        <p className="mt-6 max-w-sm info-text text-center">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">  
        <img src={star} width={24} height={24} className="object-contain m-0"/>
        <p>{(rating)}</p>
        </div>
        <p>{customerName}</p>
    </div>
  )
}

export default ReviewCard