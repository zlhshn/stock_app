import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import List from "@mui/material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PaidIcon from "@mui/icons-material/Paid";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useNavigate } from "react-router-dom";

const icons = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    url: "/dashboard/",
  },
  {
    title: "Purchases",
    icon: <ShoppingBasketIcon/>,
    url: "/dashboard/purchases/",
  },
  {
    title: "Sales",
    icon: <PaidIcon />,
    url: "/dashboard/sales/",
  },
  {
    title: "Firms",
    icon: <StorefrontIcon />,
    url: "/dashboard/firms/",
  },
  {
    title: "Brands",
    icon: <StarPurple500Icon />,
    url: "/dashboard/brands/",
  },
  {
    title: "Products",
    icon: <InventoryIcon />,
    url: "/dashboard/products/",
  },
];

const MenuList = ({ open }) => {
  const navigate = useNavigate();
  return (
    <List >
      {icons.map((item, index) => (
        <ListItem
          key={index}
          disablePadding
          sx={{
            display: "block",
            color: "white",
            "&:hover": { color: "red" },
            "&:hover .MuiSvgIcon-root": { color: "red" },
            "& .MuiSvgIcon-root": { color: "white" },
          }}
          onClick={() => navigate(item.url)}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "white",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuList;
