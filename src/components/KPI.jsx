import { Stack } from "@mui/material";
import { green, amber, red } from "@mui/material/colors"
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";
import { Card, Flex, Metric, Text } from "@tremor/react";
import { useSelector } from "react-redux";

const KPI = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  const totalSales = sales?.reduce((acc, item) => acc + item.amount, 0);
  const totalPurchases = purchases?.reduce((acc, item) => acc + item.amount, 0);

  const kpiData = [
    {
      id: 1,
      title: "sales",
      amount: `${totalSales}`,
      icon: <ShoppingCartIcon sx={{ fontSize: "2rem" }} />,
      decorationColor: "yellow",
      bgcolor: amber[100],
      color: amber[700],
    },
    {
      id: 2,
      title: "purchases",
      amount: `${totalPurchases}`,
      icon: <PaymentIcon sx={{ fontSize: "2rem" }} />,
      decorationColor: "red",
      bgcolor: red[100],
      color: red[800],
    },
    {
      id: 3,
      title: "profit",
      amount: `${totalSales - totalPurchases}`,
      icon: <LocalAtmIcon sx={{ fontSize: "2rem" }} />,
      decorationColor: "green",
      bgcolor: green[100],
      color: green[800],
    },
  ];

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      direction="row"
      gap={2}
    >
      {kpiData.map((item) => (
        <Card
          key={item.id}
          className="max-w-xs mx-auto"
          decoration="left"
          decorationColor= {item.decorationColor}
          decorationSize= "30px"
        >
          <Flex className="space-x-1">
            <div>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  bgcolor: item.bgcolor,
                  color: item.color,
                  width: "60px",
                  height: "60px",
                  borderRadius: "5px",
                }}
              >
                {item.icon}
              </Stack>
            </div>
            <div>
              <Text>{item.title.toUpperCase()}</Text>
              <Metric>$ {item.amount}</Metric>
            </div>
          </Flex>
        </Card>
      ))}
    </Stack>
  );
};

export default KPI;