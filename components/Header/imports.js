import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 15,
  },
  toolbar: {
    minHeight: 70,
  },
}));

export {
  useTheme,
  useStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
};
