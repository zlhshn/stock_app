import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import useStock from "../../service/useStock";


const FirmCard = ({ firm, setInfo, handleOpen }) => {

  const { deleteStock } = useStock();
  return (
    <div className="card w-[240px] sm:w-[250px] md:w-[310px] bg-base-100 shadow-2xl">
      <figure className="h-[200px]" sx={{ objectFit: "contain" }}>
        <img src={firm?.image} alt={firm?.name}/>
      </figure>
      <div className="border-b-2"></div>
      <div className="card-body h-[280px] sm:h-[250px]">
        <h2 className="card-title">{firm?.name}</h2>
        <div className="badge badge-primary">{firm?.phone}</div>
        <p>{firm?.address}</p>
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
            <DeleteIcon onClick={() => deleteStock("firms", firm?._id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirmCard;
