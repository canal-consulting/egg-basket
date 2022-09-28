import React from 'react';


import {Content, Page, InfoCard} from '@backstage/core-components';
import {
    HomePageToolkit,
    HomePageCompanyLogo,
    HomePageStarredEntities,
    TemplateBackstageLogo,
    TemplateBackstageLogoIcon
} from '@backstage/plugin-home';

import {Grid, makeStyles} from '@material-ui/core';




const useLogoStyles = makeStyles(theme => ({
    container: {
        margin: theme.spacing(5, 0),
    },
    svg: {
        width: 'auto',
        height: 100,
    },
    path: {
        fill: '#7df3e1',
    },
}));

export const HomePage = () => {
    /* We will shortly compose a pretty homepage here. */
    // return <h1>Welcome to djimenez Backstage!</h1>;

    const {svg, path, container} = useLogoStyles();

    return (<Page themeId="home">
        <Content>
            <Grid container justifyContent="center" spacing={6}>
                <HomePageCompanyLogo
                    className={container}
                    logo={<TemplateBackstageLogo classes={{svg, path}}/>}
                />

                <Grid container item xs={12}>
                    <Grid item xs={12} md={6}>
                        <HomePageStarredEntities/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <HomePageToolkit
                            tools={Array(8).fill({
                                url: '#',
                                label: 'link',
                                icon: <TemplateBackstageLogoIcon/>,
                            })}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InfoCard title="Composable Section">
                            {/* placeholder for content */}
                            <div style={{height: 370}}/>
                        </InfoCard>
                    </Grid>
                </Grid>
            </Grid>
        </Content>
    </Page>)
};