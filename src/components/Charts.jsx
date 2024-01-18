import { Box, Container, Grid, Stack } from "@mui/material";
import { AreaChart, Card, Title, DonutChart, BarChart } from "@tremor/react";
import { useSelector } from "react-redux";

const valueFormatter = function (number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

const AreaCharts = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  const salesData = sales?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString("tr-TR"),
    price: item.price,
    quantity: item.quantity,
    amount: item.amount,
    nameBrand: item.brandId.name,
    nameProduct: item.productId?.name,
    brandprice: item.price,
  }));
  const purchasesData = purchases?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString("tr-TR"),
    price: item.price,
    quantity: item.quantity,
    amount: item.amount,
    nameBrand: item.brandId.name,
    nameProduct: item.productId?.name,
    brandprice: item.price,
  }));
  console.log(sales);
  //   console.log(salesData);
  //   console.log(purchasesData);

  return (
    <Box>
      <Grid
        container
        mt={2}
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          item
          xs={12}
          md={4}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Card className=" h-[400px] ">
            <Title>Total Sales (USD)</Title>
            <AreaChart
              className=" mt-4 w-[100%]"
              data={salesData}
              index="date"
              categories={["amount", "quantity", "price"]}
              colors={["yellow", "purple", "pink"]}
              valueFormatter={valueFormatter}
              showAnimation={true}
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Card className=" h-[400px] flex justify-center items-center">
            <BarChart
              className=" mt-4 w-[100%] "
              data={salesData}
              categories={["amount"]}
              variant="pie"
              index="nameBrand"
              valueFormatter={valueFormatter}
              showAnimation={true}
              colors={["indigo", "rose", "cyan", "amber", "blue"]}
            />
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Card className=" h-[400px]">
            <Title>Sales by brand</Title>
            <div className="flex justify-center items-center h-[100%]">
              <DonutChart
                className=" mt-4 w-[100%]  h-[170px]"
                data={salesData}
                category="amount"
                index="nameBrand"
                valueFormatter={valueFormatter}
                showAnimation={true}
                colors={[
                  "slate",
                  "violet",
                  "indigo",
                  "rose",
                  "cyan",
                  "amber",
                  "blue",
                ]}
              />
            </div>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Card className=" h-[400px]">
            <Title>Total Purchases (USD)</Title>
            <AreaChart
              className="mt-4"
              data={purchasesData}
              index="date"
              categories={["amount", "quantity", "price"]}
              colors={["yellow", "purple", "pink"]}
              valueFormatter={valueFormatter}
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Card className=" h-[400px] flex justify-center items-center">
            <BarChart
              className=" mt-4 w-[100%] "
              data={purchasesData}
              categories={["amount"]}
              variant="pie"
              index="nameBrand"
              valueFormatter={valueFormatter}
              showAnimation={true}
              colors={["rose", "cyan", "amber", "blue"]}
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Card className=" h-[400px]">
            <Title>Purchases by brand</Title>
            <div className="flex justify-center items-center h-[100%]">
              <DonutChart
                className=" mt-4 w-[100%]  h-[170px]"
                data={purchasesData}
                category="amount"
                index="nameBrand"
                valueFormatter={valueFormatter}
                showAnimation={true}
                colors={[
                  "slate",
                  "violet",
                  "indigo",
                  "rose",
                  "cyan",
                  "amber",
                  "blue",
                ]}
              />
            </div>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AreaCharts;
