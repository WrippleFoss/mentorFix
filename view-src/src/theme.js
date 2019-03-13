import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#757ce8",
			main: "#3f50b5",
			dark: "#002884",
			contrastText: "#fff"
		},
		secondary: {
			light: "#ff7961",
			main: "#f44336",
			dark: "#ba000d",
			contrastText: "#000"
		},
		error: {
			main: "#F44336",
			light: "#E57373",
			dark: "#D32F2F"
		},
		typography: {
			useNextVariants: true
		}
	}
});

export default theme;
