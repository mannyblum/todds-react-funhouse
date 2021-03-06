import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { PageHeading } from "../Common";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const Layouts = props => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <PageHeading title="Layouts" />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac vehicula justo. Suspendisse blandit urna quam. Sed consequat a massa a semper. Morbi ultricies volutpat felis, ut iaculis nibh varius varius. Vestibulum aliquet accumsan semper. In dapibus a risus elementum molestie. Suspendisse pulvinar euismod cursus. Pellentesque pretium, sem eget imperdiet faucibus, lorem diam commodo massa, ac viverra ante quam in metus. Nulla facilisi. Nullam in nibh vel lectus vehicula tristique. Aliquam nec nulla vestibulum, varius nunc eget, pellentesque quam. Suspendisse varius et ante eu ultrices. Donec dictum aliquam turpis vel euismod. Nulla accumsan, erat ut vulputate aliquet, mi felis euismod velit, vitae laoreet mi sem id magna.</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Layouts;