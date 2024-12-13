import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	pContent: {
		paddingLeft: "0.7rem",
		textAlign: "justify",
	},
	bulletRow: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	bulletIcon: {
		height: "0.5rem",
		paddingRight: "0.5rem",
	},
});

const BootcampBlock = ({ title, content }) => {
	const styles = useStyles();
	return (
		<>
          <div>DevOps Bootcamp 2022</div>
          span: 2-3 months
          <br/>
          sync: Weekly meet certain hours, 1 week sprint(plan)
          <br/>
          quota: 3-4 selection
          <br/>
          incentive: paid, enroll and earn 
          <br/>
          misc:
            - More hands on
          <br/>
          contact: drop your cv to bootcamp@cloudrickshaw.com and some lines on why you want to do this
		</>
	);
};

export default BootcampBlock;
