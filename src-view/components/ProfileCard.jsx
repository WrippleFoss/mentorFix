import React from "react";
import cx from "clsx";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";
import { grey, purple, teal } from "@material-ui/core/colors";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: grey,
  },
});
const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 250,
    textAlign: "center",
    width: 250,
    height: 300,
  },
  avatar: {
    width: 120,
    height: 120,
    margin: "auto",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 6,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 15,
    color: palette.grey[700],
    //marginBottom: "0.875em",
  },
  company: {
    fontSize: 13,
    color: palette.grey[500],
    //marginBottom: "0.875em",
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },
  leftButton: {
    borderRadius: 100,
    // color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
  rightButton: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: teal[600],
    color: teal[700],
    boxShadow: teal[300],
    "&:hover": {
      backgroundColor: teal[600],
      color: "white",
    },
  },
}));

const ProfileCard = () => {
  const styles = useStyles(theme);
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: "rgba(0, 0, 0, 0.08)",
    height: "50%",
  });
  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <CardContent>
        <Avatar className={styles.avatar} src={"https://i.pravatar.cc/300"} />
        <h3 className={styles.heading}>Alan Podemski</h3>
        <span className={styles.subheader}>Growth Hacker</span> <br />
        <span className={styles.company}>Hackative Labs</span>
      </CardContent>
      <Divider light />
      <Box display={"flex"}>
        <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
          <Button
            variant="contained"
            color="secondary"
            className={styles.leftButton}
          >
            Connect
          </Button>
          {/* <p className={styles.statLabel}>Followers</p>
          <p className={styles.statValue}>6941</p> */}
        </Box>
        <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
          <Button variant="outlined" className={styles.rightButton}>
            Follow
          </Button>
          {/* <p className={styles.statLabel}>Following</p>
          <p className={styles.statValue}>12</p> */}
        </Box>
      </Box>
    </Card>
  );
};

export default ProfileCard;
