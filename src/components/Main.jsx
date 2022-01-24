import React, { useContext } from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"
import { Box, Grid, Typography } from "@mui/material"
import AppContext from "./AppContext"

const Main = () => {
  const { listOperations, totalIncomming, totalOutgoing } =
    useContext(AppContext)

  const formatDataNegative = (str) => {
    return String(str).slice(1)
  }

  return (
    <>
      <Grid container sx={{ px: "20%" }}>
        <Grid item xs>
          <List>
            <ListItem disablePadding>
              <ListItemText sx={{ my: 2, mx: 2 }}>
                <Typography variant="h6" component="div">
                  INCOMING
                </Typography>
              </ListItemText>
            </ListItem>
            <Divider />
            {listOperations.map(({ value, description }, index) => {
              if (value < 0) {
                return (
                  <ListItem
                    key={index}
                    sx={{ bgcolor: index % 2 == 0 ? "white" : "#EFF3F8" }}
                  >
                    <ListItemText sx={{ textAlign: "right", height: "64px" }}>
                      <div> </div>
                      <div> </div>
                    </ListItemText>
                  </ListItem>
                )
              } else {
                return (
                  <ListItem
                    key={index}
                    sx={{ bgcolor: index % 2 == 0 ? "white" : "#EFF3F8" }}
                  >
                    <ListItemText sx={{ textAlign: "right", height: "64px" }}>
                      <Typography sx={{ color: "#1CE800" }}>
                        {"+$" + value}
                      </Typography>
                      <Typography sx={{ fontStyle: "italic" }}>
                        {description}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                )
              }
            })}
            <Divider />
            <ListItem>
              <ListItemText>
                <Typography variant="h6" component="div">
                  TOTAL
                </Typography>
              </ListItemText>
              <ListItemText sx={{ textAlign: "right" }}>
                <Typography sx={{ color: "#1CE800" }}>
                  {"+$" + totalIncomming}
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>

        {/* RIGHT */}

        <Divider orientation="vertical" flexItem />
        <Grid item xs>
          <List>
            <ListItem disablePadding>
              <ListItemText sx={{ my: 2, mx: 2 }}>
                <Typography variant="h6" component="div">
                  OUTGOING
                </Typography>
              </ListItemText>
            </ListItem>
            <Divider />
            {listOperations.map(({ value, description }, index) => {
              if (value > 0) {
                return (
                  <ListItem
                    key={index}
                    sx={{ bgcolor: index % 2 == 0 ? "white" : "#EFF3F8" }}
                  >
                    <ListItemText sx={{ textAlign: "right", height: "64px" }}>
                      <div> </div>
                      <div> </div>
                    </ListItemText>
                  </ListItem>
                )
              } else {
                return (
                  <ListItem
                    key={index}
                    sx={{ bgcolor: index % 2 == 0 ? "white" : "#EFF3F8" }}
                  >
                    <ListItemText sx={{ textAlign: "right", height: "64px" }}>
                      <Typography sx={{ color: "#F33731" }}>
                        {"-$" + formatDataNegative(value)}
                      </Typography>
                      <Typography sx={{ fontStyle: "italic" }}>
                        {description}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                )
              }
            })}
            <Divider />
            <ListItem>
              <ListItemText>
                <Typography variant="h6" component="div">
                  TOTAL
                </Typography>
              </ListItemText>
              <ListItemText sx={{ textAlign: "right" }}>
                <Typography sx={{ color: "#F33731" }}>
                  {"-$" + formatDataNegative(totalOutgoing)}
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12}>
          <Divider orientation="horizontal" flexItem />
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, ml: 2 }}
            >
              RESULT
            </Typography>
            {totalIncomming + totalOutgoing > 0 ? (
              <Typography
                sx={{
                  color: "#1CE800",
                  textAlign: "right",
                  mt: 1,
                  mr: 2,
                }}
              >
                {"+$" + (totalIncomming + totalOutgoing)}
              </Typography>
            ) : (
              <Typography
                sx={{
                  color: "#E80000",
                  textAlign: "right",
                  mt: 1,
                  mr: 2,
                }}
              >
                {"-$" + formatDataNegative(totalIncomming + totalOutgoing)}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Main
