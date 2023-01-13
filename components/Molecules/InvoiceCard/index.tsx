import Link from "@components/atoms/Link";
import Text from "@components/atoms/Text";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
const InvoiceCard = (props: any) => {
	const TextStyle = { textAlign: "center", marginY: 2 };
	const { no, company_name, date } = props.list;
	return (
		<Link path={company_name}>
			<Card sx={{ width: 150, height: 180 }}>
				<CardContent>
					<Text text={`No${no}`} variant={"body1"} style={TextStyle} />
					<Text text={company_name} variant={"body1"} style={TextStyle} />
					<Text text={date} variant={"body1"} style={TextStyle} />
				</CardContent>
			</Card>
		</Link>
	);
};

export default InvoiceCard;
