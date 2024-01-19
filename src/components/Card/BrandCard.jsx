import useStock from "../../service/useStock";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const BrandCard = ({ brand, handleOpen, setInfo }) => {
  const { name, image, _id } = brand;
  const { deleteStock } = useStock();

  return (
    <div className="card w-[230px] sm:w-[310px] bg-base-100 shadow-2xl">
      <figure className="h-[330px]" sx={{ objectFit: "contain" }}>
        <img src={image} alt={name} />
      </figure>
      <div className="border-b-2"></div>
      <div className="card-body h-[120px] text-center">
        <h2 className="card-title font-extrabold">{name}</h2>
        <div className="card-actions justify-end">
          <div className="text-slate-800 hover:text-red-500 hover:cursor-pointer">
            <ModeEditIcon
              onClick={() => {
                handleOpen();
                setInfo(brand);
              }}
            />
          </div>
          <div className="text-slate-800 hover:text-red-500 hover:cursor-pointer">
            <DeleteIcon onClick={() => deleteStock("brands", _id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
