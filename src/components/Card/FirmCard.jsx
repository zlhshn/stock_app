import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import useStock from "../../service/useStock";
import { btnStyle } from "../../style/globalStyle";

const FirmCard = ({ firm, setInfo, handleOpen }) => {
  const { address, image, name, phone, _id } = firm;
  const { deleteStock } = useStock();
  return (
    <div className="card w-80 bg-base-100 shadow-2xl">
      <figure className="h-[200px]" sx={{ objectFit: "contain" }}>
        <img src={image} alt={name} />
      </figure>
      <div className="border-b-2"></div>
      <div className="card-body h-[230px]">
        <h2 className="card-title">{name}</h2>
        <div className="badge badge-primary">{phone}</div>
        <p>{address}</p>
        <div className="card-actions justify-end">
          <div className="text-slate-800 hover:text-red-500 hover:cursor-pointer">
            <ModeEditIcon
              onClick={() => {
                handleOpen();
                setInfo(firm);
              }}
            />
          </div>
          <div className="text-slate-800 hover:text-red-500 hover:cursor-pointer">
            <DeleteIcon onClick={() => deleteStock("firms", _id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirmCard;
