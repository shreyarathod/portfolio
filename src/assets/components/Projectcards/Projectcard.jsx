import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import styles from "./Projectcard.module.css";

export default function Projectcard(props) {
  return (
    <Box
      sx={{
        perspective: "1000px",
        transition: "transform 0.4s",
        "& > div, & > div > div": {
          transition: "inherit",
        },
        "&:hover": {
          "& > div": {
            transform: "rotateY(30deg)",
            "& > div:nth-child(2)": {
              transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
            },
            "& > div:nth-child(3)": {
              transform: "translate3d(45px, 50px, 40px)",
            },
          },
        },
      }}
    >
      <Card
        className={styles.card}
        variant="outlined"
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          minHeight: "280px",
          width: "260px",
          backgroundColor: "#BFD7EA",
          borderColor: "#000",
        }}
      >
        <Typography level="h2" fontSize="lg" textColor="#000">
          {props.type}
        </Typography>

        <CardCover
          className={styles.cardcover}
          sx={{
            background: "",
            border: "1px solid",
            borderColor: "#777",
            backdropFilter: "blur(0px)",
          }}
        >
          <img
            src={props.image}
            alt="Card Cover"
            className={styles.coverImage}
          />
          <Typography level="h2" fontSize="lg" textColor="#fff"></Typography>
        </CardCover>
        <CardContent
          sx={{
            alignItems: "self-end",
            justifyContent: "flex-end",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
            border: "1px solid",
            borderColor: "#fff",
            backdropFilter: "blur(0px)",
          }}
        >
          <Typography level="h2" fontSize="lg" textColor="#fff" m={2}>
            {props.title}
            <div className={styles.button}>
              <a
                href={props.link}
                class="relative inline-flex items-center justify-start px-4 py-1 overflow-hidden font-medium transition-all bg-black rounded hover:bg-black group"
              >
                <span class="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-black">
                  Link
                </span>
              </a>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
