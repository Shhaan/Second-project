import * as React from "react";

import Paypalbutton from "../../../Components/Paypalbutton/Paypalbutton";
import Box from "@mui/material/Box";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import FormControl from "@mui/material/FormControl";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";
import { PaypalClientid } from "../../../Config/Constants";
import { Farmercontext } from "../../../Functions/FarmerInboxcontext";
import { Button } from "@mui/material";

const FormGrid = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function PaymentForm({ products }) {
  const { activeStep, setActiveStep } = React.useContext(Farmercontext);

  const button = {
    backgroundColor: "#009cde",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%",
    marginBottom: "25px",
  };
  return (
    <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap>
      <FormControl component="fieldset" fullWidth></FormControl>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box>
          <PayPalScriptProvider options={{ "client-id": PaypalClientid }}>
            <Paypalbutton products={products} />
          </PayPalScriptProvider>

          <div>
            <button onClick={() => setActiveStep((p) => p + 1)} style={button}>
              Wallet payment
            </button>
          </div>

          <div>
            <button onClick={() => setActiveStep((p) => p + 1)} style={button}>
              Cash on delivery
            </button>
          </div>
        </Box>
      </Box>
      <Button
        variant="contained"
        style={{ marginLeft: "auto" }}
        sx={{
          width: { xs: "100%", sm: "fit-content" },
        }}
      >
        Next
      </Button>
    </Stack>
  );
}
