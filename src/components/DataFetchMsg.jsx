import { Alert, Grid, Skeleton, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import NoData from  "../assets/nodata.png"
import { Image } from "@mui/icons-material";

export const ErrorMsg = () => {
  return (
    <Alert severity="error" sx={{ my: 3 }}>
  404 | Not Found
  </Alert>
  );
};

export const NoDataMsg = () => {
  return (
    <Box height={"70vh"} sx={{padding:"2rem" ,textAlign:"center"}}>
 <img src={NoData} width={"550px"} height={"350px"}/>
    </Box>
  );
};

export const CardSkeleton = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {arr.map((item) => (
        <Grid item>
          <div className="flex flex-col flex-wrap gap-5 w-80 ">
            <div className="skeleton h-[200px] w-full "></div>
            <div className="skeleton h-4 w-20 "></div>
            <div className="skeleton h-4 w-28 mt-5"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="flex flex-row justify-end w-full gap-2">
              <div className="skeleton h-5 w-8 text-right"></div>
              <div className="skeleton h-5 w-8 text-right"></div>
            </div>
          </div>
        </Grid>
      ))}
    </>
  );
};

const TableSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width="100%" height={70} />
      <Skeleton variant="rectangular" width="100%" height={40} />
      <Skeleton variant="rectangular" width="100%" height={40} />
      <Skeleton variant="rectangular" width="100%" height={30} />
      <Skeleton variant="rectangular" width="100%" height={30} />
      <Skeleton variant="rectangular" width="100%" height={30} />
      <Skeleton variant="rectangular" width="100%" height={30} />
    </Stack>
  );
};

export default TableSkeleton;
