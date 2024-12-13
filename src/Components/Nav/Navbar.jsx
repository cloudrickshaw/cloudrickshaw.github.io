import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import SocialLink from "./SocialLink";

const useStyles = makeStyles({
	buttonStyle: {
		fontWeight: "bolder",
		color: "black",
	},
	navbar: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	navigations: {
		display: "flex",
		justifyContent: "space-between",
		width: "40%",
	},
	navItems: {
		textAlign: "center",
		color: "#000",
		fontWeight: "bolder",
		textTransform: "uppercase",
		fontSize: "1.1em",
	},
	title: {
		fontFamily: "sans-serif",
		fontSize: "3em",
		fontWeight: "bolder",
		textTransform: "uppercase",
		color: "#333",
		margin: "0.5em 0.5em 0.5em 0em",
		textAlign: "start",
	},
});

const Navbar = () => {
	const redirectCalendly = () => {
		window.open("https://calendly.com/cloudrickshaw");
	};
    const renderBootcamp = () => {
	    window.open("/bootcamp");
    }
	const styles = useStyles();
	return (
		<>
			<div className={styles.navbar}>
				<div className={styles.navigations}>
					<div className={styles.navItems}>
						<Button className={styles.buttonStyle}>HOME</Button>
					</div>
					<div className={styles.navItems}>
						<Button className={styles.buttonStyle}>F.A.Q</Button>
					</div>
					<div className={styles.navItems}>
						<Button className={styles.buttonStyle} onClick={redirectCalendly}>
							Book an Appointment
						</Button>
					</div>
                    <div className={styles.navItems}>
						<Button className={styles.buttonStyle} onClick={renderBootcamp}>
						 Bootcamp	
						</Button>
					</div>
				</div>
				<SocialLink />
			</div>
			<div className={styles.title}>Cloud Rickshaw</div>
		</>
	);
};

export default Navbar;
